import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
   font-family: 'Montserrat', sans-serif;
  };

:root {
  --primary-color: #fffcf4;
  --secondary-color: #5532C8;
  --lightgreen-color: #00cf74;
  --red-color: #D32F2F;
}
  
  body {
    font-family: 'Montserrat', sans-serif;
    background-color: var(--primary-color);
  }
`;

export const Main = styled.div`
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledHeading = styled.h1`
  text-align: center;
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  padding: 10px;
  position: fixed;
  top: 0;
  z-index: 1000;
`;

// hier bleiben
export const StyledAmoutDisplay = styled.div`
  text-align: center;
  border-radius: 7px;
  background-color: ;
  padding: 8px;
  margin: 60px 0 10px 0;
`;

export const StyledText = styled.p`
  margin-top: 20px;
  text-align: center;
`;

export const StyledCardContainer = styled.div``;

export const StyledSavingContainer = styled.div`
  border: 1px solid;
  border-radius: 7px;
  margin: 60px 0.5rem 0.5rem 0.5rem;
  text-align: center;
  padding: 10px 0 10px 0;
`;

export const StyledTotalSavingContainer = styled.div`
  border: 1px solid;
  border-radius: 7px;
  margin: 1.5rem 0.5rem 0.5rem 0.5rem;
  text-align: center;
  padding: 10px 0 10px 0;
`;

export const FilterFlexBox = styled.div`
  border-radius: 5px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 8px;
  margin: 0 0.5rem;
  font-size: 0.9rem;
  height: 50px;
`;

export const StyledAllButtonsContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-around;
`;

export const ActionButton = styled.button`
  font-size: 1rem;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  border-radius: 20px;
  padding: 0.75rem 1.5rem;
  border: 0.5px solid;
`;
export const ActionButtonGoalsPage = styled(ActionButton)``;

export const ActionButtonTransaction = styled(ActionButton)`
  margin-bottom: 10px;
`;

export const ActionButtonDashboard = styled(ActionButton)`
  margin-top: 60px;
`;
