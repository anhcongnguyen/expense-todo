import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";
import Card from "../UI/Card";
import React from 'react';

const Expenses = (props) => {
  // let { title, amount } = props.data;
  return (
      <Card className="expenses">
        <ExpenseItems item={props.data}></ExpenseItems>
      </Card>
  );
}

export default Expenses;
