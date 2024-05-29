const nodemailer = require("nodemailer");

// Cấu hình transporter cho Nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.HOST,
  service: "gmail",
  port: Number(process.env.PORT),
  secure: Boolean(process.env.SECURE),
  auth: {
    user: "hongsiem2002@gmail.com",
    pass: "puqf chcl rkgq tbxk", // Bạn nên lưu thông tin này vào biến môi trường để bảo mật
  },
});

// Hàm gửi email xác nhận địa chỉ email
function sendConfirmationEmail(recipientEmail, token) {
  const emailOption = {
    from: "hongsiem2002@gmail.com",
    to: recipientEmail,
    subject: "Xác nhận địa chỉ email",
    html: `<p>Mã OTP của bạn là: ${token}.</a> 
    Vui lòng không chia sẻ mã này cho bất cứ ai!</p>`,
  };

  transporter.sendMail(emailOption, function (error, info) {
    if (error) {
      console.log("Error: ", error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });
}

// Hàm gửi email xác nhận đặt phòng
function sendEmailConfi(recipientEmail, book) {
  const emailOption = {
    from: "hongsiem2002@gmail.com",
    to: recipientEmail,
    subject: "Xác nhận đặt phòng",
    html: `<p>Thông tin đặt phòng của bạn:</p>
           <p>Mã đặt phòng: ${book.id}</p>
           <p>Tổng giá: ${book.totalPrice}</p>
           <p>Ngày đặt: ${book.bookingDate}</p>`,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(emailOption, function (error, info) {
      if (error) {
        console.log("Error: ", error);
        reject(error);
      } else {
        console.log("Email sent: ", info.response);
        resolve(info);
      }
    });
  });
}

module.exports = { sendConfirmationEmail, sendEmailConfi };
