import nodemailer from "nodemailer";
import "dotenv/config";
export const verifyMail = async (token, email) => {
  try {
    console.log("Email:", email);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailConfiguration = {
      from: process.env.MAIL_USER,
      to: email,
      subject: "Email Verification",
      html: `<p>Click below:</p>
             <a href="http://localhost:3000/verify-email?token=${token}">
             Verify Email</a>`,
    };

    const info = await transporter.sendMail(mailConfiguration);

    console.log("✅ Email sent:", info.response);
  } catch (error) {
    console.log("❌ Email failed:", error.message);
  }
};