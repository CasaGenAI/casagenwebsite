// Cloudflare Worker entry point.
// Handles /api/* routes — everything else falls through to the static SPA.

interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
  POSTMARK_SERVER_TOKEN?: string;
  POSTMARK_SENDER_EMAIL?: string;
  POSTMARK_SENDER_NAME?: string;
}

interface ContactBody {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
}

async function handleContact(request: Request, env: Env): Promise<Response> {
  if (request.method !== "POST") {
    return Response.json({ success: false, message: "Method not allowed" }, { status: 405 });
  }

  let body: ContactBody;
  try {
    body = await request.json();
  } catch {
    return Response.json({ success: false, message: "Invalid request body" }, { status: 400 });
  }

  // Validation
  if (!body.name || body.name.trim().length < 2) {
    return Response.json({ success: false, message: "Name must be at least 2 characters" }, { status: 400 });
  }
  if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return Response.json({ success: false, message: "Invalid email address" }, { status: 400 });
  }
  if (!body.message || body.message.trim().length < 10) {
    return Response.json({ success: false, message: "Message must be at least 10 characters" }, { status: 400 });
  }

  // Send via Postmark
  if (!env.POSTMARK_SERVER_TOKEN) {
    console.warn("POSTMARK_SERVER_TOKEN missing — skipping email send");
  } else {
    const senderEmail = env.POSTMARK_SENDER_EMAIL ?? "info@casagen.ai";
    const senderName = env.POSTMARK_SENDER_NAME ?? "CasaGen";

    try {
      const postmarkRes = await fetch("https://api.postmarkapp.com/email", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-Postmark-Server-Token": env.POSTMARK_SERVER_TOKEN,
        },
        body: JSON.stringify({
          From: `${senderName} <${senderEmail}>`,
          To: senderEmail,
          Cc: "info@casagen.ai",
          Subject: `New contact: ${body.name} — ${body.company ?? "Individual"}`,
          TextBody: [
            `Name: ${body.name}`,
            `Email: ${body.email}`,
            `Brokerage: ${body.company ?? "Not provided"}`,
            "",
            "Message:",
            body.message,
          ].join("\n"),
        }),
      });

      const postmarkBody = await postmarkRes.text();
      if (postmarkRes.ok) {
        console.log(`Postmark accepted (${postmarkRes.status}): ${postmarkBody}`);
      } else {
        console.error(`Postmark rejected (${postmarkRes.status}): ${postmarkBody}`);
      }
    } catch (err) {
      // Email failure is non-blocking — submission still succeeds
      console.error("Postmark error:", err);
    }
  }

  return Response.json(
    { success: true, message: "Thank you! We'll get back to you within 24 hours." },
    { status: 201 }
  );
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/contact") {
      return handleContact(request, env);
    }

    // All other requests → static SPA assets
    return env.ASSETS.fetch(request);
  },
};
