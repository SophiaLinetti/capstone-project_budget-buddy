import { StyledHeading, StyledText, StyledCardContainer } from "@/styles";
import Navbar from "@/components/Nav/Nav";
import GoalsForm from "@/components/GoalsForm/GoalsForm";
import { useState } from "react";
import { initialGoals, initialSavingBalance } from "@/ressources/data";
import GoalsCard from "@/components/GoalsCard/GoalsCard";

export default function Goals() {
  const [goals, setGoals] = useState(initialGoals);
  const [savingBalance, setSavingBalance] = useState(initialSavingBalance);

  function handleAddGoal(newGoal) {
    setGoals((goals) => [{ ...newGoal }, ...goals]);
  }

  return (
    <>
      <StyledHeading>Saving Goals</StyledHeading>

      <StyledCardContainer>
        <div>{savingBalance[0].savingAccount}</div>
        {goals.length === 0 && (
          <StyledText>{`You do not have any Goals added yet. Please submit a Goal by Pressing
        the + Button on the bottom right of the Screen`}</StyledText>
        )}
        <GoalsCard goals={goals} />
      </StyledCardContainer>
      <GoalsForm onAddGoal={handleAddGoal} />
      <div>{savingBalance[0].distributedAmount}</div>
      <Navbar />
    </>
  );
}
