import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import React from "react";

export default function Paypal({ onCreateOrder, onApproveOrder }) {
  const initialOptions = {
    "client-id":
      "AVxHtK_CCRhl5wJzy0DSfSCSP1PbOIyatGFLX1ty2daEyj02dvFJDOCcL7h5QLv3jceUwexB3tFVd1sr",
    "enable-funding": "venmo",
    "disable-funding": "",
    country: "US",
    currency: "USD",
    "data-page-type": "product-details",
    components: "buttons",
    "data-sdk-integration-source": "developer-studio",
  };

  return (
    <div>
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          style={{
            shape: "rect",
            layout: "vertical",
            color: "gold",
            label: "checkout",
          }}
          createOrder={onCreateOrder}
          onApprove={onApproveOrder}
        />
      </PayPalScriptProvider>
    </div>
  );
}
