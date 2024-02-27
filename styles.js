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
    margin: 100px 0;
    font-family: 'Montserrat', sans-serif;
    background-color: #424769;
  }
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
  margin: 0 0.5rem 0 0.5rem;
  justify-content: space-between;
  list-style: none;
  gap: 1rem;
`;
export const StyledItem = styled.li`
  background-color: #2d3250;
  color: #ffffff;
  border: 1px solid;
  margin: 10px 0px 10px 0px;
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
  top: 0;
`;
export const StyledFilterButtons = styled.button`
  width: 17%;
  text-align: center;
  font-size: 0.7rem;
  padding: 8px 0 8px 0;
  font-weight: 500;
  background-color: white;
`;
export const StyledFilterContainer = styled.div`
  margin: 0 0 0 5px;
  display: inline;
`;
export const StyledAmoutDisplay = styled.div`
  text-align: center;
  border: 1px solid #ffffff;
  border-radius: 7px;
  color: #ffb228;
  background-color: #2d3250;
  margin: 3% 20% 3% 20%;
  padding: 8px;
`;
export const StyledText = styled.p`
  margin-top: 100px;
  text-align: center;
  color: #ffb228;
`;
export const StyledGoalCard = styled.div`
  display: block;
  text-align: center;
  width: 100%;
`;
export const StyledCardContainer = styled.div`
  margin-top: 80px;
`;
export const StyledBr = styled.div`
  display: block;
`;
export const StyledSavingContainer = styled.div`
  border: 1px solid;
  border-radius: 7px;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  text-align: center;
  padding: 10px 0 10px 0;
  color: #ffb228;
`;
export const StyledDropdownContainer = styled.div`
  background-color: #2d3250;
  color: white;
  border: white solid 1px;
  border-radius: 5px;
  display: inline;
  padding: 8px;
  margin: 0 0.5rem 0 0.5rem;
  font-size: 0.9rem;
  display: block;
  height: 50px;
`;
export const StyledAllFormButtonsContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-between;
  padding: 0 30px 0 30px;
`;
export const StyledEditSavingButton = styled.button`
  padding: 1px 6px 1px 6px;
  height: 25px;
  margin-left: 20px;
  position: absolute;
  bottom: 3px;
  right: 35px;
`;
export const StyledGoalCardContent = styled.div`
  padding: 0 0 0 20px;
`;
