const paymentModel = require("../config/db/models/Payment");
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
    const data = {
      idBooking: req.body.idBooking,
      statusPay: req.body.statusBooking,
      methodPay: req.body.methodPay,
      totalPay: req.body.totalPay,
      datePay: req.body.datePay,
      
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
