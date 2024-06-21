const express = require("express");
const blogController = require("../controllers/BlogController");
const blogRouter = express.Router();
const multer = require("multer");
const upload = multer();
blogRouter.get("/allcategory", blogController.getCategory);
blogRouter.get("/allarticle", blogController.getArticle);
const authJwt = require("../middleware/authJWT");
blogRouter.get("/getarticle", blogController.getArticleByStatus);
blogRouter.get("/getcategory", blogController.getCateByStatus);
blogRouter.post(
  "/uploadImg",
  upload.single("avatar"),
  [authJwt.verifyToken, authJwt.isAdmin],
  blogController.uploadImg
);
blogRouter.get("/:id", blogController.find);
blogRouter.post(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin],
  blogController.create
);
blogRouter.put(
  "/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  blogController.update
);
blogRouter.delete(
  "/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  blogController.delete
);

module.exports = blogRouter;
