const db = require("../models");
const room = db.room;
class RoomController {
  async get(req, res) {
    try {
      const rooms = await room.findAll();
      res.json(rooms);
    } catch (error) {
      console.error("Error fetching rooms:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
  getRoomInfo(req, res) {
    room
      .getRoomImg(req.params.id)
      .then((value) => {
        console.log(value);
        res.json(value);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  async find(req, res) {
    try {
      const room = await db.room.findByPk(req.params.id);
      res.json(room);
    } catch (error) {
      console.error("Error fetching room:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
  async create(req, res) {
    try {
      const { type, price, status, description, note, images } = req.body;

      if (!type || !price || !description) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const newRoom = await db.room.create({
        type,
        price,
        status,
        description,
        note,
      });

      if (req.body.services && req.body.services.length > 0) {
        const services = await db.service.findAll({
          where: {
            typeService: {
              [db.Sequelize.Op.or]: req.body.services,
            },
          },
        });
        await newRoom.addServices(services);
      }

      if (images && images.length > 0) {
        const imagePromises = images.map(async (image) => {
          await db.image.create({ roomId: newRoom.id, img: image.img });
        });
        await Promise.all(imagePromises);
      }

      // Return the newly created room
      res.json(newRoom);
    } catch (error) {
      console.error("Error creating room:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async update(req, res) {
    try {
      const roomId = req.params.id;
      const data = {
        type: req.body.type,
        price: req.body.price,
        status: req.body.status,
        description: req.body.description,
        note: req.body.note,
      };
      await room.update(data, { where: { id: roomId } });
      // Lấy lại thông tin Room sau khi cập nhật (bao gồm cả images và services)
      const updatedRoom = await room.findByPk(roomId, {
        include: [
          {
            model: db.image,
            as: "images",
            attributes: ["id", "roomId", "img"],
          },
          {
            model: db.service,
            as: "services",
          },
        ],
      });
      res.json({ message: "Room updated successfully", room: updatedRoom });
    } catch (error) {
      console.error("Error updating room:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
  async delete(req, res) {
    try {
      const roomId = req.params.id;
      await room.destroy({ where: { id: roomId } });
      res.json({ message: "Room deleted successfully" });
    } catch (error) {
      console.error("Error deleting room:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
  async pageNumbers(req, res) {
    try {
      const pageNumber = req.query.page || 1;
      const limit = 1000;
      const offset = (pageNumber - 1) * limit;

      const rooms = await room.findAll({
        limit,
        offset,
        include: [
          {
            model: db.image,
            as: "images",
            attributes: ["id", "roomId", "img"],
          },
          {
            model: db.service,
            as: "services",
          },
        ],
      });
      res.json(rooms);
    } catch (error) {
      console.error("Error fetching paginated rooms:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
  async getRoomsSortedByPrice(req, res) {
    try {
      const { order } = req.params;
      const sortOrder = order.toLowerCase() === "desc" ? "DESC" : "ASC";

      const rooms = await room.findAll({
        order: [["price", sortOrder]],
        include: [
          {
            model: db.image,
            as: "images",
            attributes: ["id", "roomId", "img"],
          },
        ],
      });
      res.json(rooms);
    } catch (error) {
      console.error("Error sorting rooms by price:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
  async getRoomsByType(req, res) {
    try {
      const { type } = req.params;
      const rooms = await room.findAll({
        where: { type: type },
        include: [
          {
            model: db.image,
            as: "images",
            attributes: ["id", "roomId", "img"],
          },
        ],
      });
      res.json(rooms);
    } catch (error) {
      console.error("Error fetching rooms by type:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
  async getReviewByRoomId(req, res) {
    try {
      const { rating } = req.params;
      const reviews = await room.findAll({
        include: [
          {
            model: db.review,
            as: "reviews",
            where: { rating: rating },
            required: true,
          },
          {
            model: db.image,
            as: "images",
            required: false,
          },
        ],
      });
      res.json(reviews);
    } catch (error) {
      console.error("Error fetching reviews for room:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
  async getRoomRatingStats(req, res) {
    const { roomId } = req.params;

    try {
      // Fetch all reviews for the specified room
      const reviews = await db.review.findAll({
        where: { roomId },
      });

      // Calculate the total number of stars and count of reviews
      let totalStars = 0;
      let count = 0;

      reviews.forEach((review) => {
        totalStars += review.rating;
        count++;
      });

      // Calculate the average rating
      const averageRating = count > 0 ? (totalStars / count).toFixed(2) : 0;

      // Prepare the result object
      const result = {
        averageRating,
        ratingsCount: reviews.length,
      };

      // Send the result as JSON response
      res.status(200).json(result);
    } catch (error) {
      console.error("Error calculating average rating:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  async getRoomUtilities(req, res) {
    try {
      const ress = await db.service.findAll({
        attributes: ["utilities"],
      });

      res.status(200).json(ress);
    } catch (error) {
      console.error("Error fetching room utilities:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

module.exports = new RoomController();
