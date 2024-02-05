import GlobalStyle from "../styles";
import { initialTransactions } from "@/ressources/data";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [transactions, setTransactions] = useState(initialTransactions);

  function addTransaction(newTransaction) {
    setTransactions([newTransaction, ...transactions]);
  } // wir haben vorher diese function geschrieben, aber nicht genutzt bzw. gecallt

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    console.log("Formdata: ", formData);
    addTransaction(data); // function addTrasaction callen + neue transaktion mitgeben immer wenn wir auf das event submitten
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        // initialTransactions={initialTransactions}
        // addTransaction={addTransaction}
        handleSubmit={handleSubmit}
        transactions={transactions}
      />
    </>
  );
}
