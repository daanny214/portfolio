import { Resend } from "resend";

const MAX_LENGTHS = {
  name: 100,
  email: 200,
  subject: 200,
  message: 5000,
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { error: "Email service not configured" },
        { status: 500 },
      );
    }

    const body = await request.json();

    const fields = {} as Record<keyof typeof MAX_LENGTHS, string>;
    for (const key of Object.keys(MAX_LENGTHS) as (keyof typeof MAX_LENGTHS)[]) {
      const value = body?.[key];
      if (typeof value !== "string" || value.trim().length === 0) {
        return Response.json(
          { error: `Missing or invalid field: ${key}` },
          { status: 400 },
        );
      }
      if (value.length > MAX_LENGTHS[key]) {
        return Response.json(
          { error: `Field too long: ${key}` },
          { status: 400 },
        );
      }
      fields[key] = value.trim();
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      return Response.json({ error: "Invalid email address" }, { status: 400 });
    }

    const name = escapeHtml(fields.name);
    const email = escapeHtml(fields.email);
    const subject = escapeHtml(fields.subject);
    const message = escapeHtml(fields.message);

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "daanny214@gmail.com",
      replyTo: fields.email,
      subject: `[Portfolio] ${fields.subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #9333ea;">New message from your portfolio!</h2>
          <div style="background: #f4f4f4; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-line;">${message}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      return Response.json({ error: "Failed to send message" }, { status: 400 });
    }

    return Response.json({ data }, { status: 200 });
  } catch {
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
