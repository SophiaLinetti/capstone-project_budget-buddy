import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useState } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutComponent({ transactions }) {

  const [type, setType] = useState('Expense');
  const categories = ["Salary", "Hobby", "Food", "Household", "Health", "Other"];
  const options = {
    animation: {
      animateScale: false,
      animateRotate: true,
      duration: 1500,
      easing: "easeInSine",
      responsive: "true"
    },
    
  };

  function handleTypeOnClick() {
    if(type === 'Expense') {
      setType('Income');
    } else {
      setType('Expense');
    }
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

const sumByCategory = sumByCategoryFunction(categories);
console.log(sumByCategory)
console.log(categories)

  const data = {
    labels: categories,
    datasets: [
      {
        label: "Amount",
        data: sumByCategory,
        backgroundColor: [
          "rgb(255,132,46)",
          "rgb(204,255,90)",
          "rgb(40,184,255)",
          "rgb(40,81,255)",
          "rgb(105,255,71)",
          "rgb(255,105,66)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
  <>
  <button onClick={() => handleTypeOnClick("Expense")}> Expenses </button>
  <button onClick={() => handleTypeOnClick("Income")}> Income </button>
  <p>Distribution of {type}</p>
  <Doughnut data={data} options={options} />
  </>
  );
}


