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

const GoalSubmitButton = styled.button`
  position: fixed;
  bottom: 5rem;
  right: 2rem;
  background-color: purple;
  color: white;
  border: none;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function GoalsForm({
  onAddGoal,
  editingGoal,
  onCancelEdit,
  savingBalance,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    goalName: "",
    savedAmount: 0,
    goalAmount: 0,
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

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddGoal({
      ...data,
      savedAmount: parseInt(data.savedAmount),
      goalAmount: parseInt(data.goalAmount),
    });
    setIsModalOpen(false);
    onCancelEdit();
    setFormValues({
      goalName: "",
      savedAmount: 0,
      goalAmount: 0,
    });
  }

  function handleCancel() {
    setIsModalOpen(false);
    onCancelEdit();
    setFormValues({
      goalName: "",
      savedAmount: 0,
      goalAmount: 0,
    });
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
      <GoalSubmitButton onClick={() => setIsModalOpen(true)}>
        +
      </GoalSubmitButton>
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
