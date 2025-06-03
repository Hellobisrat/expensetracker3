import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get("http://localhost:3000/expense");
        setExpenses(response.data);

        // Calculate total amount spent
        const total = response.data.reduce((sum, expense) => sum + parseFloat(expense.amount), 0);
        setTotalAmount(total);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };

    fetchExpenses();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">📊 Expense Dashboard</h1>

      {/* Total Expense Amount */}
      <div className="bg-blue-500 text-white text-lg font-semibold p-4 rounded-lg mb-6">
        Total Spent: ${totalAmount.toFixed(2)}
      </div>

      {/* Expense Breakdown */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-2">Expense Breakdown</h2>
        {expenses.length > 0 ? (
          <ul>
            {expenses.map((expense, index) => (
              <li key={index} className="border-b py-2">
                {expense.category}: ${expense.amount} ({expense.description})
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No expenses recorded yet.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;