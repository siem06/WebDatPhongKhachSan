const express = require("express");
const contactController = require("../controllers/ContactController");
const contactRouter = express.Router();

// contactRouter.get("/", contactController.get);
// contactRouter.get("/:id", contactController.find);
// contactRouter.post("/", contactController.create);
// contactRouter.put("/:id", contactController.update);
// contactRouter.delete("/:id", contactController.delete);

module.exports = contactRouter;
