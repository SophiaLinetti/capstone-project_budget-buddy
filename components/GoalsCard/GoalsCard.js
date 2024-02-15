import { StyledItem, StyledList, StyledGoalCard, StyledText } from "@/styles";

export default function GoalsCard({ goals }) {
  return (
    <StyledList>
      {goals.map(({ id, goalName, savedAmount, goalAmount }) => (
        <StyledItem key={id}>
          <div>
            <StyledGoalCard>{goalName}</StyledGoalCard>
            <StyledGoalCard>
              saved {savedAmount} EUR of {goalAmount} EUR
            </StyledGoalCard>
          </div>
        </StyledItem>
      ))}
    </StyledList>
  );
}
