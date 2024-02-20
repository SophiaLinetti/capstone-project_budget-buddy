import {
  StyledHeading,
  StyledText,
  StyledCardContainer,
  StyledSavingContainer,
} from "@/styles";
import Navbar from "@/components/Nav/Nav";
import GoalsForm from "@/components/GoalsForm/GoalsForm";
import { useState, useEffect } from "react";
import { initialGoals, initialSavingBalance } from "@/ressources/data";
import GoalsCard from "@/components/GoalsCard/GoalsCard";
import { v4 as uuidv4 } from "uuid";

export default function Goals() {
  const [goals, setGoals] = useState(initialGoals);
  const [editingGoalId, setEditingGoalId] = useState(null);
  const [savingBalance, setSavingBalance] = useState(initialSavingBalance);
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
    setGoals((goals) => goals.filter((goal) => goal.id !== id));
  }

  function handleEditGoal(id) {
    setEditingGoalId(id);
  }

  useEffect(() => {
    const totalSavedAmount = goals.reduce(
      (sum, goal) => sum + goal.savedAmount,
      0
    );
    setTotalSavings(totalSavedAmount);
  }, [goals]);
  return (
    <>
      <StyledHeading>Saving Goals</StyledHeading>
      <StyledCardContainer>
        {goals.length === 0 && (
          <StyledText>{`You do not have any Goals added yet. Please submit a Goal by Pressing
        the + Button on the bottom right of the Screen`}</StyledText>
        )}
        <GoalsCard
          goals={goals}
          onHandleDeleteGoal={handleDeleteGoal}
          onHandleEditGoal={handleEditGoal}
        />
      </StyledCardContainer>
      <GoalsForm
        onAddGoal={handleAddGoal}
        editingGoal={goals.find((goal) => goal.id === editingGoalId)}
        onCancelEdit={() => setEditingGoalId(null)}
        savingBalance={savingBalance[0].savingAccount}
      />

      <Navbar />
    </>
  );
}
