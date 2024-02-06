import { StyledList, StyledItem, StyledDeleteButton } from "@/styles";

export default function List({ transactions, setTransactions }) {
  function deleteTransaction(id) {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(updatedTransactions);
  }

  return (
    <>
      <StyledList>
        <>
          {transactions.map((transaction) => (
            <StyledItem key={transaction.id}>
              {transaction.date} - {transaction.amount} EUR -{" "}
              {transaction.category} - {transaction.type} -{" "}
              {transaction.description}{" "}
              <StyledDeleteButton
                onClick={() => deleteTransaction(transaction.id)}
              >
                ❌
              </StyledDeleteButton>
            </StyledItem>
          ))}
        </>{" "}
      </StyledList>
    </>
  );
}
