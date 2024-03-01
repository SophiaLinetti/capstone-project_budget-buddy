import {
  StyledItem,
  StyledList,
  GoalCardName,
  GoalCardAmount,
  StyledEditSavingButton,
  EditIcon,
} from "./GoalsCard.Styled";
import { DeleteButton, DeleteIcon } from "@/styles";

import ProgressBar from "../ProgressBar/ProgressBar";

export default function GoalsCard({ goals, onHandleDeleteGoal, onEditGoal }) {
  return (
    <StyledList>
      {goals?.map(({ _id, goalName, savedAmount, goalAmount }) => (
        <StyledItem key={_id}>
          <div>
            <GoalCardName>{goalName}</GoalCardName>
            <GoalCardAmount>
              saved {savedAmount} EUR of {goalAmount} EUR
            </GoalCardAmount>
            <ProgressBar savedAmount={savedAmount} goalAmount={goalAmount} />
          </div>
          <div>
            <DeleteButton onClick={() => onHandleDeleteGoal(_id)}>
              <DeleteIcon />
            </DeleteButton>
            <StyledEditSavingButton
              onClick={() =>
                onEditGoal({ _id, goalName, savedAmount, goalAmount })
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
