module.exports = (sequelize, Sequelize) => {
  return sequelize.define("images", {
    roomId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "rooms",
        key: "id",
      },
    },
    img: {
      type: Sequelize.STRING, // hoặc có thể sử dụng kiểu dữ liệu TEXT nếu cần
    },
  });
};
