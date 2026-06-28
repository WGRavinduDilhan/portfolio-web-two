const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

// Manually parse .env.local
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

const user = process.env.GMAIL_USER;
// Remove any whitespace from the app password
const pass = process.env.GMAIL_PASS ? process.env.GMAIL_PASS.replace(/\s+/g, '') : '';

console.log("Testing with User:", user);
console.log("Password length (spaces removed):", pass.length);

async function testIPv4Port465() {
  console.log("\n--- Testing Port 465 (SSL) with IPv4 forced ---");
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
    family: 4, // Force IPv4
    tls: {
      rejectUnauthorized: false
    }
  });
  try {
    await transporter.verify();
    console.log("SUCCESS: Port 465 with IPv4 verified successfully!");
    return true;
  } catch (err) {
    console.error("Failed on Port 465 (IPv4):", err.message);
    return false;
  }
}

async function testIPv4Port587() {
  console.log("\n--- Testing Port 587 (TLS) with IPv4 forced ---");
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: { user, pass },
    family: 4, // Force IPv4
    tls: {
      rejectUnauthorized: false
    }
  });
  try {
    await transporter.verify();
    console.log("SUCCESS: Port 587 with IPv4 verified successfully!");
    return true;
  } catch (err) {
    console.error("Failed on Port 587 (IPv4):", err.message);
    return false;
  }
}

async function run() {
  const res465 = await testIPv4Port465();
  if (res465) {
    console.log("\n>>> Solution found! We should use Port 465 with family: 4 and stripped password.");
    return;
  }
  const res587 = await testIPv4Port587();
  if (res587) {
    console.log("\n>>> Solution found! We should use Port 587 with family: 4 and stripped password.");
    return;
  }
  console.log("\n>>> Both failed even with IPv4 forced. Checking if sending email directly works...");
}

run();
