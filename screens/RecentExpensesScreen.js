import React from "react";

import { StyleSheet } from "react-native";

import ExpensesOutput from "../components/Expenses/ExpensesOutput";

import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../utils/date";

const RecentExpensesScreen = () => {
  const expensesCtx = React.useContext(ExpensesContext);
  const recentExpenses = expensesCtx.expenses.filter((e) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return e.date > date7DaysAgo;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 days"
      fallbackText={"No expenses registered for the last 7 days"}
    />
  );
};

const styles = StyleSheet.create({});
export default RecentExpensesScreen;
