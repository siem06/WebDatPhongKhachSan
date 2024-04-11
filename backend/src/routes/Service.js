const express = require("express");
const serviceController = require("../controllers/ServiceController");
const serviceRouter = express.Router();

serviceRouter.get("/", serviceController.get);
serviceRouter.get("/:id", serviceController.find);
serviceRouter.post("/", serviceController.create);
serviceRouter.put("/:id", serviceController.update);
serviceRouter.delete("/:id", serviceController.delete);

module.exports = serviceRouter;
