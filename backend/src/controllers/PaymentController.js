const paymentModel = require("../config/db/models/Payment");
const dotenv = require("dotenv");

dotenv.config();
class PaymentController {
  get(req, res) {
    let result = paymentModel.get_all();
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
    let result = paymentModel.find(req.params.id);
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
    const { idBooking, methodPay, totalPay } = req.body;
    const data = {
      idBooking,
      methodPay,
      totalPay,
      statusPay: 1,
      datePay: new Date(),
    };
    let result = paymentModel.create(data);
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
      statusPay: req.body.statusBooking,
      methodPay: req.body.methodPay,
      totalPay: req.body.totalPay,
      datePay: req.body.datePay,
    };
    let result = paymentModel.update(req.params.id, data);
    result
      .then(function (value) {
        console.log(value);
        res.json(value);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  checkPayment(req, res) {
    return res.status(200).json({
      status: "OK",
      data: process.env.CLIENT_ID,
    });
  }
  async savePayment(req, res) {}
  //   delete(req, res) {
  //     let result = paymentModel.delete(req.params.id);
  //     result
  //       .then(function (value) {
  //         console.log(value);
  //         res.json(value);
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   }
}

module.exports = new PaymentController();
