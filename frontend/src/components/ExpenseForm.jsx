import React, { useState } from "react";

const ExpenseForm = ({ addExpense }) => {
  const [formData, setFormData] = useState({
    amount: "",
    category: "",
    description: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.amount || !formData.category) {
      alert("Amount and category are required!");
      return;
    }
    addExpense(formData);
    setFormData({ amount: "", category: "", description: "" }); // Clear form
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-lg font-bold mb-3">Add Expense</h2>
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;