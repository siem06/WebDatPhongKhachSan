// controllers/HotelController.js
const db = require("../models");
class HotelController {
  async get(req, res) {
    try {
      const hotels = await db.hotel.findAll();
      console.log(hotels);
      res.json(hotels);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch hotels" });
    }
  }

  async find(req, res) {
    try {
      const hotel = await db.hotel.findByPk(req.params.id);
      if (hotel) {
        console.log(hotel);
        res.json(hotel);
      } else {
        res.status(404).json({ error: "Hotel not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch hotel" });
    }
  }

  async create(req, res) {
    try {
      const { logo, slogan, information } = req.body;
      const newHotel = await db.hotel.create({ logo, slogan, information });
      console.log(newHotel);
      res.json(newHotel);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to create hotel" });
    }
  }

  async update(req, res) {
    try {
      const { logo, slogan, information } = req.body;
      const hotel = await db.hotel.findByPk(req.params.id);
      if (hotel) {
        hotel.logo = logo;
        hotel.slogan = slogan;
        hotel.information = information;
        await hotel.save();
        console.log(hotel);
        res.json(hotel);
      } else {
        res.status(404).json({ error: "Hotel not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to update hotel" });
    }
  }

  async delete(req, res) {
    try {
      const hotel = await db.hotel.findByPk(req.params.id);
      if (hotel) {
        await hotel.destroy();
        console.log(hotel);
        res.json({ message: "Hotel deleted successfully" });
      } else {
        res.status(404).json({ error: "Hotel not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to delete hotel" });
    }
  }
}

module.exports = new HotelController();
