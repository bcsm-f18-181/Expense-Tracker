//import logo from './logo.svg';
// import { useState } from "react";
import { useState } from "react";
import "./App.css";
//import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMAY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet paper",
    amount: 33.67,
    date: new Date(2022, 8, 2023)
  },
  {
    id: "e2",
    title: "Car insurance",
    amount: 34.7,
    date: new Date(2021, 8, 2023)
  },
  {
    id: "e3",
    title: "New Desk (wooden)",
    amount: 46.38,
    date: new Date(2023, 8, 2023)
  },
  {
    id: "e4",
    title: "New Tv",
    amount: 77.45,
    date: new Date(2020, 8, 2023)
  }
];
function App() {
  const [expenses, setExpenses] = useState(DUMMAY_EXPENSES);
  //const [name, setName] = useState("Fozan");
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
