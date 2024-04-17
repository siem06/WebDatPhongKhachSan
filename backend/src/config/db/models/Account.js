const Model = require("../models/model");
const db = require("../db");
const crypto = require("crypto");
const e = require("express");
const sendConfirmationEmail = require("./SendEmail");
const { apikeys } = require("googleapis/build/src/apis/apikeys");

module.exports = new (class UsersModel extends Model {
  constructor() {
    super("account");
  }
  generateOTP() {
    const otpLength = 6;
    let otp = "";

    let randomNumber = Math.floor(Math.random() * 1000000).toString();

    while (randomNumber.length < otpLength) {
      randomNumber = "0" + randomNumber;
    }

    otp = randomNumber.slice(-otpLength);

    return otp;
  }
  //
  findByEmail(email) {
    let cThis = this;
    return new Promise(function (myResolve, myReject) {
      db.query(
        "SELECT * FROM ?? WHERE email = ?",
        [cThis.table, email],
        function (error, result) {
          if (error) throw error;
          myResolve(result[0]);
        }
      );
    });
  }

  //find password by id
  findById(id) {
    let cThis = this;
    return new Promise(function (myResolve, myReject) {
      db.query(
        "SELECT password FROM ?? WHERE id = ?",
        [cThis.table, id],
        function (error, result) {
          if (error) throw error;
          myResolve(result[0]);
        }
      );
    });
  }
  // update status by email
  updateByEmail(email, data) {
    let cThis = this;
    return new Promise(function (myResolve, myReject) {
      db.query(
        "UPDATE  ?? SET ? WHERE email = ?",
        [cThis.table, data, email],
        function (error, result) {
          if (error) throw error;
          let data = cThis.findByEmail(email);
          data
            .then(function (value) {
              myResolve(value);
            })
            .catch(function (error) {
              myReject(error);
            });
        }
      );
    });
  }

  //
  create(data) {
    let cThis = this;

    return new Promise(function (myResolve, myReject) {
      cThis
        .findByEmail(data.email)
        .then(function (existing) {
          if (existing) {
            myReject(new Error("Email already exists"));
          } else {
            db.query(
              "INSERT INTO ?? SET ?",
              [cThis.table, data],
              function (error, result) {
                if (error) throw error;
                let data = cThis.find(result.insertId);
                data
                  .then(function (value) {
                    myResolve(value);
                  })
                  .catch(function (error) {
                    myReject(error);
                  });
              }
            );
          }
        })
        .catch(function (error) {
          myReject(error);
        });
    });
  }

  login(email, password) {
    let cThis = this;
    return new Promise(function (myResolve, myReject) {
      db.query(
        "SELECT * FROM ?? where email =? and password =?",
        [cThis.table, email, password],
        function (error, result) {
          if (error) throw error;
          myResolve(result);
        }
      );
    });
  }

  saveAvatarToDatabase(userId, webViewLink) {
    let cThis = this;
    return new Promise(function (myResolve, myReject) {
      const query = `UPDATE ?? SET avatar = ? WHERE id = ?`;
      db.query(
        query,
        [cThis.table, webViewLink, userId],
        function (err, result) {
          if (err) {
            console.error("Error saving avatar URL to database:", err);
            myResolve(result);
          } else {
            console.log("Avatar URL saved to database:", webViewLink);
          }
        }
      );
    });
  }
})();
