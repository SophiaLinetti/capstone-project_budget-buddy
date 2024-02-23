import {
  StyledHeading,
  StyledText,
  StyledCardContainer,
  StyledSavingContainer,
} from "@/styles";
import styled from "styled-components";
import Navbar from "@/components/Nav/Nav";
import GoalsForm from "@/components/GoalsForm/GoalsForm";
import { useState, useEffect } from "react";
import { initialGoals } from "@/ressources/data";
import GoalsCard from "@/components/GoalsCard/GoalsCard";
import { v4 as uuidv4 } from "uuid";
import useLocalStorageState from "use-local-storage-state";
import EditForm from "@/components/GoalsForm/EditForm";

<<<<<<< HEAD
export default function Goals({ transactions, onAddTransaction }) {
=======
const GoalSubmitButton = styled.button`
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

export default function Goals({
  transactions,
  onAddTransaction,
  onIsModalOpen,
  isModalOpen,
}) {
>>>>>>> 8fe9db3 (refactor forms and remove one)
  const [goals, setGoals] = useLocalStorageState("goals", {
    defaultValue: initialGoals,
  });
  const [editingGoalId, setEditingGoalId] = useState(null);
  const [totalSavings, setTotalSavings] = useState(0);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  function handleSetEditModalOpen(bool) {
    setEditModalOpen(bool);
  }

  const [modal, setModal] = useState({ open: false });

  function toggleModal(modalState) {
    setModal(modalState);
  }

  function editingGoal(editingGoalId) {
    return goals.find((goal) => goal.id === editingGoalId);
  }

  const [formValues, setFormValues] = useState({
    goalName: editingGoal?.goalName || "",
    savedAmount: editingGoal?.savedAmount || "",
    goalAmount: editingGoal?.goalAmount || "",
  });

  function handleSetFormValues(pupsi) {
    setFormValues(pupsi);
  }

  function handleEditGoal() {
    setGoals((goals) =>
      goals.map((goal) =>
        goal.id === editingGoalId ? { ...goal, ...newGoal } : goal
      )
    );
  }

  function handleAddGoal(newGoal) {
    setGoals((goals) => [{ ...newGoal, id: uuidv4() }, ...goals]);
  }

  function handleDeleteGoal(id) {
    // find goal
    const goalData = goals.find((goal) => goal.id === id);

    //add postive trx
    onAddTransaction({
      ...transactions,
      amount: parseInt(goalData.savedAmount),
      category: "Savings transfer",
      additional: "hidden",
    });

    // del goal
    setGoals((goals) => goals.filter((goal) => goal.id !== id));
  }

  function handleEditGoal(id) {
    //find goal byid
    const goalToBeEdited = goals.find((goal) => goal.id === id);

    //prefill data
    setFormValues({
      goalName: goalToBeEdited.goalName,
      savedAmount: goalToBeEdited.savedAmount,
      goalAmount: goalToBeEdited.goalAmount,
    });
    setEditModalOpen(true);
    setEditingGoalId(id);
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
      <StyledHeading>Saving Goals</StyledHeading>
      <StyledCardContainer>
        {goals.length === 0 && (
          <StyledText>{`You do not have any Goals added yet. Please submit a Goal by Pressing
        the + Button on the bottom right of the Screen`}</StyledText>
        )}
        <StyledSavingContainer>
          Savings Account Balance: {savingsTransferSum}
        </StyledSavingContainer>
        <GoalsCard
          goals={goals}
          onHandleDeleteGoal={handleDeleteGoal}
          onHandleEditGoal={handleEditGoal}
          onToggleModal={toggleModal}
        />
      </StyledCardContainer>
<<<<<<< HEAD
      <GoalsForm
        onAddGoal={handleAddGoal}
        onCancelEdit={() => setEditingGoalId(null)}
        savingBalance={savingsTransferSum}
        onAddTransaction={onAddTransaction}
        transactions={transactions}
        handleSetEditModalOpen={handleSetEditModalOpen}
        isEditModalOpen={isEditModalOpen}
      />
      <EditForm
        onAddGoal={handleAddGoal}
        savingBalance={savingsTransferSum + totalSavings}
        editingGoal={goals.find((goal) => goal.id === editingGoalId)}
        onCancelEdit={() => setEditingGoalId(null)}
        onAddTransaction={onAddTransaction}
        handleSetEditModalOpen={handleSetEditModalOpen}
        isEditModalOpen={isEditModalOpen}
        formValues={formValues}
        onSetFormValues={handleSetFormValues}
      />
=======
      {modal.type === "add" && modal.open && (
        <GoalsForm
          onAddGoal={handleAddGoal}
          onCancelEdit={() => setEditingGoalId(null)}
          savingBalance={savingsTransferSum}
          onAddTransaction={onAddTransaction}
          transactions={transactions}
          onToggleModal={toggleModal}
        />
      )}
      {modal.type === "edit" && modal.open && (
        <EditForm
          onAddGoal={handleAddGoal}
          savingBalance={savingsTransferSum + totalSavings}
          editingGoal={goals.find((goal) => goal.id === editingGoalId)}
          onCancelEdit={() => setEditingGoalId(null)}
          onAddTransaction={onAddTransaction}
          onIsModalOpen={onIsModalOpen}
          isModalOpen={isModalOpen}
          formValues={formValues}
          onSetFormValues={handleSetFormValues}
          onToggleModal={toggleModal}
        />
      )}
>>>>>>> 8fe9db3 (refactor forms and remove one)
      <StyledSavingContainer>
        Total Saving Amount: {totalSavings}
      </StyledSavingContainer>
      <GoalSubmitButton
        onClick={() => toggleModal({ type: "add", open: true })}
      >
        +
      </GoalSubmitButton>
      <Navbar />
    </>
  );
}
