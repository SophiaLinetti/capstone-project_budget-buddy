import React from "react";
import { StyledHint } from "@/styles";
import styled from "styled-components";

const StyledTransactionFormButton = styled.button`
  height: 30px;
  width: 45%;
  margin-top: 70px;
  color: black;
  border: outset;
`;

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
  z-index: 999;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export default function Form({ onAddTransaction, onIsModalOpen, isModalOpen }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddTransaction({ ...data, amount: parseInt(data.amount) });
    onIsModalOpen(false);
  }

  function handleCancel() {
    if (
      window.confirm("Are you sure you want to cancel adding this Transaction?")
    ) {
      onIsModalOpen(false);
    }
  }

  return (
    <>
      <StyledTransactionFormButton onClick={() => onIsModalOpen(true)}>
        Add Transcation
      </StyledTransactionFormButton>
      {isModalOpen && (
        <ModalBackround>
          <ModalContainer>
            <form onSubmit={handleSubmit}>
              <li>
                <legend> Add a new Transcation</legend>
                <label htmlFor="date__id">*Date: </label>
                <input id="date__id" name="date" type="date" required />
                <br></br>
                <fieldset>
                  <legend> *Type of Transactions</legend>

                  <input
                    name="type"
                    id="expense__id"
                    type="radio"
                    value="Expense"
                    required
                  ></input>
                  <label htmlFor="expense__id">Expense </label>

                  <input
                    name="type"
                    id="income__id"
                    type="radio"
                    value="Income"
                    required
                  ></input>
                  <label htmlFor="income__id">Income</label>
                </fieldset>

                <label htmlFor="amount__id">*Amount in EUR: </label>
                <input
                  id="amount__id"
                  type="number"
                  name="amount"
                  min="1"
                  max="10000000"
                  step="1"
                  pattern="[0-9]+"
                  required
                ></input>
                <br></br>

                <label htmlFor="category__id">*Category: </label>
                <select id="category__id" name="category" required>
                  <option value="" defaultValue={"--Choose Category--"}>
                    --Choose Category--
                  </option>
                  <option value="Salary">Salary</option>
                  <option value="Rent">Rent</option>
                  <option value="Household">Household</option>
                  <option value="Food">Food</option>
                  <option value="Health">Health</option>
                  <option value="Hobby">Hobby</option>
                  <option value="Other">Other</option>
                </select>
                <br></br>
                <label htmlFor="description__id">Description: </label>
                <textarea
                  id="description__id"
                  name="description"
                  max="50"
                ></textarea>
                <br></br>
                <StyledHint>All fields with * are required!</StyledHint>
                <button type="submit">Add</button>
                <button type="button" onClick={handleCancel}>
                  Cancel
                </button>
              </li>
            </form>
          </ModalContainer>
        </ModalBackround>
      )}
    </>
  );
}
