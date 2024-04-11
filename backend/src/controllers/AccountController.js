const accountModel = require("../config/db/models/Account");
const bcrypt = require("bcrypt");
const sendConfirmationEmail = require("../config/db/models/SendEmail");
const { file } = require("googleapis/build/src/apis/file");
class AccountController {
  get(req, res) {
    let result = accountModel.get_all();
    result
      .then(function (value) {
        console.log(value);
        res.json(value);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  find(req, res) {
    let result = accountModel.find(req.params.id);
    result
      .then(function (value) {
        console.log(value);
        res.json(value);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  register(req, res) {
    const otp = accountModel.generateOTP();
    var salt = bcrypt.genSaltSync(10);
    var pass_encrypt = bcrypt.hashSync(req.body.password, salt);
    const data = {
      useName: req.body.useName,
      password: pass_encrypt,
      email: req.body.email,
      phone: req.body.phone,
      avat: req.body.avat,
      status: 0,
      role: 0,
    };

    let result = accountModel.create(data);
    result
      .then(function (value) {
        req.session.otpInfo = {
          email: req.body.email,
          otp: otp,
          otpExpiration: Date.now() + 5 * 60 * 1000, // Hết hạn sau 5 phút
        };
        sendConfirmationEmail(req.body.email, otp);
        res.json(value);
      })
      .catch(function (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
      });
  }
  verifyOTP(req, res) {
    const { otp, email } = req.body;
    const { otpInfo } = req.session;
    console.log("otp: " + otpInfo);
    if (!otp || !otpInfo || !otpInfo.otp || !otpInfo.email) {
      return res
        .status(400)
        .json({ error: "OTP information is missing or invalid" });
    }
    if (otp !== otpInfo.otp || email !== otpInfo.email) {
      return res.status(400).json({ error: "Invalid OTP or Email" });
    }
    if (Date.now() > otpInfo.otpExpiration) {
      return res.status(400).json({ error: "OTP expired" });
    }

    accountModel
      .updatByEmail(email, { status: 1 })
      .then((user) => {
        res.json({ message: "OTP verified successfully", user });
        delete req.session.otpInfo;
        console.log(req.session.otpInfo);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
      });
  }

  update(req, res) {
    const newData = {
      useName: req.body.useName,
      password: req.body.password,
      email: req.body.email,
      phone: req.body.phone,
      avat: req.body.avat,
      status: req.body.status,
      role: req.body.role,
    };

    Object.keys(newData).forEach((key) => {
      if (newData[key] === undefined || newData[key] === null) {
        delete newData[key];
      }
    });

    let result = accountModel.update(req.params.id, newData);

    result
      .then(function (value) {
        console.log(value);
        res.json(value);
      })
      .catch(function (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
      });
  }

  delete(req, res) {
    let result = accountModel.delete(req.params.id);
    result
      .then(function (value) {
        console.log(value);
        res.json(value);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  login(req, res) {
    const password = req.body.password;
    const email = req.body.email;
    let result = accountModel.findByEmail(email);
    result
      .then(async function (value) {
        const validaPassword = await bcrypt.compare(password, value.password);
        if (validaPassword) {
          req.session.login = true;
          req.session.email = email;
          req.session.userId = value.id;
          console.log(req.session.userId);
          res.json({ message: "Login successful", user: value });
        } else {
          res.json({ message: "Incorrect password" });
        }
      })
      .catch(function (error) {
        console.log(error);
        res.json({ message: "Not exist" });
      });
  }
  logout(req, res) {
    try {
      req.session.destroy();
      res.json({ message: "Logout successful" });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  forgotPassword(req, res) {
    const email = req.body.email;
    const otp = accountModel.generateOTP();
    accountModel
      .findByEmail(email)
      .then(function (existing) {
        if (existing) {
          req.session.otpPass = {
            email,
            otp,
            otpExpiration: Date.now() + 5 * 60 * 1000, // Hết hạn sau 5 phút
          };
          sendConfirmationEmail(email, otp);
          return res.json({ message: "Đã gửi thành công" });
        } else {
          return res.json({ message: "Email này chưa có tài khoản" });
        }
      })
      .catch(function (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
      });
  }
  verifPassword(req, res) {
    const { otp, email } = req.body;
    const { otpPass } = req.session;
    if (!otpPass || !otpPass.otp || !otpPass.email) {
      return res
        .status(400)
        .json({ error: "OTP information is missing or invalid" });
    }
    if (otp !== otpPass.otp || email !== otpPass.email) {
      return res.status(400).json({ error: "Invalid OTP or Email" });
    }
    if (Date.now() > otpPass.otpExpiration) {
      return res.status(400).json({ error: "OTP expired" });
    }
    const pass = req.body.password;
    const rePass = req.body.repassword;
    if (pass !== rePass || pass.lenght === 0 || rePass.length === 0)
      return res.json({ error: "Mật khẩu không khớp" });
    var salt = bcrypt.genSaltSync(10);
    var pass_encrypt = bcrypt.hashSync(pass, salt);
    accountModel
      .updatByEmail(email, { password: pass_encrypt })
      .then((user) => {
        res.json({ message: "Forgot successfully", user });
        delete req.session.otpPass;
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
      });
  }
  changePassword(req, res) {
    const { passwordold, passwordnew, rePass } = req.body;
    if (passwordnew !== rePass)
      return res.status(401).json({ error: "Mật khẩu không khớp" });
    const userId = req.session.userId;

    accountModel
      .findById(userId)
      .then(async (user) => {
        const validaPassword = await bcrypt.compare(passwordold, user.password);

        if (validaPassword) {
          var salt = bcrypt.genSaltSync(10);
          var pass_encrypt = bcrypt.hashSync(passwordnew, salt);
          accountModel.update(userId, { password: pass_encrypt });
          return res.json({ message: "Thành công" });
        } else {
          return res.status(401).json({ error: "Mật khẩu không đúng" });
        }
      })
      .catch((error) => {
        return res.status(500).json({ error: "Interval error" });
      });
  }

  async updateImages(req, res) {
    const img = req.file;
    try {
      const driveRes = await drive.file.create({
        requestBody: {
          name: img.originalname,
          mimeType: img.mimeType,
        },
        media: {
          mimeTypes: img.mimeTypes,
          body: fs.createReadStream(img.path),
        },
      });
      const fileUrl = driveRes.data.webViewLink;
      res.status(200).message("Success");
    } catch (error) {
      console.error("Error uploading image to Google Drive:", error);
      res.status(500).send("Error uploading image to Google Drive");
    }
  }
}
module.exports = new AccountController();
