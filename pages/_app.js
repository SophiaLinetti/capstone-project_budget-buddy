import GlobalStyle from "../styles";
import { initialTransactions } from "@/ressources/data";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function App({ Component, pageProps }) {
  const [transactions, setTransactions] = useState(initialTransactions);

  // function addTransaction(newTransaction) {
  //   const newTransactionWithId = { ...newTransaction, id: uuidv4() };
  //   setTransactions([newTransactionWithId, ...transactions]);
  //   console.log(newTransactionWithId);
  // }

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
        // onAddTransaction={addTransaction}
        // setTransactions={setTransactions}
        onAddTransaction={handleAddTransaction}
        onDeleteTransaction={handleDeleteTransaction}
      />
    </>
  );
}
