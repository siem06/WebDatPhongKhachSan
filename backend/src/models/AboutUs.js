module.exports = (sequelize, Sequelize) => {
  const Aboutus = sequelize.define("aboutus", {
    information: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    status: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
    },
  });

  return Aboutus;
};
