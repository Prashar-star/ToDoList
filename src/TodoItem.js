import React from "react";
// import Header from "./Header";

function TodoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  };
  return (
    <div className="mylist">
      <input
        type="checkbox"
        checked={props.item.status}
        onChange={() => props.handleChange(props.item.id)}
      />
      <p style={props.item.status ? completedStyle : null}>{props.item.task}</p>
    </div>
  );
}

export default TodoItem;
