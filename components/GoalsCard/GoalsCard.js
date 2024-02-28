import {
  StyledItem,
  StyledList,
  StyledGoalCard,
  StyledEditSavingButton,
  StyledGoalCardContent,
  EditIcon,
} from "./GoalsCard.Styled";
import { DeleteIcon, DeleteButton } from "../List/List.Styled";

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
            <DeleteButton onClick={() => onHandleDeleteGoal(id)}>
              <DeleteIcon />
            </DeleteButton>
            <StyledEditSavingButton
              onClick={() =>
                onEditGoal({ id, goalName, savedAmount, goalAmount })
              }
            >
              <EditIcon />
            </StyledEditSavingButton>
          </div>
        </StyledItem>
      ))}
    </StyledList>
  );
}
