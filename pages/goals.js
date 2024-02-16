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

export default function Goals() {
  const [goals, setGoals] = useState(initialGoals);
  const [savingBalance, setSavingBalance] = useState(initialSavingBalance);
  const [totalSavings, setTotalSavings] = useState(0);

  function handleAddGoal(newGoal) {
    setGoals((goals) => [{ ...newGoal }, ...goals]);
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
        <StyledSavingContainer>
          Savings Account Balance: {savingBalance[0].savingAccount}
        </StyledSavingContainer>

        {goals.length === 0 && (
          <StyledText>{`You do not have any Goals added yet. Please submit a Goal by Pressing
        the + Button on the bottom right of the Screen`}</StyledText>
        )}
        <GoalsCard goals={goals} />
      </StyledCardContainer>
      <GoalsForm
        onAddGoal={handleAddGoal}
        savingBalance={savingBalance[0].savingAccount}
      />
      <StyledSavingContainer>
        Total Saving Amount: {totalSavings}
      </StyledSavingContainer>
      <Navbar />
    </>
  );
}
