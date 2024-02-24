import GlobalStyle from "../styles";
import { initialTransactions } from "@/ressources/data";
import { v4 as uuidv4 } from "uuid";
import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [transactions, setTransactions] = useLocalStorageState("transactions", {
    defaultValue: initialTransactions,
  });

  function handleAddTransaction(newTransaction) {
    setTransactions((transactions) => [
      { ...newTransaction, id: uuidv4(), internalGoalAllocation: "no" },
      ...transactions,
    ]);
    console.log(transactions)
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
