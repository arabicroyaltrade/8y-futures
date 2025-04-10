/// <reference types="node" />
/// <reference types="nodemailer" />

// Force this API route to use the Node.js runtime (required for nodemailer)
export const runtime = "nodejs";

import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Basic input validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "All fields (name, email, message) are required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // For testing: create a test account using Ethereal.
    // For production, replace this with your own SMTP credentials.
    const testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.ethereal.email",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true" ? true : false, // true for 465, false for others
      auth: {
        user: process.env.SMTP_USER || testAccount.user,
        pass: process.env.SMTP_PASS || testAccount.pass,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM || "no-reply@example.com",
      to: "arabicroyaltrade@proton.me", // Destination email address
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    return new Response(
      JSON.stringify({ message: "Email sent successfully", previewUrl: nodemailer.getTestMessageUrl(info) }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error sending email: ", error);
    return new Response(
      JSON.stringify({ error: "Failed to send email. Please try again later." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
