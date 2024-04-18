import { useRouter } from "next/router";
import { StyledHeading, Main, HeadingWrapper } from "@/styles";
import Navbar from "@/components/Nav/Nav";
export default function paymentConfirmation() {
  const router = useRouter();
  const { status } = router.query;

  return (
    <div>
      <HeadingWrapper>
        <StyledHeading>Order Confirmation</StyledHeading>
      </HeadingWrapper>
      <Main style={{ marginTop: "5rem" }}>
        {status === "success" ? (
          <div>
            <h1>Payment Successful</h1>
            <p>Thank you for your purchase!</p>
          </div>
        ) : (
          <div>
            <h1>Payment Failed</h1>
            <p>There was an issue with your payment. Please try again.</p>
          </div>
        )}
      </Main>
      <Navbar />
    </div>
  );
}
