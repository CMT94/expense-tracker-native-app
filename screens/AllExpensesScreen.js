import React from "react";

import ExpensesOutput from "../components/Expenses/ExpensesOutput";

import { ExpensesContext } from "../store/expenses-context";

const AllExpensesScreen = () => {
  const expensesCtx = React.useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod="Total"
      fallbackText={"No expenses found!"}
    />
  );
};

export default AllExpensesScreen;
