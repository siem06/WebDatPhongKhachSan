const express = require("express");
const blogController = require("../controllers/BlogController");
const blogRouter = express.Router();

blogRouter.get("/", blogController.get);
blogRouter.get("/:id", blogController.find);
blogRouter.post("/", blogController.create);
blogRouter.put("/:id", blogController.update);
blogRouter.delete("/:id", blogController.delete);

module.exports = blogRouter;
