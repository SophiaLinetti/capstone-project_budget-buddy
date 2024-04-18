import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { HeadingWrapper, StyledHeading, Main } from "@/styles";
import styles from "@/styles";
import { useRouter } from "next/router";

const PAYPAL_CLIENT_ID = process.env.REACT_APP_PAYPAL_CLIENT_ID;
console.log(PAYPAL_CLIENT_ID);

const initialOptions = {
  "client-id": PAYPAL_CLIENT_ID,
  currency: "EUR",
  intent: "capture",
  components: "buttons",
  /* "disable-funding":
    "credit,card,sepa,bancontact,eps,giropay,ideal,mybank,p24,sofort,venmo", */
};

export default function PayPalCheckout() {
  const router = useRouter();

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "0.01",
          },
        },
      ],
      application_context: {
        return_url: `${window.location.origin}/paymentConfirmation?status=success`,
        cancel_url: `${window.location.origin}/paymentConfirmation?status=failed`,
      },
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      //success
      console.log("Payment successful:", details);
      //redirect
      router.push("/paymentConfirmation?status=success");
    });
  };

  const onError = (error) => {
    // error
    console.error("Payment error:", error);
    // redirect
    router.push("/paymentConfirmation?status=failed");
  };

  return (
    <>
      <HeadingWrapper>
        <StyledHeading>BudgetPlus</StyledHeading>
      </HeadingWrapper>
      <Main style={{ marginTop: "5rem" }}>
        <PayPalScriptProvider options={initialOptions}>
          <PayPalButtons
            createOrder={createOrder}
            onApprove={onApprove}
            onError={onError}
          />
        </PayPalScriptProvider>
      </Main>
    </>
  );
}
