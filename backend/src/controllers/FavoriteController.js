const db = require("../models");

class FavoriteController {
  async findById(req, res) {
    try {
      const favorite = await db.favorite.findByPk(req.params.id);
      res.json(favorite);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
  async findByIdA(req, res) {
    try {
      const userId = req.params.id;
      const favorite = await db.favorite.findAll({
        where: {
          userId: userId,
        },
      });
      res.json(favorite);
    } catch (error) {
      console.error("Error fetching favorite rooms by user ID:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async find(req, res) {
    try {
      const favorites = await db.favorite.findAll();
      res.json(favorites);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async create(req, res) {
    try {
      const favorite = await db.favorite.create({
        roomId: req.body.roomId,
        userId: req.body.userId,
      });
      res.json(favorite);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async update(req, res) {
    try {
      const favorite = await db.favorite.findByPk(req.params.id);
      if (!favorite) {
        return res.status(404).json({ error: "Favorite not found" });
      }
      await favorite.update({
        roomId: req.body.roomId,
        userId: req.body.userId,
      });
      res.json(favorite);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async delete(req, res) {
    try {
      const { roomId, userId } = req.body;
      const favorite = await db.favorite.findOne({ where: { roomId, userId } });
      if (!favorite) {
        return res.status(404).json({ error: "Favorite not found" });
      }
      await favorite.destroy();
      res.json({ message: "Favorite deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async deleteAll(req, res) {
    try {
      const userId = req.body.userId;
      const favorites = await db.favorite.findAll({ where: { userId } });

      await Promise.all(
        favorites.map(async (favorite) => {
          await favorite.destroy();
        })
      );

      res.json({ message: "All favorites of the user deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

module.exports = new FavoriteController();
