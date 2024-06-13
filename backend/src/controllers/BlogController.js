const db = require("../models");
const keys = require("../key.json");
const { google } = require("googleapis");
const { Readable } = require("stream");

const SCOPE = ["https://www.googleapis.com/auth/drive"];

class BlogController {
  async getCategory(req, res) {
    try {
      const categories = await db.blog.findAll({ where: { type: 1 } });
      res.json(categories);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch categories" });
    }
  }

  async getArticle(req, res) {
    try {
      const articles = await db.blog.findAll({ where: { type: 2 } });
      res.json(articles);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch articles" });
    }
  }

  async getCateByStatus(req, res) {
    try {
      const categories = await db.blog.findAll({
        where: { status: 1, type: 1 },
      });
      res.json(categories);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch categories by status" });
    }
  }

  async getArticleByStatus(req, res) {
    try {
      const articles = await db.blog.findAll({ where: { status: 1, type: 2 } });
      res.json(articles);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch articles by status" });
    }
  }

  async find(req, res) {
    try {
      const article = await db.blog.findByPk(req.params.id);
      if (article) {
        res.json(article);
      } else {
        res.status(404).json({ error: "Article not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch article" });
    }
  }

  async create(req, res) {
    try {
      const { topic, content, img, type } = req.body;
      const newArticle = await db.blog.create({
        topic,
        content,
        img,
        type,
        status: 0,
      });
      res.json(newArticle);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to create article" });
    }
  }

  async update(req, res) {
    try {
      const { topic, content, status, img } = req.body;
      const article = await db.blog.findByPk(req.params.id);
      if (article) {
        article.topic = topic;
        article.content = content;
        article.status = status;
        article.img = img;
        await article.save();
        res.json(article);
      } else {
        res.status(404).json({ error: "Article not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to update article" });
    }
  }

  async delete(req, res) {
    try {
      const article = await db.blog.findByPk(req.params.id);
      if (article) {
        await article.destroy();
        res.json({ message: "Article deleted successfully" });
      } else {
        res.status(404).json({ error: "Article not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to delete article" });
    }
  }

  async uploadImg(req, res) {
    try {
      if (!req.file) {
        return res.status(400).send("No file uploaded.");
      }

      const authClient = await authorized();
      const drive = google.drive({ version: "v3", auth: authClient });

      const fileMetadata = {
        name: req.file.originalname,
        parents: ["1IGKvjoQQe-JpiILG4wbjBxfZxhPp3cIC"],
      };

      const fileStream = new Readable();
      fileStream.push(req.file.buffer);
      fileStream.push(null);

      const media = {
        mimeType: req.file.mimetype,
        body: fileStream,
      };

      const response = await drive.files.create({
        resource: fileMetadata,
        media: media,
        fields: "id, webContentLink, thumbnailLink",
      });

      const thumbnailLink = `https://drive.google.com/thumbnail?id=${response.data.id}&sz=w1000`;

      res.send({ message: "Uploaded file successfully", thumbnailLink });
    } catch (err) {
      console.error("Error uploading file:", err);
      res.status(500).send("Error uploading file");
    }
  }
}

const authorized = async () => {
  const jwtClient = new google.auth.JWT(
    keys.client_email,
    null,
    keys.private_key,
    SCOPE
  );
  try {
    await jwtClient.authorize();
    console.log("Connected to Google OAuth2 successfully!");
    return jwtClient;
  } catch (error) {
    console.error("Error connecting to Google OAuth2:", error);
    throw error;
  }
};

module.exports = new BlogController();
