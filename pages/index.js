import Form from "@/components/Forms/TransactionForm";
import List from "@/components/List/List";
import FilterButtons from "@/components/FilterButtons/FilterButtons";
import Nav from "@/components/Nav/Nav";
import Modal from "@/components/Modal";
import { useState } from "react";
import {
  StyledHeading,
  StyledAmoutDisplay,
  StyledDropdownContainer,
  StyledAllFormButtonsContainer,
} from "@/styles";
import FilterCategory from "@/components/FilterCategory/FilterCategory";

export default function HomePage({
  transactions,
  onAddTransaction,
  onDeleteTransaction,
}) {
  const [transactionFilter, setTransactionFilter] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [modalType, setModalType] = useState(null);

  function handleCloseModal() {
    setModalType(null);
  }

  function renderModalContent() {
    if (modalType === "transaction") {
      return (
        <Form
          onAddTransaction={onAddTransaction}
          formType="transaction"
          onCloseModal={handleCloseModal}
        />
      );
    } else if (modalType === "saving") {
      return (
        <Form
          onAddTransaction={onAddTransaction}
          formType="saving transaction"
          onCloseModal={handleCloseModal}
        />
      );
    } else {
      return null;
    }
  }

  function handleSetFilter(filter) {
    setTransactionFilter(filter);
  }

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

  const filterHiddenTransactions = transactions.filter(
    (transaction) => transaction.additional !== "hidden"
  );

  function calculateBalance() {
    let balance = 0;
    filterHiddenTransactions.forEach((transaction) => {
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
      {modalType && <Modal>{renderModalContent()}</Modal>}
      <StyledAllFormButtonsContainer>
        <button onClick={() => setModalType("transaction")}>
          Add Transactions
        </button>
        <button onClick={() => setModalType("saving")}>Saving Transfer</button>
      </StyledAllFormButtonsContainer>
      {displayTotalSum(transactionFilter)}
      {transactionFilter === "all" && (
        <StyledAmoutDisplay>
          Balance: {calculateBalance()} EUR
        </StyledAmoutDisplay>
      )}
      <StyledDropdownContainer>
        <FilterCategory onSetSelectedCategory={setSelectedCategory} />
        <FilterButtons onHandleSetFilter={handleSetFilter} />
      </StyledDropdownContainer>
      <List
        transactions={filterTransactions(transactions)}
        onDeleteTransaction={onDeleteTransaction}
      />
      <Nav />
    </div>
  );
}
