import React from "react";
import { useExpenses } from "../context/ExpenseContext";

const ExpenseList = () => {
  const { expenses, deleteExpense } = useExpenses();

  return (
    <div className="bg-white shadow p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Transactions</h2>
      {expenses.length === 0 ? (
        <p className="text-gray-500">No expenses yet.</p>
      ) : (
        <ul className="space-y-2">
          {expenses.map((e) => (
            <li
              key={e.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <div>
                <span className="font-medium">{e.title}</span>{" "}
                <span className="text-sm text-gray-500">({e.category})</span>
              </div>
              <div className="flex items-center gap-3">
                <span className={e.type === "Expense" ? "text-red-600" : "text-green-600"}>
                  {e.type === "Expense" ? "-" : "+"}₹{e.amount}
                </span>
                <button
                  onClick={() => deleteExpense(e.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  ❌
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;
