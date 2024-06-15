module.exports = (sequelize, Sequelize) => {
  const Booking = sequelize.define("bookings", {
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    totalPrice: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    checkinDate: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    checkoutDate: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    statusBooking: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    note: {
      type: Sequelize.TEXT,
    },
  
    totalRoom: {
      type: Sequelize.INTEGER,
      allowNull:false,
    },
    totalDate: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    methodPay: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  Booking.getBooking = async function (id) {
    const db = require("../models");

    try {
      const booking = await this.findByPk(id, {
        include: [
          {
            model: db.room,
            as: "rooms",
          },

          { model: db.user, as: "user" },
        ],
      });
      return booking;
    } catch (error) {
      console.error("Error fetching user with bookings:", error);
      throw error;
    }
  };
  Booking.get_all_booking = async function get_all_booking() {
    const db = require("../models");

    try {
      const bookings = await Booking.findAll({
        include: [
          {
            model: db.room,
          },
          {
            model: db.user,
          },
        ],
      });
      return bookings;
    } catch (error) {
      throw error;
    }
  };
  // Booking.createBooking = async function createBooking(data) {
  //   try {
  //     const newBooking = await Booking.create(data);
  //     return newBooking;
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  Booking.getBookingByIdA = async function getBookingByIdA(userId) {
    const db = require("../models");

    try {
      const bookings = await Booking.findAll({
        where: { idAccount: userId },
        include: [
          { model: booking_details, attributes: ["roomId"] },
          { model: db.booking },
          {
            model: db.user,
            attributes: [
              "id",
              "useName",
              "email",
              "phone",
              "avatar",
              "status",
              "role",
              "createDate",
              "birthday",
            ],
          },
        ],
      });
      return bookings;
    } catch (error) {
      throw error;
    }
  };
  return Booking;
};
