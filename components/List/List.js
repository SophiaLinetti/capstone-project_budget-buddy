import {
  StyledList,
  StyledItem,
  StyledDeleteButton,
  StyledDeleteDiv,
  StyledDivNotBehindNavBar,
} from "@/styles";

export default function List({ transactions, onDeleteTransaction }) {
  // filter hidden
  /*   const filteredTransactions = transactions.filter(
    (transaction) => transaction.additional !== "hidden"
  ); */

  return (
    <>
      <StyledDivNotBehindNavBar>
        <StyledList>
          {transactions.map(
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
      </StyledDivNotBehindNavBar>
    </>
  );
}
