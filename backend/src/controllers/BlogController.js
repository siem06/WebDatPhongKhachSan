const blogModel = require("../config/db/models/Blog");
const keys = require("../key.json");
const fs = require("fs");
const { google } = require("googleapis");
const SCOPE = ["https://www.googleapis.com/auth/drive"];
const { Readable } = require("stream");
class BlogController {
  getCategory(req, res) {
    let result = blogModel.get_all_category();
    result
      .then(function (value) {
        console.log(value);
        res.json(value);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  getArticle(req, res) {
    let result = blogModel.get_all_article();
    result
      .then(function (value) {
        console.log(value);
        res.json(value);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  getCateByStatus(req, res) {
    let result = blogModel.get_blogCate_status();
    result
      .then(function (value) {
        console.log(value);
        res.json(value);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  getArticleByStatus(req, res) {
    let result = blogModel.get_blogArticle_status();
    result
      .then(function (value) {
        console.log(value);
        res.json(value);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  find(req, res) {
    let result = blogModel.find(req.params.id);
    result
      .then(function (value) {
        console.log(value);
        res.json(value);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  create(req, res) {
    const data = {
      topic: req.body.topic,
      content: req.body.content,
      img: req.body.img,
      type: req.body.type,
      status: 0,
    };
    let result = blogModel.create(data);
    result
      .then(function (value) {
        console.log(value);
        res.json(value);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  update(req, res) {
    const data = {
      topic: req.body.topic,
      content: req.body.content,
      status: 1,
      img: req.body.img,
    };
    let result = blogModel.update(req.params.id, data);
    result
      .then(function (value) {
        console.log(value);
        res.json(value);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  delete(req, res) {
    let result = blogModel.delete(req.params.id);
    result
      .then(function (value) {
        console.log(value);
        res.json(value);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  async uploadImg(req, res) {
    try {
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

      // const thumbnailLink = response.data.thumbnailLink;
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
    console.log("Kết nối Google OAuth2 thành công!");
    return jwtClient;
  } catch (error) {
    console.error("Lỗi kết nối Google OAuth2:", error);
    throw error;
  }
};

module.exports = new BlogController();
