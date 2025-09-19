import React, { useState } from "react";
import { useExpenses } from "../context/ExpenseContext";

const ExpenseForm = () => {
  const { addExpense } = useExpenses();
  const [form, setForm] = useState({ title: "", amount: "", category: "Food", type: "Expense" });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!form.title || !form.amount) return;
//     addExpense({ ...form, amount: parseFloat(form.amount) });
//     setForm({ title: "", amount: "", category: "Food", type: "Expense" });
//   };

const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.amount) return;

    // If it's Income, remove category field
    const newEntry =
      form.type === "Income"
        ? { title: form.title, amount: parseFloat(form.amount), type: form.type }
        : { ...form, amount: parseFloat(form.amount) };

    addExpense(newEntry);

    // Reset form
    setForm({ title: "", amount: "", category: "Food", type: "Expense" });
  };


  return (
    <form onSubmit={handleSubmit} className="bg-white shadow p-4 rounded-lg flex flex-col sm:flex-row gap-4">
      <input
        type="text"
        placeholder="Title"
        className="border p-2 rounded flex-1"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <input
        type="number"
        placeholder="Amount"
        className="border p-2 rounded w-32"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
      />
      {/* <select
        className="border p-2 rounded"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      >
        <option>Food</option>
        <option>Travel</option>
        <option>Bills</option>
        <option>Shopping</option>
      </select> */}

      <select
        className="border p-2 rounded"
        value={form.type}
        onChange={(e) => setForm({ ...form, type: e.target.value })}
      >
        <option>Expense</option>
        <option>Income</option>
      </select>

      {form.type === "Expense" && (
        <select
          className="border p-2 rounded"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        >
          <option>Food</option>
          <option>Travel</option>
          <option>Bills</option>
          <option>Shopping</option>
        </select>
      )}

      
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add</button>
    </form>
  );
};

export default ExpenseForm;
