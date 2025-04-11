import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Basic input validation (adjust as needed)
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields (name, email, message) are required." });
    }

    // Simple email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format." });
    }

    // Create Nodemailer transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true", // false for STARTTLS with the Bridge
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // The Bridge often uses STARTTLS. If you get TLS errors, try requireTLS and disabling cert checks:
      requireTLS: true,
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Construct the email
    const mailOptions = {
      from: process.env.SMTP_FROM || "no-reply@example.com",
      to: "8y-futures@proton.me", // or another destination if you prefer
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent:", info.messageId);

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    console.error("Error sending email:", errMsg);
    return res.status(500).json({ error: "Failed to send email. Please try again later." });
  }
}
