const bookingModel = require("../config/db/models/Booking");
class BookingController {
  get(req, res) {
    let result = bookingModel.get_all_booking();
    result
      .then(function (value) {
        console.log(value);
        res.json(value);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  find(req, res) {
    let result = bookingModel.find(req.params.id);
    result
      .then(function (value) {
        console.log(value);
        res.json(value);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  create(req, res) {
    const data = {
      idAccount: req.body.idAccount,
      idRoom: req.body.idRoom,
      totalPrice: req.body.totalPrice,
      checkinDate: req.body.checkinDate,
      checkoutDate: req.body.checkoutDate,
      statusBooking: req.body.statusBooking,
      note: req.body.note,
    };
    let result = bookingModel.create(data);
    result
      .then(function (value) {
        console.log(value);
        res.json(value);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  update(req, res) {
    const data = {
      idAccount: req.body.idAccount,
      idRoom: req.body.idRoom,
      totalPrice: req.body.totalPrice,
      checkinDate: req.body.checkinDate,
      checkoutDate: req.body.checkoutDate,
      statusBooking: req.body.statusBooking,
      note: req.body.note,
    };
    let result = bookingModel.update(req.params.id, data);
    result
      .then(function (value) {
        console.log(value);
        res.json(value);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  delete(req, res) {
    let result = bookingModel.delete(req.params.id);
    result
      .then(function (value) {
        console.log(value);
        res.json(value);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  createBooking(req, res) {
    const data = {
      idAccount: req.body.idAccount,
      idRoom: req.body.idRoom,
      totalPrice: req.body.totalPrice,
      totalRoom: req.body.totalRoom,
      totalDate:req.body.totalDate,
      checkinDate: req.body.checkinDate,
      checkoutDate: req.body.checkoutDate,
      statusBooking: req.body.statusBooking,
      note: req.body.note,
    };
  
    bookingModel.createBooking(data)
      .then(function (newBooking) {
        res.json(newBooking);
      })
      .catch(function (error) {
        console.error('Error creating booking:', error);
        res.status(500).json({ error: 'Error creating booking' });
      });
  }
  
}

module.exports = new BookingController();
