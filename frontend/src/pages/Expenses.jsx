import React, { useEffect, useState } from "react";
import axios from "axios";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseItem from "../components/ExpenseItem";

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get("http://localhost:3000/expense");
        setExpenses(response.data);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };

    fetchExpenses();
  }, []);

  const addExpense = async (expense) => {
    try {
      const response = await axios.post("http://localhost:3000/expense", expense);
      setExpenses([...expenses, response.data.expense]);
    } catch (error) {
      console.error("Failed to add expense:", error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">💰 Expenses</h1>
      <ExpenseForm addExpense={addExpense} />
      
      <div className="bg-white shadow-md rounded-lg p-4">
        {expenses.length > 0 ? (
          expenses.map((expense, index) => <ExpenseItem key={index} expense={expense} />)
        ) : (
          <p className="text-gray-500">No expenses recorded yet.</p>
        )}
      </div>
    </div>
  );
};

export default Expenses;