const sendMailer = require("../utils/mailer");

const sendMail = async (req, res) => {
  try {
    const { email, message } = req.body;
    if (!email && !message) {
      req.status(400).send("Enter all fields please");
    }
    await sendMailer(email, message);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server issue" });
  }
};

module.exports = { sendMail };
