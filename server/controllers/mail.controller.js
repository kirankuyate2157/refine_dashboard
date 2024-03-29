import nodemailer from "nodemailer";
import * as dotenv from "dotenv";

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

const emails = async (req, res) => {
  const { to, subject, text, html } = req.body;

  const result = await sendEmail(to, subject, text, html);

  if (result) {
    res.status(200).send({ message: "Email sent successfully" });
  } else {
    res.status(500).send({ message: "Error sending email" });
  }
};

export { emails };
