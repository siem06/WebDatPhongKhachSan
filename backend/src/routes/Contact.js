const express = require("express");
const contactController = require("../controllers/ContactController");
const contactRouter = express.Router();
const authJwt = require("../middleware/authJWT");

contactRouter.get("/", contactController.get);
contactRouter.get("/:id", contactController.find);
contactRouter.post("/", contactController.create);
contactRouter.put(
  "/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  contactController.update
);
contactRouter.delete(
  "/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  contactController.delete
);

module.exports = contactRouter;
