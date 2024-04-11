const express = require("express");
const accountController = require("../controllers/AccountController");
const accountRouter = express.Router();

accountRouter.get("/", accountController.get);
accountRouter.post("/logout", accountController.logout);
accountRouter.get("/login", accountController.login);
accountRouter.get("/:id", accountController.find);
accountRouter.post("/", accountController.register);
accountRouter.put("/verify", accountController.verifyOTP);
accountRouter.post("/forgot", accountController.forgotPassword);
accountRouter.put("/changepassword", accountController.changePassword);
accountRouter.put("/:id", accountController.update);
accountRouter.post("/verifPassword", accountController.verifPassword);
accountRouter.delete("/:id", accountController.delete);
module.exports = accountRouter;
