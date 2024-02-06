import { StyledList, StyledItem } from "@/styles";

export default function List({ transactions }) {
  //  function updatedFilteredTransactions() {
  //    transactions.filter((transaction) => transaction.type === filter);
  //  }
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
