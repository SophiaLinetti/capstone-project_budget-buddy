import React from "react";
import Chart from "chart.js/auto";

export default function Donut() {
  const chartRef = React.useRef(null);

  const mockData = {
    labels: ["Category 1", "Category 2", "Category 3"],
    values: [50, 25, 25],
  };

  React.useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      const myChart = new Chart(ctx, {
        type: "doughnut",
        data: mockData,
        options: {
          responsive: true,
          legend: {
            display: true,
            position: "top",
            labels: {
              fontColor: "grey",
              fontSize: 14,
            },
          },
          title: {
            display: true,
            text: "Doughnut Chart", // Replace with your desired title
            fontColor: "black",
            fontSize: 16,
          },
          plugins: {
            // Customize further styling if needed
          },
        },
      });
    }
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <canvas
        ref={chartRef}
        style={{ width: 400, height: 400, margin: "20px" }}
      />
    </div>
  );
}
