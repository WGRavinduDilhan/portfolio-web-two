import { NextRequest, NextResponse } from "next/server";

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

    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.GMAIL_USER || "dilhanwgr2002@gmail.com";

    if (!apiKey) {
      return NextResponse.json(
        { error: "RESEND_API_KEY is not configured on the server." },
        { status: 500 }
      );
    }

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: [recipient],
        reply_to: email,
        subject: `📬 New message from ${fullName}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: auto; padding: 32px; background: #0a0a0a; color: #f0f0f0; border-radius: 16px; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 20px 40px rgba(0,0,0,0.5);">
            <div style="border-left: 4px solid #06b6d4; padding-left: 16px; margin-bottom: 24px;">
              <h2 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">New Inquiry</h2>
              <p style="color: #06b6d4; margin: 4px 0 0 0; font-size: 14px; font-weight: 500; text-transform: uppercase; tracking: 1px;">Portfolio Website Contact Form</p>
            </div>
            
            <div style="background: rgba(255,255,255,0.03); padding: 20px; border-radius: 12px; margin-bottom: 24px; border: 1px solid rgba(255,255,255,0.05);">
              <p style="margin: 0 0 12px 0; font-size: 15px;"><strong style="color: #a3a3a3;">Name:</strong> <span style="color: #ffffff; font-weight: 600;">${fullName}</span></p>
              <p style="margin: 0; font-size: 15px;"><strong style="color: #a3a3a3;">Email:</strong> <a href="mailto:${email}" style="color: #06b6d4; text-decoration: none; font-weight: 600;">${email}</a></p>
            </div>

            <p style="color: #a3a3a3; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; font-weight: 600;">Message Details</p>
            <div style="background: rgba(6,182,212,0.05); padding: 20px; border-radius: 12px; border: 1px solid rgba(6,182,212,0.15); color: #e5e5e5; line-height: 1.6; font-size: 15px; white-space: pre-wrap;">${details}</div>
            
            <hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.1); margin: 32px 0 20px 0;" />
            <p style="color: #666666; font-size: 12px; text-align: center; margin: 0;">You can reply directly to this email to respond to ${fullName}.</p>
          </div>
        `,
      }),
    });

    const data = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error("Resend API error:", data);
      return NextResponse.json(
        { error: "Failed to send email via Resend." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data.id });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}

