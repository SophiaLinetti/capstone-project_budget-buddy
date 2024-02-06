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
          {transactions.map(
            ({ id, date, amount, category, type, description }) => (
              <StyledItem key={id}>
                {date} - {amount} EUR - {category} - {type} - {description}
                <StyledDeleteButton onClick={() => deleteTransaction(id)}>
                  ❌
                </StyledDeleteButton>
              </StyledItem>
            )
          )}
        </>
      </StyledList>
    </>
  );
}
