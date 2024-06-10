module.exports = (sequelize, Sequelize) => {
  const Favorite = sequelize.define("favorites", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  });

  return Favorite;
};
