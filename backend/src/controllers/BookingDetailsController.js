const bookingDetailsModel = require("../config/db/models/BookingDetails");
class BookingDetailsController {
  findById(req, res) {
    let result = bookingDetailsModel.find(req.params.id);
    result
      .then(function (value) {
        res.json(value);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  find(req, res) {
    let result = bookingDetailsModel.find(req.params.id);
    result
      .then(function (value) {
        // console.log(value);
        res.json(value);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  create(req, res) {
    const data = {
      idBooking: req.body.idBooking,
      idRoom: req.body.idRoom,
    };
    let result = bookingDetailsModel.create(data);
    result
      .then(function (value) {
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
    };
    let result = bookingDetailsModel.update(req.params.id, data);
    result
      .then(function (value) {
        res.json(value);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  delete(req, res) {
    const { idAccount, idRoom } = req.body;
    let result = bookingDetailsModel.delete(idAccount, idRoom);
    result
      .then(function (value) {
        // console.log(value);
        res.json(value);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

module.exports = new BookingDetailsController();
