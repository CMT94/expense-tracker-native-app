import React from "react";

import ExpensesOutput from "../components/ExpensesOutput";

const RecentExpensesScreen = () => {
  return <ExpensesOutput expensesPeriod="Last 7 days" />;
};

export default RecentExpensesScreen;
