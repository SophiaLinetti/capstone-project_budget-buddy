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
  --primary-color: ;
  --secondary-color:
}
  
  body {
    margin: 100px 0;
    font-family: 'Montserrat', sans-serif;
    background-color: var(--primary-color);
  }
`;

export const Main = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

export const StyledHeading = styled.h1`
  text-align: center;
  width: 100%;
  margin-top: 0;
  padding: 10px;
  position: fixed;
  top: 0;
  z-index: 1000;
`;

// hier bleiben
export const StyledAmoutDisplay = styled.div`
  text-align: center;
  border: 1px solid;
  border-radius: 7px;
  background-color: ;
  margin: 3% 20% 3% 20%;
  padding: 8px;
`;

export const StyledText = styled.p`
  margin-top: 100px;
  text-align: center;
`;

export const StyledCardContainer = styled.div`
  margin-top: 80px;
`;

export const StyledSavingContainer = styled.div`
  border: 1px solid;
  border-radius: 7px;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  text-align: center;
  padding: 10px 0 10px 0;
`;

export const StyledDropdownContainer = styled.div`
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
