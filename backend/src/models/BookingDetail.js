module.exports = (sequelize, Sequelize) => {
  const BookingDetail = sequelize.define("booking_details", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  });

  // const db = require("./index.js");

  return BookingDetail; // Return the model
};
