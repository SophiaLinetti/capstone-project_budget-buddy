import styled, { css } from "styled-components";

export const TransactionsList = styled.ul`
  padding: 0;
  margin: 0 0.5rem 0 0.5rem;
  list-style: none;
`;
export const TransactionCard = styled.li`
  position: relative;
  justify-content: space-between;
  gap: 0.8rem;
  border-radius: 5px;
  margin: 10px 0px;
  padding: 7px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
`;
export const TransactionDetails = styled.div`
  padding-right: 15%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
export const Flexbox = styled.div`
  display: flex;
  width: 100%;
  ${(props) =>
    props.$justifyContent === "evenly" &&
    css`
      justify-content: space-evenly;
    `}
  ${(props) =>
    props.$justifyContent === "between" &&
    css`
      justify-content: space-between;
    `}
`;
export const Chip = styled.span`
  border: 1px solid
    ${(props) =>
      props.$variant === "Income"
        ? "var(--lightgreen-color)"
        : props.$variant === "Expense"
        ? "var(--red-color)"
        : "black"};
  padding: 0.2rem 0.5rem;
  border-radius: 50px;
  font-size: 0.8rem;
`;

export const ChipIncomeExpense = styled(Chip)``;

export const ChipCategory = styled(Chip)``;

export const Description = styled.p`
  margin: 0;
`;
