import { StyledList, StyledItem } from "@/styles";

export default function List({ transactions, filter }) {
  const filteredTransactions =
    filter === "all"
      ? transactions
      : transactions.filter((t) => t.type === filter);

  console.log(filteredTransactions);

  return (
    <>
      <StyledList>
        {filteredTransactions.map((transaction) => (
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
