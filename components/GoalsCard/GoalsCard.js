import { StyledItem, StyledList, StyledGoalCard } from "@/styles";

export default function GoalsCard({ goals }) {
  if (goals.length === 0) {
    return <p>You don't have any Goals added yet. Please submit a Goal by Pressing the + Button on the bottom right of the Screen</p>;
  }

  return (
    <>
      <StyledList>
        {goals.map(({ id, goalName, savedAmount, goalAmount }) => (
          <StyledItem key={id}>
            <div>
              <StyledGoalCard>{goalName}</StyledGoalCard> <br></br>{" "}
              <StyledGoalCard>
                saved {savedAmount} EUR of {goalAmount} EUR
              </StyledGoalCard>
            </div>
          </StyledItem>
        ))}
      </StyledList>
    </>
  );
}
