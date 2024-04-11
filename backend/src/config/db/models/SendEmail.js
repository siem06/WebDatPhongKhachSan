const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.HOST,
  service: "gmail",
  port: Number(process.env.PORT),
  secure: Boolean(process.env.SECURE),
  auth: {
    user: "hongsiem2002@gmail.com",
    pass: "puqf chcl rkgq tbxk",
  },
});

function sendConfirmationEmail(recipientEmail, token) {
  const emailOption = {
    from: "hongsiem2002@gmail.com",
    to: recipientEmail,
    subject: "Xác nhận địa chỉ email",
    html: `<p>Mã OTP xác nhận của bạn là: ${token}</a></p>`,
  };

  transporter.sendMail(emailOption, function (error, info) {
    if (error) {
      console.log("Error: ", error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });
}

module.exports = sendConfirmationEmail;
