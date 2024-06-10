module.exports = (sequelize, Sequelize) => {
  const Review = sequelize.define("reviews", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    roomId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    rating: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    comment: {
      type: Sequelize.TEXT,
    },
    note: {
      type: Sequelize.STRING,
    },
  });

  return Review;
};
