import {
  StyledItem,
  StyledList,
  StyledGoalCard,
  StyledDeleteButton,
  StyledEditSavingButton,
  StyledGoalCardContent,
} from "./GoalsCard.Styled";

import ProgressBar from "../ProgressBar/ProgressBar";

export default function GoalsCard({ goals, onHandleDeleteGoal, onEditGoal }) {
  return (
    <StyledList>
      {goals.map(({ id, goalName, savedAmount, goalAmount }) => (
        <StyledItem key={id}>
          <StyledGoalCardContent>
            <StyledGoalCard>{goalName}</StyledGoalCard>
            <StyledGoalCard>
              saved {savedAmount} EUR of {goalAmount} EUR
            </StyledGoalCard>
            <ProgressBar savedAmount={savedAmount} goalAmount={goalAmount} />
          </StyledGoalCardContent>
          <div>
            <StyledDeleteButton onClick={() => onHandleDeleteGoal(id)}>
              ❌
            </StyledDeleteButton>
            <StyledEditSavingButton
              onClick={() =>
                onEditGoal({ id, goalName, savedAmount, goalAmount })
              }
            >
              Edit
            </StyledEditSavingButton>
          </div>
        </StyledItem>
      ))}
    </StyledList>
  );
}
