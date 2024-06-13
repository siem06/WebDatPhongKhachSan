const db = require("../models");
class AboutUsController {
  async create(req, res) {
    try {
      const { information, status } = req.body;
      const aboutus = await db.about.create({ information, status });
      res.status(201).json(aboutus);
    } catch (error) {
      res.status(500).json({
        message:
          error.message || "Some error occurred while creating the About Us.",
      });
    }
  }
  async getAboutStatus(req, res) {
    try {
      const id = req.params.id;
      const aboutus = await db.about.findOne({ where: { status: 1 } });

      if (!aboutus) {
        return res
          .status(404)
          .json({ message: `About Us not found with status=1.` });
      }

      res.json(aboutus);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: `Error retrieving About Us with id=${id}.` });
    }
  }
  async find(req, res) {
    try {
      const id = req.params.id;
      const aboutus = await db.about.findByPk(id);
      if (!aboutus) {
        return res
          .status(404)
          .json({ message: `About Us not found with id=${id}.` });
      }
      res.json(aboutus);
    } catch (error) {
      res
        .status(500)
        .json({ message: `Error retrieving About Us with id=${id}.` });
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;
      const { information, status } = req.body;
      const [numUpdated, updatedAboutus] = await db.about.update(
        { information, status },
        { where: { id } }
      );
      if (numUpdated === 1) {
        res.json({
          message: "About Us was updated successfully.",
          updatedAboutus,
        });
      } else {
        res.status(404).json({
          message: `Cannot update About Us with id=${id}. Maybe About Us was not found or req.body is empty!`,
        });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: `Error updating About Us with id=${id}.` });
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;
      const numDeleted = await db.about.destroy({ where: { id } });
      if (numDeleted === 1) {
        res.json({ message: "About Us was deleted successfully!" });
      } else {
        res.status(404).json({
          message: `Cannot delete About Us with id=${id}. Maybe About Us was not found!`,
        });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: `Could not delete About Us with id=${id}.` });
    }
  }

  async get(req, res) {
    try {
      const aboutuses = await db.about.findAll();
      res.json(aboutuses);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Some error occurred while retrieving About Us." });
    }
  }
}
module.exports = new AboutUsController();
