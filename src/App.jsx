import React from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseSummary from "./components/ExpenseSummary";
import ExpenseChart from "./components/ExpenseChart";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6"> Personal Expense Tracker</h1>
      
      <div className="max-w-4xl mx-auto space-y-6">
        <ExpenseSummary />
        <ExpenseForm />
        <ExpenseChart />
        <ExpenseList />
      </div>

      
    </div>
  );
};

export default App;
