import axios from "axios";

const API_URL = "http://localhost:3000/expense";

export const getExpenses = async () => {
  return await axios.get(API_URL);
};

export const addExpense = async (expenseData) => {
  return await axios.post(API_URL, expenseData);
};