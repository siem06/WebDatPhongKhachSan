const config = require("../config/db.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  timezone: "+07:00",
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

const bookingModel = require("./Booking.js");
const userModel = require("./Account.js");
const roleModel = require("./Role.js");
const roomModel = require("./Room.js");
const imageModel = require("./Image.js");
const reviewModel = require("./Review.js");
const favoriteModel = require("./Favorite.js");
const serviceModel = require("./Service.js");
const detailModel = require("./BookingDetail.js");
const cartModel = require("./Cart.js");
const contactModel = require("./Contact.js");
const blogModel = require("./Blog.js");
const aboutsModel = require("./AboutUs.js");
const hotelModel = require("./Hotel.js");

db.user = userModel(sequelize, Sequelize);
db.role = roleModel(sequelize, Sequelize);
db.room = roomModel(sequelize, Sequelize);
db.booking = bookingModel(sequelize, Sequelize);
db.image = imageModel(sequelize, Sequelize);
db.review = reviewModel(sequelize, Sequelize);
db.favorite = favoriteModel(sequelize, Sequelize);
db.service = serviceModel(sequelize, Sequelize);
db.detail = detailModel(sequelize, Sequelize);
db.cart = cartModel(sequelize, Sequelize);
db.contact = contactModel(sequelize, Sequelize);
db.blog = blogModel(sequelize, Sequelize);
db.about = aboutsModel(sequelize, Sequelize);
db.hotel = hotelModel(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
});

db.room.belongsToMany(db.user, {
  through: "favorites",
  as: "favoriteRooms",
});
db.user.belongsToMany(db.room, {
  through: "favorites",
  as: "favoriteUsers",
});

db.booking.belongsToMany(db.room, {
  through: "booking_details",
  foreignKey: "bookingId",
});
db.room.belongsToMany(db.booking, {
  through: "booking_details",
  foreignKey: "roomId",
});

db.user.belongsToMany(db.room, {
  through: "carts",
  as: "roomCarts",
});
db.room.belongsToMany(db.user, {
  through: "carts",
  as: "userCarts",
});
db.room.belongsToMany(db.service, { through: "room_services" });
db.service.belongsToMany(db.room, { through: "room_services" });

db.user.hasMany(db.booking, { as: "bookings", foreignKey: "userId" });
db.booking.belongsTo(db.user, { foreignKey: "userId" });

db.room.hasMany(db.image, { as: "images", foreignKey: "roomId" });
db.room.hasMany(db.review, { foreignKey: "roomId" });
db.room.belongsToMany(db.review, {
  through: "room_reviews", 
  foreignKey: "roomId",
  as: "reviewsRoom"});
db.review.belongsToMany(db.room, { 
 through: "room_reviews", 
 foreignKey: "reviewId", 
 as:"rooms" });
db.user.hasMany(db.review, { foreignKey: "userId", as: "userReviews" });
db.review.belongsTo(db.user, { foreignKey: "userId" });

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
