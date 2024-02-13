import React from "react";
import { TransactionForm, FormItems, StyledHint } from "@/styles";

export default function Form({ onAddTransaction }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    console.log("Formdata: ", formData);
    onAddTransaction({ ...data, amount: parseInt(data.amount) });
  }

  return (
    <>
      <TransactionForm onSubmit={handleSubmit}>
        <FormItems>
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
          <textarea id="description__id" name="description" max="50"></textarea>
          <br></br>
          <StyledHint>All fields with * are required!</StyledHint>
          <button type="submit">Add</button>
        </FormItems>
      </TransactionForm>
    </>
  );
}
