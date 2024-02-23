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
  onToggleModal,
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
            <StyledEditSavingButton
              onClick={() => onToggleModal({ type: "edit", open: true })}
            >
              Edit
            </StyledEditSavingButton>
          </div>
        </StyledItem>
      ))}
    </StyledList>
  );
}
