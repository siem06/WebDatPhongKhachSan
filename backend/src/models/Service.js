module.exports = (sequelize, Sequelize) => {
  const Service = sequelize.define("services", {
    typeService: {
      type: Sequelize.STRING,
    },
    content: {
      type: Sequelize.TEXT,
    },
    logo: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  });

  return Service;
};
