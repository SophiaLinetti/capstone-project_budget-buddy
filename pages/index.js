import { useState } from "react";
import TransactionForm from "@/components/Forms/TransactionForm";
import List from "@/components/List/List";
import FilterButtons from "@/components/FilterButtons/FilterButtons";
import Nav from "@/components/Nav/Nav";
import Modal from "@/components/Modal";
import {
  StyledHeading,
  AmountDisplayTransactions,
  FilterFlexBox,
  StyledAllButtonsContainer,
  Main,
  ActionButtonTransaction,
  HeadingWrapper,
} from "@/styles";
import FilterCategory from "@/components/FilterCategory/FilterCategory";
import useSWR, { mutate } from "swr";

export default function HomePage({ onAddTransaction }) {
  const [transactionFilter, setTransactionFilter] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [modalType, setModalType] = useState(null);
  const { data: transactions, error } = useSWR("/api/transactions");

  if (error) return <div>Failed to load transactions</div>;
  if (!transactions) return <div>Loading...</div>;

  async function handleDeleteTransaction(_id) {
    const response = await fetch(`/api/transactions/${_id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      mutate(
        "/api/transactions",
        transactions.filter((transaction) => transaction._id !== _id),
        false
      );
    } else {
      console.error("Failed to delete transaction");
    }
  }

  function handleCloseModal() {
    setModalType(null);
  }
  function renderModalContent() {
    const accountBalance = calculateBalance();

    if (modalType === "transaction") {
      return (
        <TransactionForm
          onAddTransaction={onAddTransaction}
          formType="transaction"
          onCloseModal={handleCloseModal}
        />
      );
    } else if (modalType === "saving") {
      return (
        <TransactionForm
          onAddTransaction={onAddTransaction}
          formType="saving transaction"
          onCloseModal={handleCloseModal}
          accountBalance={accountBalance}
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
    return transactions.filter(
      (transaction) =>
        transaction.internalGoalAllocation !== "yes" &&
        (transactionFilter === "all"
          ? !selectedCategory || transaction.category === selectedCategory
          : transaction.type === transactionFilter &&
            (!selectedCategory || transaction.category === selectedCategory))
    );
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
      <AmountDisplayTransactions>
        {text}
        {sum} EUR
      </AmountDisplayTransactions>
    );
  }

  const filterGoalTransactions = transactions.filter(
    (transaction) =>
      transaction.type !== "Saving Goal" &&
      transaction.internalGoalAllocation !== "yes"
  );

  function calculateBalance() {
    let balance = 0;
    filterGoalTransactions.forEach((transaction) => {
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
      <HeadingWrapper>
        <StyledHeading>Transactions</StyledHeading>
      </HeadingWrapper>
      {modalType && <Modal>{renderModalContent()}</Modal>}
      <Main>
        {displayTotalSum(transactionFilter)}
        {transactionFilter === "all" && (
          <AmountDisplayTransactions>
            Account Balance: {calculateBalance()} EUR
          </AmountDisplayTransactions>
        )}
        <StyledAllButtonsContainer>
          <ActionButtonTransaction onClick={() => setModalType("transaction")}>
            New Transaction
          </ActionButtonTransaction>
          <ActionButtonTransaction onClick={() => setModalType("saving")}>
            New Transfer
          </ActionButtonTransaction>
        </StyledAllButtonsContainer>

        <FilterFlexBox>
          <FilterCategory onSetSelectedCategory={setSelectedCategory} />
          <FilterButtons
            currentFilter={transactionFilter}
            onHandleSetFilter={handleSetFilter}
          />
        </FilterFlexBox>
        <List
          transactions={filterTransactions(transactions)}
          onDeleteTransaction={handleDeleteTransaction}
        />
      </Main>
      <Nav />
    </div>
  );
}
