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
  margin: 10px 5px 10px 5px; //im uhrzeigersinn beginnend top
`;
