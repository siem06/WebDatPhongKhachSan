const keys = require("../key.json");
const fs = require("fs");
const { google } = require("googleapis");
const SCOPE = ["https://www.googleapis.com/auth/drive"];
const { Readable } = require("stream");
const bcrypt = require("bcrypt");
const { sendConfirmationEmail } = require("../models/SendEmail");
const db = require("../models");
const jwt = require("jsonwebtoken");
const config = require("../config/auth");

class AccountController {
  get(req, res) {
    db.user
      .findAll()
      .then((users) => {
        console.log(users);
        res.json(users);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ message: "Server error" });
      });
  }

  findById(req, res) {
    db.user
      .findByPk(req.params.id)
      .then((user) => {
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }
        console.log(user);
        res.json(user);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ message: "Server error" });
      });
  }
  findUser(req, res) {
    db.user
      .findUser(req.params.id)
      .then((value) => {
        const roleIds = value.roles.map((role) => role.id);
        res.json({ ...value.dataValues, roles: roleIds });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send("Server error");
      });
  }
  async register(req, res) {
    const otp = db.user.generateOTP();
    const { password, repassword, email, username } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const pass_encrypt = bcrypt.hashSync(password, salt);
    const data = {
      password: pass_encrypt,
      email,
      username,
      phone: null,
      status: 0,
      avatar: null,
      birthday: null,
    };

    if (password !== repassword) {
      return res.status(400).json({ message: "Mật khẩu nhập lại không khớp" });
    }

    try {
      let userConfirm = await db.user.findOne({ where: { email } });

      if (userConfirm) {
        if (userConfirm.status === 0) {
          const result = await db.user.updateByEmail(email, data);

          req.session.otpInfo = {
            email: req.body.email,
            otp,
            otpExpiration: Date.now() + 5 * 60 * 1000, // Hết hạn sau 5 phút
          };

          console.log("OTP", req.session);
          sendConfirmationEmail(req.body.email, otp);
          return res.json(result);
        } else {
          return res.status(403).json({ message: "Tài khoản đã tồn tại" });
        }
      }

      const user = await db.user.create(data);
      if (req.body.role) {
        const roles = await db.role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles,
            },
          },
        });
        await user.setRoles(roles);
      } else {
        await user.setRoles([1]); // Thiết lập role mặc định là 0
      }
      req.session.otpInfo = {
        email: req.body.email,
        otp,
        otpExpiration: Date.now() + 5 * 60 * 1000, // Hết hạn sau 5 phút
      };

      sendConfirmationEmail(req.body.email, otp);
      return res.json(user);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Server internal error" });
    }
  }

  verifyOTP(req, res) {
    const { otp, email } = req.body;
    const { otpInfo } = req.session;

    if (!otp || !otpInfo || !otpInfo.otp || !otpInfo.email) {
      return res
        .status(400)
        .json({ message: "OTP information is missing or invalid" });
    }
    if (otp !== otpInfo.otp || email !== otpInfo.email) {
      return res.status(400).json({ message: "Invalid OTP or Email" });
    }
    if (Date.now() > otpInfo.otpExpiration) {
      return res.status(400).json({ message: "OTP expired" });
    }

    db.user
      .update({ status: 1 }, { where: { email } })
      .then((user) => {
        res.json({ message: "OTP verified successfully", user });
        delete req.session.otpInfo;
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
      });
  }

  update(req, res) {
    const newData = {
      username: req.body.username,
      email: req.body.email,
      phone: req.body.phone,
      birthday: req.body.birthday,
      status: req.body.status,
      role: req.body.role,
    };

    Object.keys(newData).forEach((key) => {
      if (newData[key] === undefined || newData[key] === null) {
        delete newData[key];
      }
    });

    db.user
      .update(newData, { where: { id: req.params.id } })
      .then(async (result) => {
        if (result[0] === 0) {
          return res.status(404).json({ message: "User not found" });
        }
        const user = await db.user.findByPk(req.params.id);
        res.json({ message: "User updated successfully", user });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ message: "Server internal error" });
      });
  }
  updateStatus(req, res) {
    const newData = {
      status: req.body.status,
    };

    db.user
      .update(newData, { where: { id: req.params.id } })
      .then(async (result) => {
        if (result[0] === 0) {
          return res.status(404).json({ message: "User not found" });
        }
        const user = await db.user.findByPk(req.params.id);
        res.json({ message: "User updated successfully", user });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ message: "Server internal error" });
      });
  }

  delete(req, res) {
    db.user
      .destroy({ where: { id: req.params.id } })
      .then((result) => {
        if (result === 0) {
          return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: "User deleted successfully" });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ message: "Server internal error" });
      });
  }

  async login(req, res) {
    const { password, email } = req.body;
    console.log(password, email);
    try {
      const user = await db.user.findOne({
        where: { email },
        include: [
          {
            model: db.role,

            attributes: ["id"],
            through: { attributes: [] },
          },
        ],
      });

      if (!user) {
        return res.status(401).json({ message: "Tài khoản không tồn tại" });
      }

      const validPassword = await bcrypt.compare(password, user.password);

      if (!validPassword) {
        return res.status(401).json({ message: "Mật khẩu không đúng" });
      }
      console.log(user);
      const token = jwt.sign({ id: user.id }, config.secret, {
        algorithm: "HS256",
        expiresIn: 86400,
      });

      const roleIds = user.roles.map((role) => role.id);
      console.log(roleIds);
      req.session.login = true;
      req.session.userEmail = email;
      req.session.userId = user.id;
      req.session.userRole = roleIds;
      console.log(req.session);

      res.json({ ...user.dataValues, roles: roleIds, accessToken: token });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  logout(req, res) {
    try {
      req.session.destroy();
      res.json({ message: "Logout successful" });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  forgotPassword(req, res) {
    const email = req.body.email;
    const otp = db.user.generateOTP();
    if (!email) return res.status(401).json({ message: "Email không có " });

    db.user
      .findOne({ where: { email } })
      .then((existingUser) => {
        if (!existingUser) {
          return res
            .status(409)
            .json({ message: "Email này chưa có tài khoản" });
        }

        req.session.otpForgot = {
          email,
          otp,
          otpExpiration: Date.now() + 5 * 60 * 1000, // Hết hạn sau 5 phút
        };
        console.log(req.session);
        sendConfirmationEmail(email, otp);
        res.json({ message: "Đã gửi thành công" });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ message: "Server internal error" });
      });
  }

  verifOTPPassword(req, res) {
    const { otp, email } = req.body;
    const { otpForgot } = req.session;

    if (!otpForgot || !otpForgot.otp || !otpForgot.email) {
      return res
        .status(400)
        .json({ message: "OTP information is missing or invalid" });
    }
    if (otp !== otpForgot.otp || email !== otpForgot.email) {
      return res.status(400).json({ message: "Invalid OTP or Email" });
    }
    if (Date.now() > otpForgot.otpExpiration) {
      return res.status(400).json({ message: "OTP expired" });
    }
    res.json({ message: "OTP correct" });
  }

  resetPassword(req, res) {
    const { newpass, renewpass } = req.body;
    if (!newpass || !renewpass || newpass !== renewpass) {
      return res.json({ message: "Mật khẩu không khớp" });
    }
    const salt = bcrypt.genSaltSync(10);
    const pass_encrypt = bcrypt.hashSync(newpass, salt);

    db.user
      .update(
        { password: pass_encrypt },
        { where: { email: req.session.otpForgot.email } }
      )
      .then((user) => {
        res.json({ message: "Forgot successfully", user });
        delete req.session.otpForgot;
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
      });
  }

  async changePassword(req, res) {
    const { oldPass, newPass, reNewPass } = req.body;

    if (newPass !== reNewPass) {
      return res.status(401).json({ message: "Mật khẩu không khớp!" });
    }

    const userId = req.session.userId;

    try {
      const user = await db.user.findByPk(userId);
      if (!user) {
        return res.status(404).json({ message: "Người dùng không tồn tại!" });
      }

      const validPassword = await bcrypt.compare(oldPass, user.password);
      if (!validPassword) {
        return res.status(401).json({ message: "Mật khẩu không đúng!" });
      }

      const salt = bcrypt.genSaltSync(10);
      const passEncrypt = bcrypt.hashSync(newPass, salt);

      await db.user.update(
        { password: passEncrypt },
        { where: { id: userId } }
      );

      res.json({ message: "Thành công!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Lỗi hệ thống!" });
    }
  }
  async updateUserRoles(req, res) {
    const { Op } = db.Sequelize;
    const userId = req.params.id;
    const { roles } = req.body;
    console.log(roles, userId);
    try {
      // Tìm người dùng theo ID
      const user = await db.user.findByPk(userId);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Tìm các quyền theo mảng roles
      const rolesToUpdate = await db.role.findAll({
        where: {
          name: {
            [Op.or]: roles,
          },
        },
      });

      if (!rolesToUpdate.length) {
        return res.status(400).json({ message: "Roles not found" });
      }

      // Cập nhật quyền của người dùng
      await user.setRoles(rolesToUpdate);

      res.status(200).json({ message: "User roles updated successfully" });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "An error occurred", error: error.message });
    }
  }
  async uploadFile(req, res) {
    try {
      const authClient = await authorize();
      const drive = google.drive({ version: "v3", auth: authClient });

      const fileMetadata = {
        name: req.file.originalname,
        parents: ["1IGKvjoQQe-JpiILG4wbjBxfZxhPp3cIC"],
      };

      const fileStream = new Readable();
      fileStream.push(req.file.buffer);
      fileStream.push(null);

      const media = {
        mimeType: req.file.mimetype,
        body: fileStream,
      };

      const response = await drive.files.create({
        resource: fileMetadata,
        media: media,
        fields: "id, webContentLink, thumbnailLink",
      });

      const userId = req.session.userId;
      const linkAvatar = `https://drive.google.com/thumbnail?id=${response.data.id}&sz=w1000`;

      await db.user.update({ avatar: linkAvatar }, { where: { id: userId } });
      const user = await db.user.findByPk(userId);
      console.log(user);
      res.send({ message: "Uploaded file successfully", user });
    } catch (err) {
      console.error("Error uploading file:", err);
      res.status(500).send("Error uploading file");
    }
  }
}

const authorize = async () => {
  const jwtClient = new google.auth.JWT(
    keys.client_email,
    null,
    keys.private_key,
    SCOPE
  );
  try {
    await jwtClient.authorize();
    console.log("Kết nối Google OAuth2 thành công!");
    return jwtClient;
  } catch (error) {
    console.error("Lỗi kết nối Google OAuth2:", error);
    throw error;
  }
};

module.exports = new AccountController();
