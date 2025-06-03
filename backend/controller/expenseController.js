import Expense from "../models/models.js";


export const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving expenses", error });
  }
};
export const addExpenses = async (req, res) => {
  try {
    const newExpense = await Expense.create(req.body);
    res.status(201).json({ message: "Expense added successfully", expense: newExpense });
  } catch (error) {
    res.status(500).json({ message: "Failed to add expense", error: error.message });
  }
};
  
