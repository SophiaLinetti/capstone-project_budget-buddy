import { formatDate } from "../../utils/normalizeUtils.js";
import { StyledForm, StyledHint, StyledButton } from "./Forms.Styled.js";

export default function GoalForm({
  goal = {},
  onSaveGoal,
  savingBalance,
  onCloseModal,
}) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onSaveGoal({
      ...goal,
      ...data,
      savedAmount: parseInt(data.savedAmount),
      goalAmount: parseInt(data.goalAmount),
      date: formatDate(new Date()),
    });

    onCloseModal(null);
  }

  function handleValidation(event, message) {
    if (event.type === "invalid") {
      event.target.setCustomValidity(message);
    } else {
      event.target.setCustomValidity("");
    }
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="name__id">Goal Name* </label>
        <input
          id="name__id"
          name="goalName"
          max="10"
          required
          defaultValue={goal ? goal.goalName : ""}
        />

        <label htmlFor="savedAmount__id">Already Saved Amount in EUR*</label>
        <input
          id="savedAmount__id"
          type="number"
          name="savedAmount"
          min="0"
          max={savingBalance}
          step="1"
          pattern="[0-9]+"
          onInvalid={(event) =>
            handleValidation(
              event,
              "The amount you entered cannot be greater than your savings balance!"
            )
          }
          onInput={(event) => handleValidation(event, "")}
          defaultValue={goal ? goal.savedAmount : ""}
        />

        <label htmlFor="goalAmount__id">Goal Amount in EUR*</label>
        <input
          id="goalAmount__id"
          type="number"
          name="goalAmount"
          min="1"
          max="10000000"
          step="1"
          pattern="[0-9]+"
          defaultValue={goal ? goal.goalAmount : ""}
        />

        <StyledHint>All fields with * are required!</StyledHint>
        <StyledButton type="submit">Add saving goal</StyledButton>
        <StyledButton type="button" onClick={() => onCloseModal(null)}>
          cancel
        </StyledButton>
      </StyledForm>
    </>
  );
}
