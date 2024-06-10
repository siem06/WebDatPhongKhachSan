const express = require("express");
const accountController = require("../controllers/AccountController");
const { authUser } = require("../middleware/auth");
const accountRouter = express.Router();
const multer = require("multer");
const upload = multer();
accountRouter.get("/all", accountController.get);
accountRouter.post("/verify", accountController.verifyOTP);
accountRouter.post("/register", accountController.register);
accountRouter.post("/login", accountController.login);
accountRouter.post("/logout", accountController.logout);
accountRouter.post("/forgot", accountController.forgotPassword);
accountRouter.post(
  "/uploadImage",
  upload.single("avatar"),
  accountController.uploadFile
);
accountRouter.post("/verifyPassword", accountController.verifOTPPassword);
accountRouter.post("/resetPassword", accountController.resetPassword);
accountRouter.put("/changepassword", accountController.changePassword);

accountRouter.put("/:id/edit", accountController.update);
accountRouter.delete("/:id", accountController.delete);
accountRouter.get("/getAll/:id", accountController.findUser);
accountRouter.get("/:id", authUser(), accountController.findById);

accountRouter.get("otp");

module.exports = accountRouter;
