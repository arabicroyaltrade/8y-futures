/// <reference types="node" />
/// <reference types="nodemailer" />

// Force this API route to run with Node.js runtime so Node globals (like process) are available.
export const runtime = "nodejs";

import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Basic input validation
    if (!name || !email || !message) {
      console.error("Validation error: Missing fields", { name, email, message });
      return new Response(
        JSON.stringify({ error: "All fields (name, email, message) are required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Validate email format using a basic regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error("Validation error: Invalid email format", { email });
      return new Response(
        JSON.stringify({ error: "Invalid email format." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Prepare the email options
    const mailOptions = {
      from: process.env.SMTP_FROM || "8y-futures@proton.me",
      to: "8y-futures@proton.me", // Destination email address
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Attempt to send the email
    const info = await transporter.sendMail(mailOptions);
    
    // Log information for debugging and, if using Ethereal, show the preview URL
    console.log("Message sent: %s", info.messageId);
    const previewUrl = nodemailer.getTestMessageUrl(info);
    if (previewUrl) {
      console.log("Preview URL: %s", previewUrl);
    }

    return new Response(
      JSON.stringify({ message: "Email sent successfully", previewUrl }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    console.error("Error sending email:", errMsg);
    return new Response(
      JSON.stringify({ error: "Failed to send email. Please try again later." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
