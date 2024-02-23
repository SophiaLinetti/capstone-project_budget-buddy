import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutComponent() {
  const options = {
    animation: {
      animateScale: false,
      animateRotate: true,
      duration: 1500,
      easing: "easeInSine",
    },
  };

  const data = {
    labels: ["Household", "Hobbie", "BLAAA", "test", "Pupsi", "Zu viel"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 10, 20, 80, 90],
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

  return <Doughnut data={data} options={options} />;
}

/* 
{
  id: "7",                                        Mandatory
  type: "Expense",                                Mandatory / goals type
  amount: 50,                                     Mandatory
  date: "2024-01-24",                             Mandatory
  description: "Gym membership",                  Mandatory
  category: "Health",
  goalsRelatet: "yes"




  additional: [


    extras: "hidden"                              Optional
     

  ]
}, */
