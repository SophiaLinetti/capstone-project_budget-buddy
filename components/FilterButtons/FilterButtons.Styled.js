import styled from "styled-components";

export const StyledFilterButtons = styled.button`
  text-align: center;
  font-size: 0.75rem;
  padding: 8px;
  font-weight: 400;
  border-radius: 99rem;
  margin: 0 4px auto;
`;

export const FilterButtonIncome = styled(StyledFilterButtons)`
  border: 1px solid var(--lightgreen-color);
`;

export const FilterButtonExpense = styled(StyledFilterButtons)`
  border: 1px solid var(--red-color);
`;

export const FilterButtonBalance = styled(StyledFilterButtons)`
  border: 1px solid var(--secondary-color);
`;

export const StyledFilterContainer = styled.div`
  margin: 0 0 0 5px;
  display: inline;
`;
