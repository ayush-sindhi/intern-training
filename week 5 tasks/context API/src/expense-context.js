import { createContext, useState } from "react";

export const ExpenseContext = createContext();

export const ExpenseProvider = (props) => {
  const [entries, setEntries] = useState([
    { id: 1, description: "Pizza", amount: -99 },
    { id: 2, description: "Samosa", amount: -7 },
    { id: 3, description: "Dosa", amount: -15 },
    { id: 4, description: "Salary", amount: 200 },
    { id: 5, description: "Stocks", amount: 50 }
  ]);
  const handleDelete = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };
  return (
    <ExpenseContext.Provider value={{ entries, handleDelete }}>
      {props.children}
    </ExpenseContext.Provider>
  );
};
