const dotenv = require("dotenv");
dotenv.config();
const { sendEmailConfi } = require("../models/SendEmail");

class PaymentController {
  //   async create(req, res) {
  //     const { idBooking, methodPay, totalPay } = req.body;
  //     const data = {
  //       idBooking,
  //       methodPay,
  //       totalPay,
  //       statusPay: 1,
  //       datePay: new Date(),
  //     };
  //     try {
  //       const payment = await Payment.create(data);
  //       res.json(payment);
  //     } catch (error) {
  //       console.error(error);
  //       res.status(500).send("Error creating payment");
  //     }
  //   }

  //   async update(req, res) {
  //     const data = {
  //       idBooking: req.body.idBooking,
  //       statusPay: req.body.statusPay,
  //       methodPay: req.body.methodPay,
  //       totalPay: req.body.totalPay,
  //       datePay: req.body.datePay,
  //     };
  //     try {
  //       const payment = await Payment.findByPk(req.params.id);
  //       if (payment) {
  //         await payment.update(data);
  //         res.json(payment);
  //       } else {
  //         res.status(404).send("Payment not found");
  //       }
  //     } catch (error) {
  //       console.error(error);
  //       res.status(500).send("Error updating payment");
  //     }
  //   }

  checkPayment(req, res) {
    return res.status(200).json({
      status: "OK",
      data: process.env.CLIENT_ID,
    });
  }

  async sendInfo(req, res) {
    const { email, data } = req.body;
    try {
      await sendEmailConfi(email, data);
      res.send("Email xác nhận đã được gửi");
    } catch (error) {
      console.error(error);
      res.status(500).send("Error sending email");
    }
  }

  async paypalOrder(req, res) {
    try {
      const order = await createOrder();
      res.json(order);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error creating PayPal order");
    }
  }
}

// use the orders api to create an order
async function createOrder() {
  const accessToken =
    "A21AAL7ci_Gi4LsjXBqsSJ64qkIuF39hbuZFcRbSLcsjDpHVB43WMv2px4K3X9hkrGxFydd6Dc50zKOjuaHjNZ7oogtgJgXGw";
  const response = await fetch(
    "https://api-m.sandbox.paypal.com/v2/checkout/orders",
    {
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
    }
  );

  return response.json();
}

module.exports = new PaymentController();
