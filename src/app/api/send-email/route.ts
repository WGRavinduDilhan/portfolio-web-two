import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, details } = await req.json();

    // Basic validation
    if (!fullName || !email || !details) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Create Gmail SMTP transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,   // your Gmail address
        pass: process.env.GMAIL_PASS,   // Gmail App Password (not your real password)
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,       // sends to yourself
      replyTo: email,                   // so you can reply directly to the sender
      subject: `📬 New message from ${fullName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 24px; background: #0f0f0f; color: #f0f0f0; border-radius: 12px;">
          <h2 style="color: #22d3ee; margin-bottom: 4px;">New Contact Form Submission</h2>
          <p style="color: #888; margin-top: 0;">From your portfolio website</p>
          <hr style="border-color: #333; margin: 20px 0;" />
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #22d3ee;">${email}</a></p>
          <p><strong>Message:</strong></p>
          <p style="background: #1a1a1a; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${details}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
