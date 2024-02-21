import {
  StyledHeading,
  StyledText,
  StyledCardContainer,
  StyledSavingContainer,
} from "@/styles";
import Navbar from "@/components/Nav/Nav";
import GoalsForm from "@/components/GoalsForm/GoalsForm";
import { useState, useEffect } from "react";
import { initialGoals } from "@/ressources/data";
import GoalsCard from "@/components/GoalsCard/GoalsCard";
import { v4 as uuidv4 } from "uuid";
import useLocalStorageState from "use-local-storage-state";
import EditForm from "@/components/GoalsForm/EditForm";

export default function Goals({ transactions, onAddTransaction }) {
  const [goals, setGoals] = useLocalStorageState("goals", {
    defaultValue: initialGoals,
  });
  const [editingGoalId, setEditingGoalId] = useState(null);

  const [totalSavings, setTotalSavings] = useState(0);

  function handleAddGoal(newGoal) {
    if (editingGoalId) {
      setGoals((goals) =>
        goals.map((goal) =>
          goal.id === editingGoalId ? { ...goal, ...newGoal } : goal
        )
      );
      setEditingGoalId(null);
    } else {
      setGoals((goals) => [{ ...newGoal, id: uuidv4() }, ...goals]);
    }
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
        />
      </StyledCardContainer>
      <GoalsForm
        onAddGoal={handleAddGoal}
        onCancelEdit={() => setEditingGoalId(null)}
        savingBalance={savingsTransferSum}
        onAddTransaction={onAddTransaction}
        transactions={transactions}
      />
      <EditForm
        onAddGoal={handleAddGoal}
        savingBalance={totalSavings || savingsTransferSum}
        editingGoal={goals.find((goal) => goal.id === editingGoalId)}
        onCancelEdit={() => setEditingGoalId(null)}
        onAddTransaction={onAddTransaction}
      />
      <StyledSavingContainer>
        Total Saving Amount: {totalSavings}
      </StyledSavingContainer>
      <Navbar />
    </>
  );
}
