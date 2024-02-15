import { StyledItem, StyledList, StyledGoalCard } from "@/styles";

export default function GoalsCard({ goals }) {
  return (
    <>
      <StyledList>
        {goals.map(({ id, name, savedAmount, goalAmount }) => (
          <StyledItem key={id}>
            <div>
              <StyledGoalCard>{name}</StyledGoalCard> <br></br>{" "}
              <StyledGoalCard>
                saved {savedAmount} EUR of {goalAmount} EUR
              </StyledGoalCard>
            </div>
          </StyledItem>
        ))}
      </StyledList>
    </>
  );
}
