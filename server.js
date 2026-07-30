require("dotenv").config();

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

function getTransporter() {
  const { EMAIL_USER, EMAIL_APP_PASSWORD } = process.env;

  if (!EMAIL_USER || !EMAIL_APP_PASSWORD) {
    throw new Error("Email credentials are not configured.");
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_APP_PASSWORD,
    },
  });
}

function validateContactPayload(body) {
  const { firstName, lastName, email, phone, service, message } = body;

  if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !message?.trim()) {
    return "First name, last name, email, and message are required.";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.trim())) {
    return "Please provide a valid email address.";
  }

  return null;
}

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/contact", async (req, res) => {
  const validationError = validateContactPayload(req.body);

  if (validationError) {
    return res.status(400).json({ success: false, message: validationError });
  }

  const { firstName, lastName, email, phone, service, message } = req.body;
  const adminEmail = process.env.ADMIN_EMAIL || process.env.EMAIL_USER;
  const fromEmail = process.env.EMAIL_USER;

  if (!adminEmail || !fromEmail) {
    return res.status(500).json({
      success: false,
      message: "Server email configuration is incomplete.",
    });
  }

  const fullName = `${firstName.trim()} ${lastName.trim()}`;

  try {
    const transporter = getTransporter();

    await transporter.sendMail({
      from: `"Nova Tax Contact" <${fromEmail}>`,
      to: adminEmail,
      replyTo: email.trim(),
      subject: `New Contact Form Submission - ${fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email.trim()}</p>
        <p><strong>Phone:</strong> ${phone?.trim() || "Not provided"}</p>
        <p><strong>Service Interest:</strong> ${service?.trim() || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.trim().replace(/\n/g, "<br>")}</p>
      `,
    });

    await transporter.sendMail({
      from: `"Nova Tax" <${fromEmail}>`,
      to: email.trim(),
      subject: "Your message has been received - Nova Tax",
      html: `
        <h2>Thank you, ${firstName.trim()}!</h2>
        <p>Your contact form has been submitted successfully.</p>
        <p>Our team will review your message and get back to you soon.</p>
        <hr />
        <p><strong>Submitted details:</strong></p>
        <p><strong>Service Interest:</strong> ${service?.trim() || "Not specified"}</p>
        <p><strong>Message:</strong> ${message.trim().replace(/\n/g, "<br>")}</p>
        <br />
        <p>Best regards,<br />Nova Tax Team</p>
      `,
    });

    res.json({
      success: true,
      message: "Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact form email error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send your message. Please try again later.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Nova Tax backend running on http://localhost:${PORT}`);
});
