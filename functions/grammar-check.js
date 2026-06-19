/* ═══════════════════════════════════════════════════════
   Cloudflare Pages Function: grammar-check.js
   Path: functions/api/grammar-check.js
   URL:  /api/grammar-check
   ═══════════════════════════════════════════════════════ */

export async function onRequestPost(context) {
  const cors = {
    "Access-Control-Allow-Origin":  "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type":                 "application/json",
  };

  if (context.request.method === "OPTIONS")
    return new Response(null, { headers: cors });

  const apiKey = context.env.ANTHROPIC_API_KEY;
  if (!apiKey)
    return new Response(JSON.stringify({ error: "API key not configured" }), { status: 500, headers: cors });

  let body;
  try { body = await context.request.json(); }
  catch { return new Response(JSON.stringify({ error: "Invalid JSON" }), { status: 400, headers: cors }); }

  const { text } = body;
  if (!text?.trim())
    return new Response(JSON.stringify({ error: "No text provided" }), { status: 400, headers: cors });

  const prompt = `You are an English grammar checker for Bangladeshi learners. Check this message for grammar errors.

Message: "${text}"

Reply with ONLY a JSON object (no markdown, no explanation):
{
  "hasErrors": true/false,
  "corrected": "corrected version of the text",
  "errors": ["short description of each error in Bengali"],
  "score": 1-10
}

If no errors, set hasErrors to false, corrected to the original text, errors to [], score to 10.`;

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type":      "application/json",
        "x-api-key":         apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model:      "claude-haiku-4-5-20251001",
        max_tokens: 400,
        messages:   [{ role: "user", content: prompt }],
      }),
    });

    const data = await res.json();
    let raw = data.content?.[0]?.text?.trim() || "{}";
    raw = raw.replace(/```json|```/g, "").trim();
    const result = JSON.parse(raw);
    return new Response(JSON.stringify(result), { headers: cors });
  } catch (e) {
    return new Response(JSON.stringify({ error: "Grammar check failed" }), { status: 500, headers: cors });
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin":  "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
    }
  });
}
