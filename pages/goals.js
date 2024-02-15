import { StyledHeading, StyledText } from "@/styles";
import Navbar from "@/components/Nav/Nav";
import GoalsForm from "@/components/GoalsForm/GoalsForm";
import { useState } from "react";
import { initialGoals } from "@/ressources/data";
import GoalsCard from "@/components/GoalsCard/GoalsCard";

export default function Goals() {
  const [goals, setGoals] = useState(initialGoals);

  return (
    <>
      <StyledHeading>Saving Goals</StyledHeading>
      <StyledText>{`You don't have any Goals saved yet!`}</StyledText>
      <GoalsForm />
      <GoalsCard goals={goals} />
      <button></button>
      <Navbar />
    </>
  );
}
