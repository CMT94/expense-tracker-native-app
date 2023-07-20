import React from "react";

import { StyleSheet } from "react-native";

import ExpensesOutput from "../components/Expenses/ExpensesOutput";

const RecentExpensesScreen = () => {
  return <ExpensesOutput expensesPeriod="Last 7 days" />;
};

const styles = StyleSheet.create({});
export default RecentExpensesScreen;
