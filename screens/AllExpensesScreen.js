import React from "react";

import { View, Text, StyleSheet } from "react-native";

import ExpensesOutput from "../components/Expenses/ExpensesOutput";

const AllExpensesScreen = () => {
  return <ExpensesOutput expensesPeriod="Total" />;
};

export default AllExpensesScreen;
