import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useExpenses } from "../context/ExpenseContext";

const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"];

const ExpenseChart = () => {
  const { expenses } = useExpenses();

  const data = ["Food", "Travel", "Bills", "Shopping"].map((cat) => ({
    name: cat,
    value: expenses
      .filter((e) => e.category === cat && e.type === "Expense")
      .reduce((acc, e) => acc + e.amount, 0),
  }));

  return (
    <div className="bg-white shadow p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Expense Breakdown</h2>
      <PieChart width={350} height={250}>
        <Pie data={data} cx={180} cy={100} innerRadius={50} outerRadius={80} fill="#8884d8" dataKey="value">
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default ExpenseChart;
