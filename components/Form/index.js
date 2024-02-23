import React from "react";
import { StyledHint } from "@/styles";
import styled from "styled-components";

const StyledForm = styled.form`
  display: grid;
  gap: 1rem;

  margin-bottom: 100px;
`;

const categories = [
  "Salary",
  "Rent",
  "Pets",
  "Household",
  "Food",
  "Health",
  "Hobby",
  "Other",
];

export default function Form_({ onAddTransaction, formType }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddTransaction(
      formType === "savingGoals"
        ? {
            ...data,
            amount: parseInt(data.amount),
            category: "Savings transfer",
            decription: "i am a saving goal transaction",
          }
        : { ...data, amount: parseInt(data.amount) }
    );
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <legend> Add a new {formType}</legend>

        {formType === "transaction" && (
          <>
            {" "}
            <label htmlFor="date__id">*Date:</label>
            <input id="date__id" name="date" type="date" required />
            <fieldset>
              <legend> *Type of Transactions</legend>
              <input
                name="type"
                id="expense__id"
                type="radio"
                value="Expense"
                required
              />
              <label htmlFor="expense__id">Expense</label>

              <input
                name="type"
                id="income__id"
                type="radio"
                value="Income"
                required
              />
              <label htmlFor="income__id">Income</label>
            </fieldset>
          </>
        )}

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
        />
        {formType === "transaction" && (
          <>
            <label htmlFor="category__id">*Category: </label>
            <select id="category__id" name="category" required>
              <option value="" defaultValue={"--Choose Category--"}>
                --Choose Category--
              </option>
              {categories.map((category, index_) => (
                <option key={index_} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <label htmlFor="description__id">Description: </label>
            <textarea
              id="description__id"
              name="description"
              max="50"
            ></textarea>
          </>
        )}
        <StyledHint>All fields with * are required!</StyledHint>
        <button type="submit">Add</button>
      </StyledForm>
    </>
  );
}
