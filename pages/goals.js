import { StyledHeading, StyledText, StyledCardContainer } from "@/styles";
import Navbar from "@/components/Nav/Nav";
import GoalsForm from "@/components/GoalsForm/GoalsForm";
import { useState } from "react";
import GoalsCard from "@/components/GoalsCard/GoalsCard";
import { v4 as uuidv4 } from "uuid";

export default function Goals() {
  const [goals, setGoals] = useState([]);
  // const [editingGoalId, setEditingGoalId] = useState(null);

  function handleAddGoal(newGoal) {
    setGoals((goals) => [{ ...newGoal, id: uuidv4() }, ...goals]);
  }

  function handleDeleteGoal(id) {
    setGoals((goals) => goals.filter((goal) => goal.id !== id));
  }

  // function handleEditGoal(id) {
  //   setEditingGoalId(id);
  // }

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
          // onHandleEditGoal={handleEditGoal}
        />
      </StyledCardContainer>
      <GoalsForm
        onAddGoal={handleAddGoal}
        // editingGoal={goals.find((goal) => goal.id === editingGoalId)}
        // onCancelEdit={() => setEditingGoalId(null)}
      />
      <Navbar />
    </>
  );
}
