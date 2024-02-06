import { StyledList, StyledItem } from "@/styles";

export default function List({ transactions, transactionFilter }) {
  const filteredTransactions =
    transactionFilter === "all"
      ? transactions
      : transactions.filter(
          (transaction) => transaction.type === transactionFilter
        );

  console.log(transactions);
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
