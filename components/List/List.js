import { StyledList, StyledItem, StyledDeleteButton } from "@/styles";

export default function List({
  transactions,
  transactionFilter,
  onfilteredTransactions,
  onDeleteTransaction,
}) {
  const filteredList = onfilteredTransactions(transactions, transactionFilter);

  return (
    <>
      <StyledList>
        {filteredList.map( ({ id, date, amount, category, type, description }) => (
              <StyledItem key={id}>
                {date} - {amount} EUR - {category} - {type} - {description}<StyledDeleteButton onClick={() => onDeleteTransaction(id)}>
                  ❌
                </StyledDeleteButton>
          </StyledItem>
        ))}

      </StyledList>
    </>
  );
}
