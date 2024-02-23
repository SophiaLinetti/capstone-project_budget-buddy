import { useState, useEffect } from "react";
import Modal from "../Modal";
import styled from "styled-components";
import { StyledHint, StyledBr } from "@/styles";

export default function EditForm({
  onAddGoal,
  editingGoal,
  onCancelEdit,
  savingBalance,
  onAddTransaction,
<<<<<<< HEAD
=======
  onIsModalOpen,
  onToggleModal,
>>>>>>> 8fe9db3 (refactor forms and remove one)
  formValues,
  onSetFormValues,
  handleSetEditModalOpen,
  isEditModalOpen,
}) {
  function handleChange(event) {
    const { name, value } = event.target;
    onSetFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAddGoal(formValues);
    const amountDiff =
      parseInt(formValues.savedAmount) -
      parseInt(editingGoal?.savedAmount || 0);
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
    handleSetEditModalOpen(false);
    onCancelEdit();
    onSetFormValues({ goalName: "", savedAmount: "", goalAmount: "" });
  }

  function handleCancel() {
    if (window.confirm("Are you sure you want to cancel editing this goal?")) {
<<<<<<< HEAD
      handleSetEditModalOpen(false);
=======
      onToggleModal({ type: "edit", open: false });
>>>>>>> 8fe9db3 (refactor forms and remove one)
      onCancelEdit();
      onSetFormValues({
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
<<<<<<< HEAD
      {isEditModalOpen && (
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
                  onChange={handleChange}
                />
              </StyledBr>
=======
      <Modal>
        <form onSubmit={handleSubmit}>
          <StyledBr>
            <label htmlFor="name__id"> *Goal Name </label>
            <input
              id="name__id"
              name="goalName"
              max="10"
              required
              value={formValues.goalName}
              onChange={handleChange}
            />
          </StyledBr>
>>>>>>> 8fe9db3 (refactor forms and remove one)

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
      </Modal>
    </>
  );
}
