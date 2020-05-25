import React from "react";
import "./styles.css";
import TodoItem from "./TodoItem";
import todosData from "./todosData";
import Header from "./Header";

function App() {
  const todoitems = todosData.map(item => (
    <TodoItem key={item.id} item={item} />
  ));

  return (
    <div>
      <Header />
      <div className="mylist">{todoitems}</div>;
    </div>
  );
}
export default App;
