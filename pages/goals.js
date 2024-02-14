import { StyledHeading, StyledText } from "@/styles";
import Navbar from "@/components/Nav/Nav";
import GoalsForm from "@/components/GoalsForm/GoalsForm";

export default function Goals() {
  return (
    <>
      <StyledHeading>Saving Goals</StyledHeading>
      <StyledText>{`You don't have any Goals saved yet!`}</StyledText>
      <GoalsForm />
      <Navbar />
    </>
  );
}
