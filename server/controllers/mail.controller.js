import nodemailer from "nodemailer";
import * as dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const transporter = nodemailer.createTransport(
  {
    host: "smtp.gmail.com",
    port: 587,
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  },
  { from: "Consultation" }
);

const transporter_HV = nodemailer.createTransport(
  {
    host: "smtp.gmail.com",
    port: 587,
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER_HV,
      pass: process.env.EMAIL_PASS_HV,
    },
  },
  { from: "Consultation" }
);

// --------------------
// 3️⃣ Resend Transporter
// --------------------
const resend = new Resend(process.env.RESEND_API_KEY);

// ⭐ Resend Email Function
const sendEmailResend = async (to, subject, html) => {
  try {
    const data = await resend.emails.send({
      from: "Kways <onboarding@resend.dev>",
      to,
      subject,
      html,
    });

    console.log("Resend email sent:", data);
    return true;
  } catch (error) {
    console.log("Resend Error:", error);
    return false;
  }
};
const sendEmail = async (to, subject, text, html) => {
  const mailOptions = {
    from: `"kiran.Dev 🍏 " <kiranrkuyate2021@gmail.com>`,
    to,
    subject,
    text,
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const sendEmailHV = async (to, subject, text, html) => {
  const mailOptions = {
    from: `"Kways.Dev 🍏 `,
    to,
    subject,
    text,
    html,
  };

  try {
    const info = await transporter_HV.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
const emails_HV = async (req, res) => {
  const { to, subject, text, html } = req.body;

  const result = await sendEmailHV(to, subject, text, html);

  if (result) {
    res.status(200).send({ message: "Email sent successfully" });
  } else {
    res.status(500).send({ message: "Error sending email" });
  }
};

const emails = async (req, res) => {
  const { to, subject, text, html } = req.body;

  const result = await sendEmail(to, subject, text, html);

  if (result) {
    res.status(200).send({ message: "Email sent successfully" });
  } else {
    res.status(500).send({ message: "Error sending email" });
  }
};
const emails_resend = async (req, res) => {
  const { to, subject, html } = req.body;

  const result = await sendEmailResend(to, subject, html);

  if (result) res.status(200).send({ message: "Resend email sent successfully" });
  else res.status(500).send({ message: "Error sending via Resend" });
};
export { emails ,emails_HV,emails_resend};
