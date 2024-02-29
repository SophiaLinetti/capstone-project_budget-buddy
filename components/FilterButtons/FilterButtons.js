import {
  FilterButtonIncome,
  FilterButtonExpense,
  FilterButtonBalance,
  StyledFilterContainer,
} from "./FilterButtons.Styled";

export default function FilterButtons({ onHandleSetFilter }) {
  return (
    <StyledFilterContainer>
      <FilterButtonIncome onClick={() => onHandleSetFilter("Income")}>
        Income
      </FilterButtonIncome>
      <FilterButtonExpense onClick={() => onHandleSetFilter("Expense")}>
        Expense
      </FilterButtonExpense>
      <FilterButtonBalance onClick={() => onHandleSetFilter("all")}>
        Balance
      </FilterButtonBalance>
    </StyledFilterContainer>
  );
}
