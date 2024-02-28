import styled from "styled-components";

export const StyledList = styled.ul`
  padding: 0;
  margin: 0 0.5rem 0 0.5rem;
  justify-content: space-between;
  list-style: none;
  gap: 1rem;
`;

export const StyledItem = styled.li`
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
  margin: 10px 0px 10px 0px;
  display: flex;
  padding: 7px;
  position: relative;
`;

export const StyledDeleteButton = styled.button`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  right: 3px;
  bottom: 3px;
`;

export const GoalCardName = styled.div`
  display: block;
  width: 100%;
  margin: 5px 0;
  font-style: italic;
`;

export const GoalCardAmount = styled.div`
  display: block;
  width: 100%;
  margin: 5px 0;
  gap: 1rem;
`;

export const StyledEditSavingButton = styled.button`
  position: absolute;
  bottom: 5px;
  right: 10px;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`;

export const StyledGoalCardContent = styled.div`
  gap: 3rem;
`;

export const EditIcon = styled.span`
  &:before {
    content: "edit_square";
    font-family: "Material Symbols Outlined";
    font-weight: 200px;
    font-size: 24px;
    display: inline-block;
    vertical-align: middle;
    -webkit-font-smoothing: antialiased;
    color: black;
    cursor: pointer;
  }
`;
