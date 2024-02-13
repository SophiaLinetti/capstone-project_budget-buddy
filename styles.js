import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export default createGlobalStyle`

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: 'Roboto Condensed', sans-serif;
    
  };

  body {
    margin: 0;
    font-family: 'Roboto Condensed', sans-serif;
    background-color: #424769;
  }

  button, input, select, fieldset, li, ul, textarea {
  font-family: inherit; 
  border-radius: 7px;
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
  background-color: #2d3250;
  color: #ffffff;
`;

export const StyledList = styled.ul`
  padding: 0;
  margin-left: 1rem;
  margin-right: 1rem;
  justify-content: space-between;
  list-style: none;
  gap: 1rem;
`;

export const StyledItem = styled.li`
  background-color: #2d3250;
  color: #ffffff;
  border: 1px solid;
  margin: 10px 5px 10px 5px;
  position: relative;
  padding: 7px;
`;

export const StyledHint = styled.p`
  font-size: 13px;
  text-align: center;
  color: red;
`;

export const StyledDeleteButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledHeading = styled.h1`
  text-align: center;
  color: #ffb228;
`;

export const StyledFilterButtons = styled.button`
  margin: 10%;
  padding: 5px;
`;

export const StyledAmoutDisplay = styled.div`
  text-align: center;
  width: 100%;
`;
