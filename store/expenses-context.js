import React from "react";

import { v4 as uuid } from "uuid";

import EXPENSES from "../data/expenses";

const ExpensesContext = React.createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const id = uuid();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updateExpenseIndex = state.expenses.findIndex(
        (e) => e.id === action.payload.id
      );
      const updateExpense = state[updateExpenseIndex];
      const updatedItem = { ...updateExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updateExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((e) => e.id !== action.payload);
    default:
      return state;
  }
};

const ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = React.useReducer(expensesReducer, EXPENSES);

  const addExpense = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };
  const deleteExpense = (expenseId) => {
    dispatch({ type: "DELETE", payload: expenseId });
  };
  const updateExpense = (expenseId, expenseData) => {
    dispatch({ type: "UPDATE", payload: { id: expenseId, data: expenseData } });
  };

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;
