import React from "react";

import { View, StyleSheet } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

import EXPENSES from "../data/expenses";

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View>
      <ExpensesSummary expenses={EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={EXPENSES} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ExpensesOutput;
