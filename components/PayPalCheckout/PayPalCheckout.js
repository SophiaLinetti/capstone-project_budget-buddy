import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
const PAYPAL_CLIENT_ID = process.env.REACT_APP_PAYPAL_CLIENT_ID;
console.log(PAYPAL_CLIENT_ID); 

const initialOptions = {
  "client-id": PAYPAL_CLIENT_ID,
  currency: "USD",
  intent: "capture",
  components: "buttons",
  /* "disable-funding":
    "credit,card,sepa,bancontact,eps,giropay,ideal,mybank,p24,sofort,venmo", */
};

export default function PayPalCheckout() {
  return (
    <>
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons />
      </PayPalScriptProvider>
    </>
  );
}
