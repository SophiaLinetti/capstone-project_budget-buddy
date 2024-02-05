import GlobalStyle from "../styles";
import { initialTransactions } from "@/ressources/data";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [transactions, setTransactions] = useState(initialTransactions);

  function addTransaction(newTransaction) {
    setTransactions([newTransaction, ...transactions]);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    console.log("Formdata: ", formData);
    addTransaction(data);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        handleSubmit={handleSubmit}
        transactions={transactions}
      />
    </>
  );
}
