import { transactions } from "@/ressources/data";
import { useState } from "react";
import React from "react";

export default function Form() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
    console.log(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend> Add a new Transcation</legend>
          <label for="date__id">*Date: </label>
          <input id="date__id" type="date" />
          <br></br>
          <fieldset>
            <legend> *Type of Transactions</legend>

            <input name="type" id="expense__id" type="radio"></input>
            <label for="expense__id">Expense </label>

            <input name="type" id="income__id" type="radio"></input>
            <label for="income__id">Income</label>
          </fieldset>
          <label for="amount__id">*Amount in EUR: </label>
          <input
            id="amount__id"
            type="number"
            min="1"
            max="10000000"
            step="1"
            pattern="[0-9]+"
          ></input>
          <br></br>

          <label for="category__id">*Category: </label>
          <select id="category__id">
            <option value="Salary">Salary</option>
            <option value="Rent">Rent</option>
            <option value="Food">Food</option>
            <option value="Fun">Fun</option>
            <option value="Unexpected Income">Unexpected Income</option>
          </select>
          <br></br>
          <label for="discription__id">Discription: </label>
          <textarea id="discription__id" max="50"></textarea>
          <br></br>
          <button>Add </button>
        </fieldset>
      </form>
    </>
  );
}
