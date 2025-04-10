import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Configure the transporter using your SMTP credentials.
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "your_smtp_host",         // e.g., "smtp.protonmail.ch"
      port: Number(process.env.SMTP_PORT) || 465,                // Typically 465 for secure SMTP
      secure: process.env.SMTP_SECURE === "true" || true,        // true if using port 465
      auth: {
        user: process.env.SMTP_USER || "your_smtp_username",     // Your SMTP username
        pass: process.env.SMTP_PASS || "your_smtp_password",     // Your SMTP password
      },
    });

    // Hardcode the recipient email address to "arabicroyaltrade@proton.me"
    const mailOptions = {
      from: process.env.SMTP_FROM || "arabicroyaltrade@proton.me", // Sender email address
      to: "arabicroyaltrade@proton.me",                              // Receiving email address
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email: ", error);
    return new Response(
      JSON.stringify({ error: "Failed to send email" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
