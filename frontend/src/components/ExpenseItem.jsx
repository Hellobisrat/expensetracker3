import React from "react";

const ExpenseItem = ({ expense }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-3 flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold">{expense.category}</h3>
        <p className="text-gray-600">{expense.description}</p>
      </div>
      <div className="text-green-600 font-bold text-lg">
        ${expense.amount}
      </div>
    </div>
  );
};

export default ExpenseItem;