import { NextResponse } from "next/server";
import { SITE } from "../../site";

// Sends the contact form to your inbox through Resend (https://resend.com).
// Required env vars (see .env.example): RESEND_API_KEY
// Optional: CONTACT_FROM (a verified sender, defaults to Resend's onboarding address)

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const hits = new Map<string, number[]>(); // tiny in-memory rate limit

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const now = Date.now();
    const recent = (hits.get(ip) || []).filter((t) => now - t < 10 * 60 * 1000);
    if (recent.length >= 3) {
      return NextResponse.json({ error: "Too many messages. Please try again later." }, { status: 429 });
    }

    const body = await req.json();
    const name = String(body.name || "").trim().slice(0, 100);
    const email = String(body.email || "").trim().slice(0, 200);
    const subject = String(body.subject || "").trim().slice(0, 150);
    const message = String(body.message || "").trim().slice(0, 4000);
    const honeypot = String(body.website || "");

    if (honeypot) return NextResponse.json({ ok: true }); // bot — pretend success
    if (!name || !emailRe.test(email) || message.length < 5) {
      return NextResponse.json({ error: "Please fill in your name, a valid email and a message." }, { status: 400 });
    }

    const key = process.env.RESEND_API_KEY;
    if (!key) {
      return NextResponse.json({ error: "Contact form is not configured yet." }, { status: 503 });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM || "Portfolio <onboarding@resend.dev>",
        to: [SITE.email],
        reply_to: email,
        subject: `[Portfolio] ${subject || "New message"} — ${name}`,
        text: `From: ${name} <${email}>\n\n${message}`,
      }),
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Could not send message right now." }, { status: 502 });
    }
    hits.set(ip, [...recent, now]);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
