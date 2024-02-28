import {
  StyledFilterButtons,
  StyledFilterContainer,
} from "./FilterButtons.Styled";

export default function FilterButtons({ onHandleSetFilter }) {
  return (
    <StyledFilterContainer>
      <StyledFilterButtons onClick={() => onHandleSetFilter("Income")}>
        Income
      </StyledFilterButtons>
      <StyledFilterButtons onClick={() => onHandleSetFilter("Expense")}>
        Expense
      </StyledFilterButtons>
      <StyledFilterButtons onClick={() => onHandleSetFilter("all")}>
        Balance
      </StyledFilterButtons>
    </StyledFilterContainer>
  );
}
