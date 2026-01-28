import React, { useState } from "react";
import ExpenseList from "./components/ExpenseList";

export default function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aa", amount: 10, category: "Utility" },
    { id: 2, description: "aa", amount: 10, category: "Utility" },
    { id: 3, description: "aa", amount: 10, category: "Utility" },
    { id: 4, description: "aa", amount: 10, category: "Utility" },
  ]);
  return (
    <ExpenseList
      expenses={expenses}
      onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
    />
  );
}
