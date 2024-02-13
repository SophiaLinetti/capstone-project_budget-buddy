import { StyledFilterButtons } from "@/styles";

export default function FilterButtons({ onHandleSetFilter }) {
  return (
    <div>
      <StyledFilterButtons onClick={() => onHandleSetFilter("Income")}>
        Income
      </StyledFilterButtons>
      <StyledFilterButtons onClick={() => onHandleSetFilter("Expense")}>
        Expense
      </StyledFilterButtons>
      <StyledFilterButtons onClick={() => onHandleSetFilter("all")}>
        All
      </StyledFilterButtons>
    </div>
  );
}
