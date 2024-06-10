module.exports = (sequelize, Sequelize) => {
  const Hotel = sequelize.define("hotels", {
    logo: {
      type: Sequelize.STRING,
    },
    slogan: {
      type: Sequelize.STRING,
    },
    information: {
      type: Sequelize.TEXT,
    },
  });

  return Hotel;
};
