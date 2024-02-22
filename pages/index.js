import Form from "@/components/Form/Form";
import List from "@/components/List/List";
import FilterButtons from "@/components/FilterButtons/FilterButtons";
import Nav from "@/components/Nav/Nav";
import { useState } from "react";
import { StyledHeading, StyledAmoutDisplay } from "@/styles";
import FilterCategory from "@/components/FilterCategory/FilterCategory";

export default function HomePage({
  transactions,
  onAddTransaction,
  onDeleteTransaction,
}) {
  const [transactionFilter, setTransactionFilter] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState(null);

  function handleSetFilter(filter) {
    setTransactionFilter(filter);
  }
  // function filterTransactions(transactions) {
  //   if (transactionFilter === "all") {
  //     return transactions;
  //   } else {
  //     return transactions.filter(
  //       (transaction) => transaction.type === transactionFilter
  //     );
  //   }
  // }

  function filterTransactions(transactions) {
    if (transactionFilter === "all") {
      return transactions.filter(
        (transaction) =>
          !selectedCategory || transaction.category === selectedCategory
      );
    } else {
      return transactions.filter(
        (transaction) =>
          transaction.type === transactionFilter &&
          (!selectedCategory || transaction.category === selectedCategory)
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
    let text = "";
    if (filter === "Income") {
      text = "Incomes: ";
    } else if (filter === "Expense") {
      text = "Expenses: -";
    } else {
      text = "Balance: ";
    }
    return (
      <StyledAmoutDisplay>
        {text}
        {sum} EUR
      </StyledAmoutDisplay>
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
      <StyledHeading>Budget Buddy</StyledHeading>
      <Form onAddTransaction={onAddTransaction} />
      <FilterButtons onHandleSetFilter={handleSetFilter} />
      {displayTotalSum(transactionFilter)}
      {transactionFilter === "all" && (
        <StyledAmoutDisplay>
          Balance: {calculateBalance()} EUR
        </StyledAmoutDisplay>
      )}
      <FilterCategory onSetSelectedCategory={setSelectedCategory} />
      {/* <List
        transactions={
          transactionFilter !== "all" ? filteredTransactions : transactions
        }
        onDeleteTransaction={onDeleteTransaction}
      /> */}
      <List
        transactions={filterTransactions(transactions)}
        onDeleteTransaction={onDeleteTransaction}
      />
      <Nav />
    </div>
  );
}
