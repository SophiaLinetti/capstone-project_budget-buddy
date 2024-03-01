import {
  FilterButtonIncome,
  FilterButtonExpense,
  FilterButtonBalance,
  StyledFilterContainer,
} from "./FilterButtons.Styled";

export default function FilterButtons({ onHandleSetFilter, currentFilter }) {
  return (
    <StyledFilterContainer>
      <FilterButtonExpense
        $active={currentFilter === "Expense"}
        onClick={() => onHandleSetFilter("Expense")}
      >
        Expense
      </FilterButtonExpense>
      <FilterButtonIncome
        $active={currentFilter === "Income"}
        onClick={() => onHandleSetFilter("Income")}
      >
        Income
      </FilterButtonIncome>
      <FilterButtonBalance
        $active={currentFilter === "all"}
        onClick={() => onHandleSetFilter("all")}
      >
        Balance
      </FilterButtonBalance>
    </StyledFilterContainer>
  );
}
