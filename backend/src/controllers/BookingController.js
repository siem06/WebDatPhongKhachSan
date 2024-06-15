// const bookingModel = require("../config/db/models/Booking");
// class BookingController {
//   get(req, res) {
//     let result = bookingModel.get_all_booking();
//     result
//       .then(function (value) {
//         // console.log(value);
//         res.json(value);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }
//   find(req, res) {
//     let result = bookingModel.find(req.params.id);
//     result
//       .then(function (value) {
//         // console.log(value);
//         res.json(value);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }
//   create(req, res) {
//     const data = {
//       idAccount: req.body.idAccount,
//       idRoom: req.body.idRoom,
//       totalPrice: req.body.totalPrice,
//       checkinDate: req.body.checkinDate,
//       checkoutDate: req.body.checkoutDate,
//       statusBooking: req.body.statusBooking,
//       note: req.body.note,
//     };
//     let result = bookingModel.create(data);
//     result
//       .then(function (value) {
//         // console.log(value);
//         res.json(value);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }
//   update(req, res) {
//     const data = {
//       idAccount: req.body.idAccount,
//       idRoom: req.body.idRoom,
//       totalPrice: req.body.totalPrice,
//       checkinDate: req.body.checkinDate,
//       checkoutDate: req.body.checkoutDate,
//       statusBooking: req.body.statusBooking,
//       note: req.body.note,
//     };
//     Object.keys(data).forEach((key) => {
//       if (data[key] === undefined || data[key] === null) {
//         delete data[key];
//       }
//     });
//     let result = bookingModel.update(req.params.id, data);
//     result
//       .then(function (value) {
//         // console.log(value);
//         res.json(value);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }
//   delete(req, res) {
//     let result = bookingModel.delete(req.params.id);
//     result
//       .then(function (value) {
//         // console.log(value);
//         res.json(value);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }
//   createBooking(req, res) {
//     const data = {
//       idAccount: req.body.idAccount,
//       // idRoom: req.body.idRoom,
//       totalPrice: req.body.totalPrice,
//       totalRoom: req.body.totalRoom,
//       totalDate: req.body.totalDate,
//       checkinDate: req.body.checkinDate,
//       checkoutDate: req.body.checkoutDate,
//       statusBooking: 1,
//       note: req.body.note,
//       bookingDate: new Date(),
//       methodPay: req.body.methodPay,
//     };

//     bookingModel
//       .createBooking(data)
//       .then(function (newBooking) {
//         res.json(newBooking);
//       })
//       .catch(function (error) {
//         console.error("Error creating booking:", error);
//         res.status(500).json({ error: "Error creating booking" });
//       });
//   }
//   getBookingByIdA(req, res) {
//     const userId = req.params.id;
//     console.log("id: " + userId);

//     let result = bookingModel.getBookingByIdA(userId);
//     result
//       .then(function (value) {
//         res.json(value);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }
// }
const bcrypt = require("bcrypt");
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
      // res.json(newBooking);
    } catch (error) {
      console.error("Error creating booking:", error);
      res.status(500).json({ error: "Error creating booking" });
    }
  }
  getBookingByIdA(req, res) {
    const userId = req.params.id;
    console.log("id: " + userId);

    db.booking
      .findAll({ where: { userId: userId },
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
      // Kiểm tra xem các giá trị có được truyền đúng không
      if (adults === undefined || children === undefined) {
        return res.status(400).json({ error: "Adults and children are required." });
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
}

module.exports = new BookingController();
