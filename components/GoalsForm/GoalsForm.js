import { StyledHint, StyledBr } from "@/styles";
import Modal from "../Modal";

export default function GoalsForm({
  onAddGoal,
  savingBalance,
  onAddTransaction,
  onToggleModal,
}) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddGoal({
      ...data,
      savedAmount: parseInt(data.savedAmount),
      goalAmount: parseInt(data.goalAmount),
    });

    onAddTransaction({
      ...data,
      amount: parseInt(data.savedAmount) * -1,
      savings_amount: parseInt(data.savings_amount),
      date: new Date(),
      category: "Savings transfer",
    });

    onToggleModal({ type: "add", open: false });
  }

  function handleCancel() {
    if (window.confirm("Are you sure you want to cancel adding this goal?")) {
      onToggleModal({ type: "add", open: false });
    }
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
      <Modal>
        <form onSubmit={handleSubmit}>
          <StyledBr>
            <label htmlFor="name__id"> *Goal Name </label>
            <input id="name__id" name="goalName" max="10" required />
          </StyledBr>

          <StyledBr>
            <label htmlFor="savedAmount__id">
              *Already Saved Amount in EUR:
            </label>
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
            />
          </StyledBr>

          <StyledBr>
            <label htmlFor="goalAmount__id">*Goal Amount in EUR: </label>
            <input
              id="goalAmount__id"
              type="number"
              name="goalAmount"
              min="1"
              max="10000000"
              step="1"
              pattern="[0-9]+"
            />
          </StyledBr>

          <StyledHint>All fields with * are required!</StyledHint>
          <button type="submit">Save Goal</button>
        </form>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </Modal>
    </>
  );
}
