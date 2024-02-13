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

  function displayTotalSum(filter) {
    if (filter === "all") {
      return null;
    }

    const sum = calculateSum(filteredTransactions(transactions));
    let text = "";

    if (filter === "Income") {
      text = "Sum of all Incomes: ";
    } else if (filter === "Expense") {
      text = "Sum of all Expenses: -";
    }

    return (
      <div>
        {text}
        {sum} EUR
      </div>
    );
  }

  function calculateBalance() {
    let balance = 0;

    transactions.forEach((transaction) => {
      if (transaction.type === "Income") {
        balance += transaction.amount;
      } else {
        balance -= transaction.amount;
      }
    });

    return balance;
  }

  return (
    <div>
      <h1>Budget Buddy</h1>
      <Form onAddTransaction={onAddTransaction} />
      <FilterButtons onHandleSetFilter={handleSetFilter} />
      {displayTotalSum(transactionFilter)}
      {transactionFilter === "all" && (
        <div>Balance: {calculateBalance()} EUR</div>
      )}
      <List
        transactions={transactions}
        transactionFilter={transactionFilter}
        onfilteredTransactions={filteredTransactions}
        onDeleteTransaction={onDeleteTransaction}
      />
    </div>
  );
}
