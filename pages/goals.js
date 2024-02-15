import { StyledHeading, StyledText } from "@/styles";
import Navbar from "@/components/Nav/Nav";
import GoalsForm from "@/components/GoalsForm/GoalsForm";
import { useState } from "react";
import { initialGoals } from "@/ressources/data";
import GoalsCard from "@/components/GoalsCard/GoalsCard";
import GoalsForm from "@/components/GoalsForm/GoalsForm";
import { v4 as uuidv4 } from "uuid";

export default function Goals() {
  const [goals, setGoals] = useState(initialGoals);

  function handleAddGoal(newGoal) {
    setGoals((goals) => [
      { ...newGoal, id: uuidv4() },
      ...goals,
    ]);
  }


  return (
    <>
      <StyledHeading>Saving Goals</StyledHeading>
      <StyledText>{`You don't have any Goals saved yet!`}</StyledText>
      <GoalsForm onAddGoal={handleAddGoal} />
      <GoalsCard goals={goals}  />
      <Navbar />
    </>
  );
}
