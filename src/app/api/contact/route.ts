import nodemailer from "nodemailer";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

function requiredEnv(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  let payload: ContactPayload;
  try {
    payload = (await req.json()) as ContactPayload;
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name = String(payload.name ?? "").trim();
  const email = String(payload.email ?? "").trim();
  const message = String(payload.message ?? "").trim();

  if (!name || !email || !message) {
    return Response.json(
      { ok: false, error: "Missing required fields" },
      { status: 400 },
    );
  }
  if (!isValidEmail(email)) {
    return Response.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }
  if (message.length > 8000) {
    return Response.json({ ok: false, error: "Message too long" }, { status: 400 });
  }

  const host = requiredEnv("SMTP_HOST");
  const port = Number(requiredEnv("SMTP_PORT"));
  const user = requiredEnv("SMTP_USER");
  const pass = requiredEnv("SMTP_PASS");
  const from = requiredEnv("MAIL_FROM"); // e.g. "Caleb <digital@calebberhane.com>"
  const toOwner = "digital@calebberhane.com";

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br/>");

  const subjectToOwner = `New portfolio message — ${name}`;

  const ownerHtml = `
    <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial; line-height: 1.6;">
      <h2 style="margin:0 0 12px 0;">New message from your portfolio</h2>
      <p style="margin:0 0 8px 0;"><strong>Name:</strong> ${safeName}</p>
      <p style="margin:0 0 8px 0;"><strong>Email:</strong> ${safeEmail}</p>
      <p style="margin:16px 0 8px 0;"><strong>Message:</strong></p>
      <div style="padding:12px 14px; border:1px solid rgba(20,20,20,0.12); border-radius:12px; background:#fafafa;">
        ${safeMessage}
      </div>
    </div>
  `;

  const replySubject = "I got your message — Caleb";
  const replyHtml = `
    <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial; line-height: 1.6;">
      <p style="margin:0 0 12px 0;">Hi ${safeName},</p>
      <p style="margin:0 0 12px 0;">
        Thanks for reaching out — I’ve received your message and I’ll reply as soon as I can.
      </p>
      <p style="margin:0 0 12px 0;">
        If you want to talk sooner, you can book a call here:
        <a href="${requiredEnv("BOOK_CALL_URL")}" target="_blank" rel="noopener noreferrer">
          Schedule a call
        </a>
      </p>
      <p style="margin:18px 0 0 0; color:#6b6b6b; font-size: 14px;">
        — Caleb
      </p>
    </div>
  `;

  try {
    await transporter.verify();

    await transporter.sendMail({
      from,
      to: toOwner,
      replyTo: email,
      subject: subjectToOwner,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: ownerHtml,
    });

    await transporter.sendMail({
      from,
      to: email,
      subject: replySubject,
      text:
        `Hi ${name},\n\n` +
        `Thanks for reaching out — I’ve received your message and I’ll reply as soon as I can.\n\n` +
        `Book a call: ${requiredEnv("BOOK_CALL_URL")}\n\n` +
        `— Caleb`,
      html: replyHtml,
    });

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { ok: false, error: "Email send failed" },
      { status: 500 },
    );
  }
}

