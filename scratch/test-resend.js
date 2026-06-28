const fs = require('fs');
const path = require('path');

// Parse .env.local
const envPath = path.join(__dirname, '..', '.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
      const key = match[1];
      let value = match[2] || '';
      if (value.length > 0 && value.charAt(0) === '"' && value.charAt(value.length - 1) === '"') {
        value = value.substring(1, value.length - 1);
      }
      if (value.length > 0 && value.charAt(0) === "'" && value.charAt(value.length - 1) === "'") {
        value = value.substring(1, value.length - 1);
      }
      process.env[key] = value.trim();
    }
  });
}

const apiKey = process.env.RESEND_API_KEY;
const recipient = process.env.GMAIL_USER || "dilhanwgr2002@gmail.com";

if (!apiKey) {
  console.error("Error: RESEND_API_KEY not found in .env.local");
  process.exit(1);
}

console.log("Sending test email via Resend API to:", recipient);

async function sendTestEmail() {
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: [recipient],
        subject: "🎉 Test Email from Resend!",
        html: `
          <div style="font-family: sans-serif; padding: 20px; background: #0f0f0f; color: #fff; border-radius: 10px;">
            <h2 style="color: #22d3ee;">Resend API is Working!</h2>
            <p>Your portfolio contact form is ready to use Resend.</p>
          </div>
        `,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("SUCCESS! Email sent successfully. Response ID:", data.id);
      console.log("Check your Gmail inbox (or Spam folder) for the test email.");
    } else {
      console.error("Resend API Error:", data);
    }
  } catch (error) {
    console.error("Network Error:", error);
  }
}

sendTestEmail();
