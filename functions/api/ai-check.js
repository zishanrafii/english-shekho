/* ═══════════════════════════════════════════════════════
   Cloudflare Pages Function: ai-check.js
   Path: functions/ai-check.js
   URL:  /api/ai-check  (automatic — Cloudflare Pages convention)

   Setup:
   1. Cloudflare Pages Dashboard → তোমার site → Settings → Environment variables
   2. Key: ANTHROPIC_API_KEY
   3. Value: তোমার Claude API key (sk-ant-...)
   4. Redeploy করো
   ═══════════════════════════════════════════════════════ */

export async function onRequestPost(context) {
  const corsHeaders = {
    "Access-Control-Allow-Origin":  "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type":                 "application/json",
  };

  /* ── API key চেক ── */
  const apiKey = context.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "API key not configured" }), {
      status: 500, headers: corsHeaders,
    });
  }

  /* ── Request body parse ── */
  let body;
  try {
    body = await context.request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400, headers: corsHeaders,
    });
  }

  const { text, type } = body;

  if (!text || text.trim().split(/\s+/).filter(Boolean).length < 5) {
    return new Response(JSON.stringify({ error: "Text too short" }), {
      status: 400, headers: corsHeaders,
    });
  }

  const typeLabels = {
    paragraph: "Paragraph",
    essay:     "Essay",
    email:     "Email",
    story:     "Story / Narrative",
  };
  const label = typeLabels[type] || "Writing";

  const prompt = `You are an English writing coach for Bengali learners. Analyze the following ${label} written by a Bengali student learning English.

Respond ONLY with a valid JSON object in this exact format (no markdown, no extra text):
{
  "grammar": <number 0-100>,
  "vocabulary": <number 0-100>,
  "structure": <number 0-100>,
  "overall": <number 0-100>,
  "strengths": ["<strength 1 in Bengali>", "<strength 2 in Bengali>", "<strength 3 in Bengali>"],
  "improve": ["<suggestion 1 in Bengali>", "<suggestion 2 in Bengali>", "<suggestion 3 in Bengali>"],
  "corrected": "<one corrected/improved version of the first or most important sentence, in English>",
  "summary": "<2-3 sentence overall feedback in Bengali>"
}

Be honest but encouraging. Scores should reflect actual quality. Strengths and improvements must be specific to THIS text, not generic.

Student's ${label}:
"""
${text.slice(0, 2000)}
"""`;

  /* ── Claude API call ── */
  try {
    const claudeRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type":        "application/json",
        "x-api-key":           apiKey,
        "anthropic-version":   "2023-06-01",
      },
      body: JSON.stringify({
        model:      "claude-haiku-4-5-20251001",
        max_tokens: 800,
        messages:   [{ role: "user", content: prompt }],
      }),
    });

    if (!claudeRes.ok) {
      const errText = await claudeRes.text();
      return new Response(JSON.stringify({ error: "Claude API failed", detail: errText }), {
        status: 502, headers: corsHeaders,
      });
    }

    const claudeData = await claudeRes.json();
    const raw    = claudeData.content.map(c => c.text || "").join("").trim();
    const clean  = raw.replace(/```json|```/g, "").trim();

    let feedback;
    try {
      feedback = JSON.parse(clean);
    } catch {
      return new Response(JSON.stringify({ error: "Invalid AI response format" }), {
        status: 500, headers: corsHeaders,
      });
    }

    /* ── সব required field আছে কিনা ── */
    for (const key of ["grammar", "vocabulary", "structure", "overall", "strengths", "improve"]) {
      if (feedback[key] === undefined) {
        return new Response(JSON.stringify({ error: `Missing field: ${key}` }), {
          status: 500, headers: corsHeaders,
        });
      }
    }

    return new Response(JSON.stringify(feedback), {
      status: 200, headers: corsHeaders,
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: "Internal error", detail: err.message }), {
      status: 500, headers: corsHeaders,
    });
  }
}

/* ── CORS preflight ── */
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
