const { sendConfirmationEmail } = require("../models/SendEmail");
const db = require("../models");
const { where } = require("sequelize");

class BookingController {
  get(req, res) {
    db.booking
      .get_all_booking()
      .then((value) => {
        console.log(value);
        res.json(value);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  getBookingByStatus(req, res) {
    db.booking
      .getBookingStatus()
      .then((value) => {
        console.log(value);
        res.json(value);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  getBooking(req, res) {
    db.booking
      .getBooking(req.params.id)
      .then((value) => {
        console.log(value);
        res.json(value);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  findById(req, res) {
    db.booking
      .findByPk(req.params.id)
      .then((value) => {
        console.log(value);
        res.json(value);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  async create(req, res) {
    const {
      userId,
      totalPrice,
      totalRoom,
      totalDate,
      checkinDate,
      checkoutDate,
      note,
      methodPay,
      rooms,
    } = req.body;

    const bookingData = {
      userId,
      totalPrice,
      totalRoom,
      totalDate,
      checkinDate,
      checkoutDate,
      statusBooking: 1,
      note,
      methodPay,
    };

    try {
      const newBooking = await db.booking.create(bookingData);

      // Thêm các room vào booking
      if (rooms && rooms.length > 0) {
        const roomPromises = rooms.map(async (roomId) => {
          const room = await db.room.findByPk(roomId);
          if (room) {
            await newBooking.addRoom(room);
          }
        });
        await Promise.all(roomPromises);
      }
      const bookingWithUser = await db.booking.findOne({
        where: { id: newBooking.id },
        include: [
          {
            model: db.user,
            attributes: ["id", "userName", "email"],
          },
          {
            model: db.room,
            attributes: ["id", "type", "price"],
            through: { attributes: [] },
          },
        ],
      });

      res.json(bookingWithUser);
    } catch (error) {
      console.error("Error creating booking:", error);
      res.status(500).json({ error: "Error creating booking" });
    }
  }
  getBookingByIdA(req, res) {
    const userId = req.params.id;
    console.log("id: " + userId);

    db.booking
      .findAll({
        where: { userId: userId },
        include: [
          {
            model: db.room,
          },
        ],
      })
      .then((value) => {
        res.json(value);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  async createAandC(req, res) {
    try {
      const { adults, children } = req.body;
      if (adults === undefined || children === undefined) {
        return res
          .status(400)
          .json({ error: "Adults and children are required." });
      }
      const newAandC = await db.booking.create({
        adults,
        children,
      });

      res.status(201).json(newAandC);
    } catch (error) {
      console.error("Error creating booking:", error);
      res.status(500).json({ error: "Server error" });
    }
  }
  async update(req, res) {
    const { id } = req.params;
    const {
      userId,
      totalPrice,
      checkinDate,
      checkoutDate,
      statusBooking,
      note,
      totalRoom,
      totalDate,
      methodPay,
    } = req.body;
    try {
      const booking = await db.booking.findByPk(id);
      if (!booking) {
        return res.status(404).json({ message: "Booking not found" });
      }
      await booking.update(
        {
          userId,
          totalPrice,
          checkinDate,
          checkoutDate,
          statusBooking,
          note,
          totalRoom,
          totalDate,
          methodPay,
        },
        {
          where: { id: id },
        }
      );
      res.json(booking);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async updateStatus(req, res) {
    try {
      const updateStatus = await db.booking.update(
        { statusBooking: 5 },
        {
          where: { id: req.params.id },
        }
      );
      if (updateStatus) {
        res.json({ message: "Booking detail updated successfully" });
      } else {
        res.status(404).send("Booking detail not found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Error updating booking detail");
    }
  }
  async delete(req, res) {
    const { id } = req.params;
    try {
      const booking = await db.booking.findByPk(id);
      if (!booking) {
        return res.status(404).json({ message: "Booking not found" });
      }
      await booking.destroy(); // Xóa booking khỏi cơ sở dữ liệu
      res.json({ message: "Booking deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new BookingController();
