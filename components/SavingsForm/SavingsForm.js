import React from "react";
import { TransactionForm, FormItems, StyledHint } from "@/styles";

export default function SavingsForm({ onAddTransaction }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0];

    onAddTransaction({
      ...data,
      amount: parseInt(data.savings_amount),
      savings_amount: parseInt(data.savings_amount),
      date: formattedDate,
      category: "Savings transfer",
      type: "Expense",
    });
  }

  return (
    <>
      <TransactionForm onSubmit={handleSubmit}>
        <FormItems>
          <legend> Add a new Saving</legend>
          {/* <label htmlFor="date__id">*Date: </label>
          <input id="date__id" name="date" type="date" required /> */}

          <label htmlFor="s_amount__id">*Amount in EUR: </label>
          <input
            id="s_amount__id"
            type="number"
            name="savings_amount"
            min="1"
            max="10000000"
            step="1"
            pattern="[0-9]+"
            required
          />

          <StyledHint>All fields with * are required!</StyledHint>
          <button type="submit">Add Saving</button>
        </FormItems>
      </TransactionForm>
    </>
  );
}
