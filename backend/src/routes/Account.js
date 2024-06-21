const express = require("express");
const accountController = require("../controllers/AccountController");
const { authUser } = require("../middleware/auth");
const accountRouter = express.Router();
const multer = require("multer");
const authJwt = require("../middleware/authJWT");
const upload = multer();
accountRouter.get(
  "/all",
  [authJwt.verifyToken, authJwt.isAdmin],
  accountController.get
);
accountRouter.post("/verify", accountController.verifyOTP);
accountRouter.post("/register", accountController.register);
accountRouter.post("/login", accountController.login);
accountRouter.post("/logout", authJwt.verifyToken, accountController.logout);
accountRouter.post("/forgot", accountController.forgotPassword);
accountRouter.post(
  "/uploadImage",
  upload.single("avatar"),
  authJwt.verifyToken,
  accountController.uploadFile
);
accountRouter.post("/verifyPassword", accountController.verifOTPPassword);
accountRouter.post(
  "/resetPassword",

  accountController.resetPassword
);
accountRouter.put(
  "/changepassword",
  authJwt.verifyToken,
  accountController.changePassword
);

accountRouter.put("/:id/edit", authJwt.verifyToken, accountController.update);
accountRouter.put(
  "/updateRole/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  accountController.updateUserRoles
);
accountRouter.put(
  "/updateStatus",
  [(authJwt.verifyToken, authJwt.isAdmin)],
  accountController.updateStatus
);

accountRouter.delete(
  "/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  accountController.delete
);
accountRouter.get(
  "/getAll/:id",
  authJwt.verifyToken,
  accountController.findUser
);
accountRouter.get("/:id", authJwt.verifyToken, accountController.findById);

accountRouter.get("otp");

module.exports = accountRouter;
