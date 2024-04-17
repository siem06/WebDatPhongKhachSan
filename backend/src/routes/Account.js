const express = require("express");
const accountController = require("../controllers/AccountController");
const { authUser } = require("../middleware/auth");
const accountRouter = express.Router();
const multer = require("multer");
const upload = multer();
accountRouter.get("/", authUser(), accountController.findById);
accountRouter.get("/all", authUser(), accountController.get);
accountRouter.post("/", accountController.register);
accountRouter.get("/login", accountController.login);
accountRouter.post("/logout", accountController.logout);
accountRouter.put("/verify", accountController.verifyOTP);
accountRouter.post("/forgot", accountController.forgotPassword);
accountRouter.put("/changepassword", accountController.changePassword);
accountRouter.post(
  "/uploadImage",
  upload.single("avatar"),
  accountController.uploadFile
);
accountRouter.post("/verifPassword", accountController.verifPassword);

accountRouter.put("/:id/edit", authUser(), accountController.update);
accountRouter.delete("/:id", authUser(), accountController.delete);

module.exports = accountRouter;
