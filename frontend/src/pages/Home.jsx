import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen text-center">
      <h1 className="text-3xl font-bold mb-4">💰 Welcome to Expense Tracker</h1>
      <p className="text-gray-600 mb-6">
        Track your expenses, analyze your spending habits, and stay on top of your finances!
      </p>
      <Link to="/dashboard">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-lg">
          Go to Dashboard
        </button>
      </Link>
    </div>
  );
};

export default Home;