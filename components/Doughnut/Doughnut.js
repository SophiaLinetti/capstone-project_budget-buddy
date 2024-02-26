import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useState } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutComponent({ transactions }) {

  const [type, setType] = useState('Expense');
  const categories = ["Salary", "Hobby", "Food", "Household", "Health", "Other"];
  const options = {
    responsive: "true",
    cutoutPercentage: 100, 
    radius: '85%',

    animation: {
      animateScale: false,
      animateRotate: true,
      duration: 1500,
      easing: "easeInSine",
      
    },
  };

 /*  function handleToggleTypeOnClick() {
    if(type === 'Expense') {
      setType('Income');
    } else {
      setType('Expense');
    } */

  function handleTypeOnClick(transactionType) {
    setType(transactionType);
  }

   function sumByCategoryFunction(categories) {
    return categories.map(function(category) {
      return transactions
        .filter(function(transaction) {
          return (
            transaction.type === type &&
            transaction.internalGoalAllocation !== "yes" &&
            transaction.category === category
          );
        })
        .reduce(function(sum, transaction) {
          return sum + transaction.amount;
        }, 0);
    });
  } 

  function calculateBalance(transactions) {
    const income = transactions
      .filter(transaction => transaction.type === "Income" && transaction.internalGoalAllocation !== "yes")
      .reduce((sum, transaction) => sum + transaction.amount, 0);

    const expense = transactions
      .filter(transaction => transaction.type === "Expense" && transaction.internalGoalAllocation !== "yes")
      .reduce((sum, transaction) => sum + transaction.amount, 0);

    return income - expense;
  }
  console.log(calculateBalance(transactions))

const sumByCategory = sumByCategoryFunction(categories);
console.log(sumByCategory)
console.log(categories)

  const data = {
    labels: categories,
    datasets: [
      {
        label: "€",
        data: sumByCategory,
        backgroundColor: [
          "rgb(255,132,46)",
          "rgb(204,255,90)",
          "rgb(40,184,255)",
          "rgb(40,81,255)",
          "rgb(105,255,71)",
          "rgb(255,105,66)",
        ],
        hoverOffset: 50,
      },
    ],
  };

  return (
  <>
  <button onClick={() => handleTypeOnClick("Expense")}> Expenses </button>
  <button onClick={() => handleTypeOnClick("Income")}> Income </button>
  <p>Distribution of {type}</p>
  <Doughnut data={data} options={options} />
  <p> Your Current Account Balance: {calculateBalance(transactions)} EUR</p>
  </>
  );
}
