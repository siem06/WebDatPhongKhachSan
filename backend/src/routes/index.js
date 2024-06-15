const accountRouter = require("./Account");
const aboutUsRouter = require("./AboutUs");
const blogRouter = require("./Blog");
const bookingRouter = require("./Booking");
const contatcRouter = require("./Contact");
const hotelRouter = require("./Hotel");
const roomRouter = require("./Room");
const serviceRouter = require("./Service");
const paymentRouter = require("./Payment");
const reviewRouter = require("./Review");
const imageRouter = require("./Image");
const roomfavorite = require("./RoomFavorite");
const bookingDetailsRoute = require("./BookingDetails");
const cartRoute = require("./Cart");

function route(app) {
  app.use("/accounts", accountRouter);
  app.use("/home", accountRouter);
  app.use("/aboutus", aboutUsRouter);
  app.use("/blog", blogRouter);
  app.use("/booking", bookingRouter);
  app.use("/contact", contatcRouter);
  app.use("/hotel", hotelRouter);
  app.use("/room", roomRouter);
  app.use("/service", serviceRouter);
  app.use("/payment", paymentRouter);
  app.use("/review", reviewRouter);
  app.use("/image", imageRouter);
  app.use("/roomfavorite", roomfavorite);
  app.use("/bookingDetails", bookingDetailsRoute);
  app.use("/cart", cartRoute);

  // app.use('blog', )
}

module.exports = route;
