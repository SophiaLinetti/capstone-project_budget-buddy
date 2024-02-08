import GlobalStyle from "../styles";
import { initialTransactions } from "@/ressources/data";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function App({ Component, pageProps }) {
  const [transactions, setTransactions] = useState(initialTransactions);

  function handleAddTransaction(newTransaction) {
    setTransactions((transactions) => [
      { ...newTransaction, id: uuidv4() },
      ...transactions,
    ]);
  }

  function handleDeleteTransaction(id) {
    setTransactions((transactions) =>
      transactions.filter((transaction) => transaction.id !== id)
    );
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        transactions={transactions}
        onAddTransaction={handleAddTransaction}
        onDeleteTransaction={handleDeleteTransaction}
      />
    </>
  );
}
