import { useState, useEffect } from "react";
import styled from "styled-components";
import { StyledHint, StyledBr } from "@/styles";

const ModalBackround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export default function EditForm({
  onAddGoal,
  editingGoal,
  onCancelEdit,
  savingBalance,
  onAddTransaction,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    goalName: "",
    savedAmount: "",
    goalAmount: "",
  });

  useEffect(() => {
    if (editingGoal) {
      setIsModalOpen(true);
      setFormValues({
        goalName: editingGoal.goalName,
        savedAmount: parseInt(editingGoal.savedAmount),
        goalAmount: parseInt(editingGoal.goalAmount),
      });
    }
  }, [editingGoal]);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormValues(function (prevValues) {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    //save form data
    const formData = new FormData(event.target);
    const newData = Object.fromEntries(formData);

    // save goal
    onAddGoal(newData);

    // transaction logic
    const prevAmount = parseInt(editingGoal.savedAmount) ?? 0;
    const amountDiff = parseInt(newData.savedAmount) - parseInt(prevAmount);

    if (amountDiff > 0) {
      onAddTransaction({
        amount: parseInt(amountDiff) * -1,
        category: "Savings transfer",
        additional: "hidden",
      });
    } else if (amountDiff < 0) {
      onAddTransaction({
        amount: parseInt(amountDiff) * -1,
        category: "Savings transfer",
        additional: "hidden",
      });
    }

    setIsModalOpen(false);
    onCancelEdit();
    setFormValues({
      goalName: "",
      savedAmount: "",
      goalAmount: "",
    });
  }

  function handleCancel() {
    if (window.confirm("Are you sure you want to cancel editing this goal?")) {
      setIsModalOpen(false);
      onCancelEdit();
      setFormValues({
        goalName: "",
        savedAmount: "",
        goalAmount: "",
      });
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
      {isModalOpen && (
        <ModalBackround>
          <ModalContainer>
            <form onSubmit={handleSubmit}>
              <StyledBr>
                <label htmlFor="name__id"> *Goal Name </label>
                <input
                  id="name__id"
                  name="goalName"
                  max="10"
                  required
                  value={formValues.goalName}
                  defaultValue=""
                  onChange={handleChange}
                />
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
                  required
                  value={formValues.savedAmount}
                  onChange={handleChange}
                  onInvalid={(event) =>
                    handleValidation(
                      event,
                      "The amount you entered cannot be greater than your savings balance!"
                    )
                  }
                  onInput={(event) => handleValidation(event, "")}
                ></input>
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
                  required
                  value={formValues.goalAmount}
                  onChange={handleChange}
                />
              </StyledBr>

              <StyledHint>All fields with * are required!</StyledHint>
              <button type="submit">Save Goal</button>
              <button type="button" onClick={handleCancel}>
                Cancel
              </button>
            </form>
          </ModalContainer>
        </ModalBackround>
      )}
    </>
  );
}
