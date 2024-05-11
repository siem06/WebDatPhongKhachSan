const express = require("express");
const imageController = require("../controllers/ImageController");
const imageRouter = express.Router();

imageRouter.get("/:id", imageController.get);
imageRouter.get("/", imageController.find);
imageRouter.post("/", imageController.create);
imageRouter.put("/:id", imageController.update);
imageRouter.delete("/:id", imageController.delete);

module.exports = imageRouter;
