


import PayPalCheckout from "../PayPalCheckout/PayPalCheckout";
import { useState } from "react";
export default function Product() {
  const [checkout, setCheckout] = useState(false);

  return (
    <>
      {checkout ? (
        <PayPalCheckout />
      ) : (
      
        <>
        <h1> Product </h1>
        <p> test </p>
        <button onClick={() => setCheckout(true)}>Checkout</button>
        </>
      )}
    </>
  );
}
