import { StyledHeading, StyledText, StyledCardContainer } from "@/styles";
import Navbar from "@/components/Nav/Nav";
import GoalsForm from "@/components/GoalsForm/GoalsForm";
import { useState } from "react";
import GoalsCard from "@/components/GoalsCard/GoalsCard";
import { v4 as uuidv4 } from "uuid";

export default function Goals() {
  const [goals, setGoals] = useState([]);

  function handleAddGoal(newGoal) {
    setGoals((goals) => [{ ...newGoal, id: uuidv4() }, ...goals]);
  }

  function handleDeleteGoal(id) {
    setGoals((goals) => goals.filter((goal) => goal.id !== id));
  }

  return (
    <>
      <StyledHeading>Saving Goals</StyledHeading>
      <StyledCardContainer>
        {goals.length === 0 && (
          <StyledText>{`You do not have any Goals added yet. Please submit a Goal by Pressing
        the + Button on the bottom right of the Screen`}</StyledText>
        )}
        <GoalsCard goals={goals} onHandleDeleteGoal={handleDeleteGoal} />
      </StyledCardContainer>
      <GoalsForm onAddGoal={handleAddGoal} />
      <Navbar />
    </>
  );
}
