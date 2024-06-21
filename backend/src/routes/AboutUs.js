const express = require("express");
const aboutUsController = require("../controllers/AboutUsController");
const aboutUsRouter = express.Router();
const authJwt = require("../middleware/authJWT");

aboutUsRouter.get("/", aboutUsController.get);
aboutUsRouter.get("/getAbout", aboutUsController.getAboutStatus);

aboutUsRouter.post(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin],
  aboutUsController.create
);
aboutUsRouter.get("/:id", aboutUsController.find);
aboutUsRouter.put(
  "/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  aboutUsController.update
);
aboutUsRouter.delete(
  "/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  aboutUsController.delete
);

module.exports = aboutUsRouter;
