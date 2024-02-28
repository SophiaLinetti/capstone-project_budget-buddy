import {
  StyledItem,
  StyledList,
  StyledGoalCard,
  StyledDeleteButton,
  StyledEditSavingButton,
  StyledGoalCardContent,
} from "@/styles";
import ProgressBar from "../ProgressBar/ProgressBar";

export default function GoalsCard({ goals, onHandleDeleteGoal, onEditGoal }) {
  return (
    <StyledList>
      {goals?.map(({ _id, goalName, savedAmount, goalAmount }) => (
        <StyledItem key={_id}>
          <StyledGoalCardContent>
            <StyledGoalCard>{goalName}</StyledGoalCard>
            <StyledGoalCard>
              saved {savedAmount} EUR of {goalAmount} EUR
            </StyledGoalCard>
            <ProgressBar savedAmount={savedAmount} goalAmount={goalAmount} />
          </StyledGoalCardContent>
          <div>
            <StyledDeleteButton onClick={() => onHandleDeleteGoal(_id)}>
              ❌
            </StyledDeleteButton>
            <StyledEditSavingButton
              onClick={() =>
                onEditGoal({ _id, goalName, savedAmount, goalAmount })
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
