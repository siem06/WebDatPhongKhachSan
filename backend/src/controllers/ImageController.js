const db = require("../models");

class ImageController {
  async get(req, res) {
    try {
      const images = await db.image.findAll({
        where: {
          roomId: req.params.id,
        },
      });
      console.log(images);
      res.json(images);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  }

  async find(req, res) {
    try {
      const image = await db.image.findByPk(req.params.id);
      console.log(image);
      res.json(image);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  }

  async create(req, res) {
    try {
      const image = await db.image.create({
        img: req.body.img,
      });
      console.log(image);
      res.json(image);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  }

  async update(req, res) {
    try {
      const image = await db.image.update(
        { img: req.body.img },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      console.log(image);
      res.json(image);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  }

  async delete(req, res) {
    try {
      const result = await db.image.destroy({
        where: {
          id: req.params.id,
        },
      });
      console.log(result);
      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  }
}

module.exports = new ImageController();
