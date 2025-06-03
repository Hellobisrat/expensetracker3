import React, { createContext, useContext, useState } from "react";

const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  // Function to add expense
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};

// Custom hook for easy access
export const useExpenses = () => {
  return useContext(ExpenseContext);
};