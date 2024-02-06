import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }
`;

export const TransactionForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormItems = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StyledList = styled.ul`
  padding: 0;
  margin-left: 1rem;
  margin-right: 1rem;
  justify-content: space-between;
  list-style: none;
  gap: 1rem;
  border: 1px solid rebeccapurple;
`;

export const StyledItem = styled.li`
  border: 1px solid;
  margin: 10px 5px 10px 5px;
  position: relative;
  padding: 7px;
`;

export const StyledHint = styled.p`
  font-size: 9px;
  text-align: center;
`;

export const StyledDeleteButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
