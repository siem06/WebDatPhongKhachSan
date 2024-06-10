module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "users",
    {
      username: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
      },
      avatar: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.INTEGER,
      },
      birthday: {
        type: Sequelize.DATE,
      },
    },
    {
      timestamps: true,
    }
  );

  User.generateOTP = function () {
    const otpLength = 6;
    let otp = "";

    let randomNumber = Math.floor(Math.random() * 1000000).toString();

    while (randomNumber.length < otpLength) {
      randomNumber = "0" + randomNumber;
    }

    otp = randomNumber.slice(-otpLength);

    return otp;
  };

  User.findUser = async function (id) {
    const db = require("../models");

    try {
      const user = await this.findByPk(id, {
        include: [
          { model: db.booking, as: "bookings" },
          { model: db.room, as: "favoriteUsers" },
          { model: db.role, as: "roles" },
        ],
      });
      return user;
    } catch (error) {
      console.error("Error fetching user with bookings:", error);
      throw error;
    }
  };

  User.findByEmail = async function (email) {
    const db = require("../models");

    try {
      const user = await User.findOne({ where: { email, status: 1 } });
      return user;
    } catch (error) {
      console.error("Error fetching user by email:", error);
      throw error;
    }
  };
  User.findByEmail1 = async function findByEmail1(email) {
    try {
      const user = await User.findOne({ where: { email } });
      return user;
    } catch (error) {
      throw error;
    }
  };

  User.getAboutStatus = async function getAboutStatus(id) {
    try {
      const user = await User.findByPk(id, { attributes: ["password"] });
      return user ? user.password : null;
    } catch (error) {
      throw error;
    }
  };

  User.updateByEmail = async function updateByEmail(email, data) {
    try {
      await User.update(data, { where: { email } });
      return await User.findByEmail(email);
    } catch (error) {
      throw error;
    }
  };

  User.createUser = async function createUser(data) {
    try {
      const existingUser = await User.findByEmail(data.email);
      if (existingUser) {
        throw new Error("Email already exists");
      }
      const newUser = await User.create(data);
      return newUser;
    } catch (error) {
      throw error;
    }
  };

  User.login = async function login(email, password) {
    try {
      const user = await User.findOne({ where: { email, password } });
      return user;
    } catch (error) {
      throw error;
    }
  };

  User.saveAvatarToDatabase = async function saveAvatarToDatabase(
    userId,
    webViewLink
  ) {
    try {
      await User.update({ avatar: webViewLink }, { where: { id: userId } });
      console.log("Avatar URL saved to database:", webViewLink);
    } catch (error) {
      console.error("Error saving avatar URL to database:", error);
      throw error;
    }
  };
  return User;
};
