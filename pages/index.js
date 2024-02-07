import Form from "@/components/Form/Form";
import List from "@/components/List/List";
import FilterButtons from "@/components/FilterButtons/FilterButtons";
import { useState } from "react";

export default function HomePage({
  transactions,
  onAddTransaction,
  onDeleteTransaction,
}) {
  const [transactionFilter, setTransactionFilter] = useState("all");

  function handleSetFilter(filter) {
    setTransactionFilter(filter);
  }

  function filteredTransactions(transactions) {
    if (transactionFilter === "all") {
      return transactions;
    } else {
      return transactions.filter(
        (transaction) => transaction.type === transactionFilter
      );
    }
  }

  function calculateSum(transactions) {
    return transactions.reduce(
      (sum, transaction) => sum + transaction.amount,
      0
    );
  }

  const totalSum = calculateSum(filteredTransactions(transactions));

  return (
    <div>
      <h1>Budget Buddy</h1>
      <Form onAddTransaction={onAddTransaction} />
      <FilterButtons onHandleSetFilter={handleSetFilter} />
      {transactionFilter !== "all" && <div>Total Amount: {totalSum} EUR</div>}
      <List
        transactions={transactions}
        transactionFilter={transactionFilter}
        onfilteredTransactions={filteredTransactions}
        onDeleteTransaction={onDeleteTransaction}
      />
    </div>
  );
}
