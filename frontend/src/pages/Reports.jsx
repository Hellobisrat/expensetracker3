import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Report = () => {
  const [expenses, setExpenses] = useState([]);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get("http://localhost:3000/expense");
        setExpenses(response.data);

        // Process data for the chart
        const categoryTotals = response.data.reduce((acc, expense) => {
          acc[expense.category] = (acc[expense.category] || 0) + parseFloat(expense.amount);
          return acc;
        }, {});

        setChartData({
          labels: Object.keys(categoryTotals),
          datasets: [
            {
              label: "Expenses by Category ($)",
              data: Object.values(categoryTotals),
              backgroundColor: "rgba(54, 162, 235, 0.5)",
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };

    fetchExpenses();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">📊 Expense Reports</h1>

      {chartData ? (
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">Expense Breakdown by Category</h2>
          <Bar data={chartData} />
        </div>
      ) : (
        <p className="text-gray-500">No expense data available.</p>
      )}
    </div>
  );
};

export default Report;