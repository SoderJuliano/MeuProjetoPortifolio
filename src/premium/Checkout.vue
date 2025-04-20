<template>
    <div ref="paypal-button-container"></div>
</template>
  
  <script>
import { confirmPayment } from 'src/components/configs/requests.js';

  export default {
    name: "PaypalButton",
    props: {
      amount: {
        type: String,
        required: true,
      },
      userId: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
    },
    mounted() {
      this.loadPaypalScript();
    },
    methods: {
      loadPaypalScript() {
        const script = document.createElement('script');
        script.src = `https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID&currency=USD`;
        script.async = true;
        script.onload = this.renderPaypalButtons;
        document.body.appendChild(script);
      },
  
      renderPaypalButtons() {
        window.paypal.Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: this.amount,
                },
              }],
            });
          },
  
          onApprove: (data, actions) => {
            return actions.order.capture().then(async (details) => {
            // back-end will call paypal to findout the status
              const response = await confirmPayment(details.id);
            });
          },
  
          onError: (err) => {
            console.error("PayPal payment error:", err);
          },
        }).render(this.$refs['paypal-button-container']);
      },
    },
  };
  </script>
  