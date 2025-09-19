import React from "react";
import { useExpenses } from "../context/ExpenseContext";

const ExpenseSummary = () => {
  const { expenses } = useExpenses();

  const income = expenses.filter((e) => e.type === "Income").reduce((acc, e) => acc + e.amount, 0);
  const expense = expenses.filter((e) => e.type === "Expense").reduce((acc, e) => acc + e.amount, 0);
  const balance = income - expense;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="bg-green-100 p-4 rounded-lg text-center">
        <h3 className="font-semibold">Income</h3>
        <p className="text-2xl text-green-600">₹{income}</p>
      </div>
      <div className="bg-red-100 p-4 rounded-lg text-center">
        <h3 className="font-semibold">Expenses</h3>
        <p className="text-2xl text-red-600">₹{expense}</p>
      </div>
      <div className="bg-blue-100 p-4 rounded-lg text-center">
        <h3 className="font-semibold">Balance</h3>
        <p className="text-2xl text-blue-600">₹{balance}</p>
      </div>
    </div>
  );
};

export default ExpenseSummary;
