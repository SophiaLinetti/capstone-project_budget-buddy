import { StyledList, StyledItem } from "@/styles";

export default function List({ transactions }) {
  return (
    <>
      <StyledList>
        {transactions.map((transaction) => (
          <StyledItem key={transaction.id}>
            {transaction.date} - {transaction.amount} EUR -{" "}
            {transaction.category} - {transaction.type} -{" "}
            {transaction.description}
          </StyledItem>
        ))}
      </StyledList>
    </>
  );
}
