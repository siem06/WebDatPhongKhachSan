const paymentModel = require("../config/db/models/Payment");
const dotenv = require("dotenv");
const { sendEmailConfi } = require("../config/db/models/SendEmail");

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
  sendInfo(req, res) {
    const { email, data } = req.body;
    sendEmailConfi(email, data);
    res.send("Email xác nhận đã được gửi");
  }
  async paypalOrder(req, res) {
    const order = await createOrder();
    res.json(order);
  }
}

// use the orders api to create an order
function createOrder() {
  // create accessToken using your clientID and clientSecret
  // for the full stack example, please see the Standard Integration guide
  // https://developer.paypal.com/docs/multiparty/checkout/standard/integrate/
  const accessToken =
    "A21AAL7ci_Gi4LsjXBqsSJ64qkIuF39hbuZFcRbSLcsjDpHVB43WMv2px4K3X9hkrGxFydd6Dc50zKOjuaHjNZ7oogtgJgXGw";
  return fetch("https://api-m.sandbox.paypal.com/v2/checkout/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: "100.00",
          },
          reference_id: "d9f80740-38f0-11e8-b467-0ed5f89f718b",
        },
      ],
      intent: "CAPTURE",
      payment_source: {
        paypal: {
          experience_context: {
            payment_method_preference: "IMMEDIATE_PAYMENT_REQUIRED",
            payment_method_selected: "PAYPAL",
            brand_name: "EXAMPLE INC",
            locale: "en-US",
            landing_page: "LOGIN",
            shipping_preference: "GET_FROM_FILE",
            user_action: "PAY_NOW",
            return_url: "https://example.com/returnUrl",
            cancel_url: "https://example.com/cancelUrl",
          },
        },
      },
    }),
  }).then((response) => response.json());
}

module.exports = new PaymentController();
