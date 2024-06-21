const express = require("express");
const serviceController = require("../controllers/ServiceController");
const serviceRouter = express.Router();
const authJwt = require("../middleware/authJWT");

serviceRouter.get("/", serviceController.get);
serviceRouter.get("/getService", serviceController.getService);

serviceRouter.get("/:id", serviceController.find);
serviceRouter.post(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin],
  serviceController.create
);
serviceRouter.put(
  "/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  serviceController.update
);
serviceRouter.delete(
  "/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  serviceController.delete
);

module.exports = serviceRouter;
