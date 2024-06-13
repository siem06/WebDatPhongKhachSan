const express = require("express");
const blogController = require("../controllers/BlogController");
const blogRouter = express.Router();
const multer = require("multer");
const upload = multer();
blogRouter.get("/allcategory", blogController.getCategory);
blogRouter.get("/allarticle", blogController.getArticle);

blogRouter.get("/getarticle", blogController.getArticleByStatus);
blogRouter.get("/getcategory", blogController.getCateByStatus);
blogRouter.post(
  "/uploadImg",
  upload.single("avatar"),
  blogController.uploadImg
);
blogRouter.get("/:id", blogController.find);
blogRouter.post("/", blogController.create);
blogRouter.put("/:id", blogController.update);
blogRouter.delete("/:id", blogController.delete);

module.exports = blogRouter;
