/* ═══════════════════════════════════════════════════════
   Cloudflare Pages Function: speaking-check.js
   Path: functions/api/speaking-check.js
   URL:  /api/speaking-check

   Setup: Cloudflare Pages → Settings → Environment variables
   Key: ANTHROPIC_API_KEY
   ═══════════════════════════════════════════════════════ */

export async function onRequestPost(context) {
  const corsHeaders = {
    "Access-Control-Allow-Origin":  "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type":                 "application/json",
  };

  const apiKey = context.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "API key not configured" }), {
      status: 500, headers: corsHeaders,
    });
  }

  let body;
  try {
    body = await context.request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400, headers: corsHeaders,
    });
  }

  const { transcript, prompt } = body;

  if (!transcript || transcript.trim().split(/\s+/).filter(Boolean).length < 3) {
    return new Response(JSON.stringify({ error: "Transcript too short" }), {
      status: 400, headers: corsHeaders,
    });
  }

  const aiPrompt = `You are an English speaking coach for Bengali learners. Analyze this spoken English transcript from a Bengali student.

Topic/Prompt they were speaking about: "${prompt || "General speaking"}"

Their transcript:
"""
${transcript.slice(0, 1500)}
"""

Respond ONLY with a valid JSON object (no markdown, no extra text):
{
  "fluency": <number 0-100>,
  "pronunciation": <number 0-100>,
  "confidence": <number 0-100>,
  "overall": <number 0-100>,
  "feedback": "<2-3 sentence feedback in Bengali — honest but encouraging, specific to this transcript>"
}

Scoring guide:
- fluency: sentence flow, natural pauses, connected speech
- pronunciation: word clarity based on transcript patterns
- confidence: variety of vocabulary, sentence complexity
- overall: average of the three
- Be honest — don't give high scores for very short or simple responses`;

  try {
    const claudeRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type":      "application/json",
        "x-api-key":         apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model:      "claude-haiku-4-5-20251001",
        max_tokens: 400,
        messages:   [{ role: "user", content: aiPrompt }],
      }),
    });

    if (!claudeRes.ok) {
      const err = await claudeRes.text();
      return new Response(JSON.stringify({ error: "Claude API failed", detail: err }), {
        status: 502, headers: corsHeaders,
      });
    }

    const claudeData = await claudeRes.json();
    const raw   = claudeData.content.map(c => c.text || "").join("").trim();
    const clean = raw.replace(/```json|```/g, "").trim();

    let result;
    try {
      result = JSON.parse(clean);
    } catch {
      return new Response(JSON.stringify({ error: "Invalid AI response" }), {
        status: 500, headers: corsHeaders,
      });
    }

    return new Response(JSON.stringify(result), {
      status: 200, headers: corsHeaders,
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: "Internal error", detail: err.message }), {
      status: 500, headers: corsHeaders,
    });
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin":  "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
    },
  });
}
