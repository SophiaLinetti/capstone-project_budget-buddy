import styled, { css } from "styled-components";

export const TransactionsList = styled.ul`
  padding: 0;
  margin: 0 0.5rem 0 0.5rem;
  list-style: none;
`;
export const TransactionCard = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 0.8rem;
  background-color: ;
  border-radius: 5px;
  color: ;
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
  background-color: ${(props) => (props.$variant === "type" ? "" : "")};
  padding: 0.2rem 0.5rem;
  border-radius: 50px;
  font-size: 0.8rem;
`;
export const Description = styled.p`
  margin: 0;
`;
export const DeleteButton = styled.button`
  position: absolute;
  top: 5px;
  right: 10px;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`;

export const DeleteIcon = styled.span`
  &:before {
    content: "delete";
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
