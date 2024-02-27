import { StyledText } from "@/styles";
import styled, { css } from "styled-components";
export default function List({ transactions, onDeleteTransaction }) {
  return (
    <>
      {transactions.length > 0 ? (
        <TransactionsList>
          {transactions.map(
            ({ id, date, amount, category, type, description }) => (
              <TransactionCard key={id}>
                <TransactionDetails>
                  <Flexbox $justifyContent="between">
                    <em>{date}</em>
                    <strong>{amount} EUR</strong>
                  </Flexbox>
                  <Flexbox $justifyContent="evenly">
                    <Chip $variant="type">{type}</Chip>
                    <Chip>{category}</Chip>
                  </Flexbox>
                  <Description>{description}</Description>
                </TransactionDetails>
                <DeleteButton onClick={() => onDeleteTransaction(id)}>
                  ❌
                </DeleteButton>
              </TransactionCard>
            )
          )}
        </TransactionsList>
      ) : (
        <StyledText>{`No Transactions found`}</StyledText>
      )}
    </>
  );
}
const TransactionsList = styled.ul`
  padding: 0;
  margin: 0 0.5rem 0 0.5rem;
  list-style: none;
`;
const TransactionCard = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 0.8rem;
  background-color: #2d3250;
  border-radius: 5px;
  color: #ffffff;
  margin: 10px 0px;
  padding: 7px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
`;
const TransactionDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
const Flexbox = styled.div`
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
const Chip = styled.span`
  background-color: ${(props) =>
    props.$variant === "type" ? "#8D6E63" : "#5D4037"};
  padding: 0.2rem 0.5rem;
  border-radius: 50px;
  font-size: 0.8rem;
`;
const Description = styled.p`
  margin: 0;
`;
const DeleteButton = styled.button`
  border: none;
  width: 20%;
  height: fit-content;
`;
