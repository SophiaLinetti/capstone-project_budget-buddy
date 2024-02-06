import { StyledList, StyledItem } from "@/styles";

export default function List({
  transactions,
  transactionFilter,
  onfilteredTransactions,
}) {
  const filteredList = onfilteredTransactions(transactions, transactionFilter);

  console.log(transactions);
  console.log(filteredList);
  console.log(filteredList.length);

  return (
    <>
      <StyledList>
        {filteredList.map((transaction) => (
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
