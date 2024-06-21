module.exports = (sequelize, Sequelize) => {
  const Blog = sequelize.define("blogs", {
    topic: {
      type: Sequelize.STRING,
    },
    content: {
      type: Sequelize.TEXT,
    },
    status: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    img: {
      type: Sequelize.STRING,
    },
    type: {
      type: Sequelize.INTEGER,
    },
  });

  return Blog;
};
