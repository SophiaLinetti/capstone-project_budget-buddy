import { useState } from "react";
import TransactionForm from "@/components/Forms/TransactionForm";
import List from "@/components/List/List";
import FilterButtons from "@/components/FilterButtons/FilterButtons";
import Nav from "@/components/Nav/Nav";
import Modal from "@/components/Modal";
import {
  StyledHeading,
  StyledAmoutDisplay,
  StyledDropdownContainer,
  StyledAllFormButtonsContainer,
} from "@/styles";
import FilterCategory from "@/components/FilterCategory/FilterCategory";
import useSWR, {mutate} from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());


export default function HomePage({
 
  onAddTransaction,

}) {
  const [transactionFilter, setTransactionFilter] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [modalType, setModalType] = useState(null);
  const { data: transactions, error } = useSWR('/api/transactions', fetcher); 
   

  if (error) return <div>Failed to load transactions</div>;
  if (!transactions) return <div>Loading...</div>;
  

  async function handleDeleteTransaction(_id) {
    const response = await fetch(`/api/transactions/${_id}`, { method: 'DELETE' });

    if (response.ok) {
      mutate('/api/transactions', transactions.filter((transaction) => transaction._id !== _id), false);
    } else {
      console.error('Failed to delete transaction');
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
    return transactions.filter(transaction => 
      transaction.internalGoalAllocation !== "yes" &&
      (transactionFilter === "all" ? 
        !selectedCategory || transaction.category === selectedCategory :
        transaction.type === transactionFilter && (!selectedCategory || transaction.category === selectedCategory))
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
      <StyledAmoutDisplay>
        {text}
        {sum} EUR
      </StyledAmoutDisplay>
    );
  }
  const filterGoalTransactions = transactions.filter(
    (transaction) => transaction.type !== "Saving Goal" &&
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
      <StyledHeading>Budget Buddy</StyledHeading>
      {modalType && <Modal>{renderModalContent()}</Modal>}
      <StyledAllFormButtonsContainer>
        <button onClick={() => setModalType("transaction")}>
          New Transaction
        </button>
        <button onClick={() => setModalType("saving")}>New Transfer</button>
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
        onDeleteTransaction={handleDeleteTransaction}
      />
      
      <Nav />
    </div>
  );
}
