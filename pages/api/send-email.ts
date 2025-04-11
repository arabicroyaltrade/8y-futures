import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { name, email, message } = req.body; // assuming JSON body; adjust if needed

    // Basic input validation
    if (!name || !email || !message) {
      return res.status(400).json({
        error: "All fields (name, email, message) are required.",
      });
    }

    // Validate email format using a basic regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format." });
    }

    // Create transporter using your SMTP credentials (no Ethereal fallback now)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM || "8y-futures@proton.me",
      to: "8y-futures@proton.me",
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: ", info.messageId);

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    console.error("Error sending email:", errMsg);
    return res.status(500).json({
      error: "Failed to send email. Please try again later.",
    });
  }
}
