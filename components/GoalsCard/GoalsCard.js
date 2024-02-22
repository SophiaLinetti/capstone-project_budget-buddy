import {
  StyledItem,
  StyledList,
  StyledGoalCard,
  StyledDeleteButton,
  StyledEditSavingButton,
  StyledGoalCardContent,
} from "@/styles";

export default function GoalsCard({
  goals,
  onHandleDeleteGoal,
  onHandleEditGoal,
}) {
  return (
    <StyledList>
      {goals.map(({ id, goalName, savedAmount, goalAmount }) => (
        <StyledItem key={id}>
          <StyledGoalCardContent>
            <StyledGoalCard>{goalName}</StyledGoalCard>
            <StyledGoalCard>
              saved {savedAmount} EUR of {goalAmount} EUR
            </StyledGoalCard>
          </StyledGoalCardContent>
          <div>
            <StyledDeleteButton onClick={() => onHandleDeleteGoal(id)}>
              ❌
            </StyledDeleteButton>
            <StyledEditSavingButton onClick={() => onHandleEditGoal(id)}>
              Edit
            </StyledEditSavingButton>
          </div>
        </StyledItem>
      ))}
    </StyledList>
  );
}
