const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
});

async function sendMailer(email, message) {
  const info = await transporter.sendMail({
    from: '" Ghost is here👻" <kingsuk055@gmail.email>',
    to: `${email}`,
    subject: "Try email sender client nodemailer",
    text: `${message}`,
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

module.exports = sendMailer;
