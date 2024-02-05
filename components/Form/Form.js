import React from "react";

export default function Form({ handleSubmit }) 

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend> Add a new Transcation</legend>
          <label htmlFor="date__id">*Date: </label>
          <input id="date__id" name="date" type="date" />
          <br></br>
          <fieldset>
            <legend> *Type of Transactions</legend>

            <input
              name="type"
              id="expense__id"
              type="radio"
              value="Expense"
            ></input>
            <label htmlFor="expense__id">Expense </label>

            <input
              name="type"
              id="income__id"
              type="radio"
              value="Income"
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
          ></input>
          <br></br>

          <label htmlFor="category__id">*Category: </label>
          <select id="category__id" name="category">
            <option value="Salary">Salary</option>
            <option value="Rent">Rent</option>
            <option value="Food">Food</option>
            <option value="Fun">Fun</option>
            <option value="Unexpected Income">Unexpected Income</option>
          </select>
          <br></br>
          <label htmlFor="description__id">Description: </label>
          <textarea id="description__id" name="description" max="50"></textarea>
          <br></br>
          <button type="submit">Add</button>
        </fieldset>
      </form>
    </>
  );
}
