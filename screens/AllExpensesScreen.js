import React from "react";

import { View, Text, StyleSheet } from "react-native";

import ExpensesOutput from "../components/ExpensesOutput";

const AllExpensesScreen = () => {
  return <ExpensesOutput expensesPeriod="Total" />;
};

export default AllExpensesScreen;
