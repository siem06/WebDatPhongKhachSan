const checkoutModel = require("../config/db/models/Checkout");
class CheckoutController {
  get(req, res) {
    let result = checkoutModel.get_all();
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
    let result = checkoutModel.find(req.params.id);
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
      idBooking: req.body.idBooking,
      status: req.body.status,
      methodPay: req.body.methodPay,
      totalPay: req.body.totalPay,
      datePay: req.body.datePay,
    };
    let result = checkoutModel.create(data);
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
      idBooking: req.body.idBooking,
      status: req.body.status,
      methodPay: req.body.methodPay,
      totalPay: req.body.totalPay,
      datePay: req.body.datePay,
    };
    let result = checkoutModel.update(req.params.id, data);
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
    let result = checkoutModel.delete(req.params.id);
    result
      .then(function (value) {
        console.log(value);
        res.json(value);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

module.exports = new CheckoutController();
