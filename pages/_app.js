import GlobalStyle from "../styles";
import { initialTransactions } from "@/ressources/data";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [transactions, setTransactions] = useState(initialTransactions);

  function addTransaction(newTransaction) {
    setTransactions([newTransaction, ...transactions]);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        transactions={transactions}
        onAddTransaction={addTransaction}
      />
    </>
  );
}
