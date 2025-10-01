// sendEmail.js - Vercel serverless function
import nodemailer from "nodemailer";

// Accept both legacy named export and Vercel default export, but prefer default
export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Basic JSON body parsing guard (Vercel usually parses JSON automatically)
  const { name, email, message } = req.body || {};

  // Input validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields: name, email, message" });
  }

  // Mail credentials and targets
  const MAIL_USER = process.env.MAIL_USER || "officialshivam749@gmail.com";
  const MAIL_PASS = process.env.MAIL_PASS || process.env.GMAIL_APP_PASSWORD; // support old var name
  const MAIL_TO = process.env.MAIL_TO || MAIL_USER; // default to inbox of authenticated user

  if (!MAIL_USER || !MAIL_PASS) {
    console.error("Email env missing: MAIL_USER and MAIL_PASS/GMAIL_APP_PASSWORD are required");
    return res.status(500).json({ error: "Email is not configured on the server" });
  }

  // Create transporter - Gmail via SMTP
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: MAIL_USER,
      pass: MAIL_PASS, // App Password (with 2FA)
    },
  });

  try {
    await transporter.sendMail({
      from: `Portfolio Contact <${MAIL_USER}>`, // must be authenticated sender for Gmail
      to: MAIL_TO,
      replyTo: email, // so you can reply directly to the sender
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:#111">
          <h2>New Portfolio Message</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <hr />
          <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
        </div>
      `,
    });
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return res.status(500).json({ success: false, error: "Failed to send email" });
  }
}

// Simple HTML escaper
function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
