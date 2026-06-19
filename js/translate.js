/* ═══════════════════════════════════════════════════════
   Cloudflare Pages Function: translate.js
   Path: functions/api/translate.js
   URL:  /api/translate
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

  const { text, targetLang = "bn" } = body;
  if (!text?.trim())
    return new Response(JSON.stringify({ error: "No text provided" }), { status: 400, headers: cors });

  const langLabel = targetLang === "bn" ? "Bengali (বাংলা)" : "English";
  const prompt = `Translate the following text to ${langLabel}. Reply with ONLY the translation, nothing else, no explanation.

Text: ${text}`;

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
        max_tokens: 500,
        messages:   [{ role: "user", content: prompt }],
      }),
    });

    const data = await res.json();
    const translation = data.content?.[0]?.text?.trim() || "";
    return new Response(JSON.stringify({ translation }), { headers: cors });
  } catch (e) {
    return new Response(JSON.stringify({ error: "Translation failed" }), { status: 500, headers: cors });
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
