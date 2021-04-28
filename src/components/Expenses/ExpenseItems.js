import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from "react";

const ExpenseItem = (props) => {
  let { title, amount } = props.item;

  const [titles, setTitle] = useState(title);

  const clickHandler = () => {
    setTitle("Updated");
    console.log(titles);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.item} />
      <div className="expense-item__description">
        <h2>{titles}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
