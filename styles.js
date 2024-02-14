import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export default createGlobalStyle`

  *,
  *::before,
  *::after {
    box-sizing: border-box;
   font-family: 'Montserrat', sans-serif;
    
  };

  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
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
  gap: 1 rem;
`;

export const FormItems = styled.fieldset`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 80px 20px 0 20px;
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
  display: flex;
  padding: 7px;
  position: relative;
`;

export const StyledHint = styled.p`
  font-size: 13px;
  text-align: center;
  color: #ffb228;
`;

export const StyledDeleteDiv = styled.div`
  margin: 5%;
`;

export const StyledDeleteButton = styled.button`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  right: 3px;
  bottom: 3px;
`;

export const StyledHeading = styled.h1`
  text-align: center;
  width: 100%;
  color: #ffb228;
  background-color: #2d3250;
  margin-top: 0;
  padding: 10px;
  border-bottom: 1px solid #ffffff;
  border-radius: 0 0 10px 10px;
  position: fixed;
`;

export const StyledFilterButtons = styled.button`
  padding: 8px;
  width: 20%;
`;

export const StyledAmoutDisplay = styled.div`
  text-align: center;
  border: 1px solid #ffffff;
  border-radius: 7px;
  color: #ffb228;
  background-color: #2d3250;
  margin: 5% 20% 0 20%;
  padding: 8px;
`;

export const StyledFilterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
`;
