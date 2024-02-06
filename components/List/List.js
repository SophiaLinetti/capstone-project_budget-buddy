import { StyledList, StyledItem } from "@/styles";

function filteredTransactions(transactions, transactionFilter) {
  if (transactionFilter === "all") {
    return transactions;
  } else {
    return transactions.filter(
      (transaction) => transaction.type === transactionFilter
    );
  }
}

export default function List({ transactions, transactionFilter }) {
  const filteredList = filteredTransactions(transactions, transactionFilter);

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
