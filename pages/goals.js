import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import useLocalStorageState from "use-local-storage-state";
import styled from "styled-components";
import { initialGoals } from "@/ressources/data";
import { formatDate } from "../utils/normalizeUtils.js";
import Navbar from "@/components/Nav/Nav";
import GoalsCard from "@/components/GoalsCard/GoalsCard";
import GoalsForm from "@/components/Forms/GoalForm.js";
import Modal from "@/components/Modal";
import TransactionForm from "@/components/Forms/TransactionForm.js";
import {
  StyledHeading,
  StyledText,
  StyledCardContainer,
  StyledSavingContainer,
} from "@/styles";
export default function Goals({ transactions, onAddTransaction }) {
  const [goals, setGoals] = useLocalStorageState("goals", {
    defaultValue: initialGoals,
  });
  const [totalSavings, setTotalSavings] = useState(0);
  const [modalType, setModalType] = useState(null);
  const [editingGoal, setEditingGoal] = useState(null);
  function handleCloseModal() {
    setModalType(null);
  }
  function renderModalContent() {
    if (modalType === "add saving goal") {
      return (
        <GoalsForm
          onCloseModal={handleCloseModal}
          onSaveGoal={handleSaveGoal}
          savingBalance={savingsTransferSum + totalSavings}
        />
      );
    } else if (modalType === "edit saving goal") {
      return (
        <GoalsForm
          onCloseModal={handleCloseModal}
          onSaveGoal={handleSaveGoal}
          savingBalance={savingsTransferSum + totalSavings}
          goal={editingGoal}
        />
      );
    } else if (modalType === "savings withdrawal") {
      return (
        <TransactionForm
          onAddTransaction={onAddTransaction}
          formType="savings withdrawal"
          onCloseModal={handleCloseModal}
          savingsTransferSum={savingsTransferSum}
        />
      );
    }
  }

  function handleEditGoal(goal) {
    setModalType("edit saving goal");
    setEditingGoal(goal);
  }
  function handleSaveGoal(goalToSave) {
    if (goalToSave.id) {
      const originalGoal = goals.find((goal) => goal.id === goalToSave.id);
      if (originalGoal) {
        const difference =
          parseInt(goalToSave.savedAmount) - parseInt(originalGoal.savedAmount);
        const transactionForEdit = {
          id: uuidv4(),
          amount: -difference,
          category: "Savings transfer",
          date: formatDate(new Date()),
          description: "Edited saving goal",
          type: "Saving",
          internalGoalAllocation: "yes",
        };
        onAddTransaction(transactionForEdit);
      }
      setGoals(
        goals.map((goal) => (goal.id === goalToSave.id ? goalToSave : goal))
      );
    } else {
      const transactionForNewGoal = {
        id: uuidv4(),
        amount: -parseInt(goalToSave.savedAmount),
        category: "Savings transfer",
        date: formatDate(new Date()),
        description: "New saving goal",
        type: "Saving Goal",
      };
      onAddTransaction(transactionForNewGoal);
      setGoals((currentGoals) => [
        { ...goalToSave, id: uuidv4() },
        ...currentGoals,
      ]);
    }
  }
  function handleDeleteGoal(id) {
    const goalData = goals.find((goal) => goal.id === id);
    onAddTransaction({
      ...transactions,
      amount: parseInt(goalData.savedAmount),
      category: "Savings transfer",
      type: "Saving Goal",
    });
    setGoals((goals) => goals.filter((goal) => goal.id !== id));
  }
  useEffect(() => {
    const totalSavedAmount = goals.reduce(
      (sum, goal) => sum + parseInt(goal.savedAmount),
      0
    );
    setTotalSavings(totalSavedAmount);
  }, [goals]);
  function calculateSavingsTransfers(transactions) {
    return transactions
      .filter((transaction) => transaction.category === "Savings transfer")
      .reduce((sum, transaction) => sum + transaction.amount, 0);
  }
  const savingsTransferSum = calculateSavingsTransfers(transactions);
  return (
    <>
      {modalType && <Modal>{renderModalContent()}</Modal>}
      <StyledHeading>Saving Goals</StyledHeading>

      <StyledCardContainer>
        {goals.length === 0 && (
          <StyledText>{`You do not have any Goals added yet. Please submit a Goal by Pressing
        the + Button on the bottom right of the Screen`}</StyledText>
        )}
        <StyledSavingContainer>
          Current Savings Balance: {savingsTransferSum}
        </StyledSavingContainer>
        <button onClick={() => setModalType("savings withdrawal")}>
          Back to Account{" "}
        </button>
        <GoalsCard
          goals={goals}
          onHandleDeleteGoal={handleDeleteGoal}
          onEditGoal={handleEditGoal}
        />
      </StyledCardContainer>
      <StyledSavingContainer>
        Total Saving Amount: {totalSavings}
      </StyledSavingContainer>
      <StyledAddGoalButton onClick={() => setModalType("add saving goal")}>
        +
      </StyledAddGoalButton>
      <Navbar />
    </>
  );
}
const StyledAddGoalButton = styled.button`
  position: fixed;
  bottom: 5rem;
  right: 2rem;
  background-color: purple;
  color: white;
  border: none;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
