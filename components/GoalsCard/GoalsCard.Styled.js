import styled from "styled-components";

export const StyledList = styled.ul`
  padding: 0;
  margin: 0 0.5rem 0 0.5rem;
  justify-content: space-between;
  list-style: none;
  gap: 1rem;
`;

export const StyledItem = styled.li`
  background-color: ;
  color: ;
  border: 1px solid;
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

export const StyledGoalCard = styled.div`
  display: block;
  text-align: center;
  width: 100%;
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
