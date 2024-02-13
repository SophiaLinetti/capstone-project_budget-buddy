import Form from "@/components/Form/Form";
import List from "@/components/List/List";
import FilterButtons from "@/components/FilterButtons/FilterButtons";
import { useState } from "react";
import { StyledHeading } from "@/styles";

export default function HomePage({
  transactions,
  onAddTransaction,
  onDeleteTransaction,
}) {
  const [transactionFilter, setTransactionFilter] = useState("all");

  function handleSetFilter(filter) {
    setTransactionFilter(filter);
  }

  function filterTransactions(transactions) {
    if (transactionFilter === "all") {
      return transactions;
    } else {
      return transactions.filter(
        (transaction) => transaction.type === transactionFilter
      );
    }
  }

  const filteredTransactions = filterTransactions(transactions);

  function calculateSum(transactions) {
    return transactions.reduce(
      (sum, transaction) => sum + transaction.amount,
      0
    );
  }

  function displayTotalSum(filter) {
    if (filter === "all") {
      return null;
    }

    const sum = calculateSum(filterTransactions(transactions));
    return <div>Total Amount: {sum} EUR</div>;
  }

  return (
    <div>
      <StyledHeading>Budget Buddy</StyledHeading>
      <Form onAddTransaction={onAddTransaction} />
      <FilterButtons onHandleSetFilter={handleSetFilter} />
      {displayTotalSum(transactionFilter)}
      <List
        transactions={
          transactionFilter !== "all" ? filteredTransactions : transactions
        }
        onDeleteTransaction={onDeleteTransaction}
      />
    </div>
  );
}
