const db = require("../models");

class BookingDetailsController {
  async findById(req, res) {
    try {
      const bookingDetail = await db.detail.findByPk(req.params.id);
      if (bookingDetail) {
        res.json(bookingDetail);
      } else {
        res.status(404).send("Booking detail not found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Error fetching booking detail");
    }
  }

  async find(req, res) {
    try {
      const bookingDetails = await db.detail.findAll({
        where: {
          id: req.params.id,
        },
      });
      res.json(bookingDetails);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error fetching booking details");
    }
  }

  async create(req, res) {
    const { bookingId, roomId } = req.body;
    try {
      const bookingDetail = await db.detail.create({
        bookingId,
        roomId,
      });
      res.json(bookingDetail);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error creating booking detail");
    }
  }

  // async update(req, res) {
  //   const { idAccount, idRoom } = req.body;
  //   try {
  //     const [updatedCount] = await db.detail.update(
  //       {
  //         idAccount,
  //         idRoom,
  //       },
  //       {
  //         where: { id: req.params.id },
  //       }
  //     );
  //     if (updatedCount) {
  //       res.json({ message: "Booking detail updated successfully" });
  //     } else {
  //       res.status(404).send("Booking detail not found");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).send("Error updating booking detail");
  //   }
  // }

  async delete(req, res) {
    try {
      const deletedCount = await db.detail.destroy({
        where: { id: req.params.id },
      });
      if (deletedCount) {
        res.json({ message: "Booking detail deleted successfully" });
      } else {
        res.status(404).send("Booking detail not found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Error deleting booking detail");
    }
  }
}

module.exports = new BookingDetailsController();
