import {
  StyledList,
  StyledItem,
  StyledDeleteButton,
  StyledDeleteDiv,
  StyledDivNotBehindNavBar,
  StyledText,
} from "@/styles";

export default function List({ transactions, onDeleteTransaction }) {
  return (
    <>
      <StyledDivNotBehindNavBar>
        {transactions.length > 0 ? (
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
        ) : (
          <StyledText>{`No Transactions found`}</StyledText>
        )}
      </StyledDivNotBehindNavBar>
    </>
  );
}
