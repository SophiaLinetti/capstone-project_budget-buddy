import {
  StyledList,
  StyledItem,
  StyledDeleteButton,
  StyledDeleteDiv,
} from "@/styles";

export default function List({ transactions, onDeleteTransaction }) {
  // filter hidden
  const filteredTransactions = transactions.filter(
    (transaction) => transaction.additional !== "hidden"
  );

  return (
    <>
      <StyledList>
        {filteredTransactions.map(
          ({ id, date, amount, category, type, description }) => (
            <StyledItem key={id}>
              <div>
                {date} - {amount} EUR - {category} - {type} - {description}
              </div>
              <StyledDeleteDiv>
                <StyledDeleteButton onClick={() => onDeleteTransaction(id)}>
                  ❌
                </StyledDeleteButton>
              </StyledDeleteDiv>
            </StyledItem>
          )
        )}
      </StyledList>
    </>
  );
}
