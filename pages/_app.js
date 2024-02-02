import GlobalStyle from "../styles";
import { initialTransactions } from "@/ressources/data";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [transactions, setTransactions] = useState(initialTransactions);
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };
  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        initialTransactions={initialTransactions}
        addTransaction={addTransaction}
      />
    </>
  );
}
