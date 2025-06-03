import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Expense List</h2>
      {expenses.length > 0 ? (
        expenses.map((expense, index) => (
          <ExpenseItem key={index} expense={expense} />
        ))
      ) : (
        <p className="text-gray-500">No expenses recorded yet.</p>
      )}
    </div>
  );
};

export default ExpenseList;