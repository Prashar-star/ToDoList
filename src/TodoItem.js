import React from "react";
// import Header from "./Header";

function TodoItem(props) {
  return (
    // <Header />
    <div className="mylist">
      <input
        type="checkbox"
        checked={props.item.status}
        onChange={() => props.handleChange(props.item.id)}
      />
      <p>{props.item.number}</p>
      <p>{props.item.task}</p>
    </div>
  );
}

export default TodoItem;
