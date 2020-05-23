import React from "react";
import Header from "./Header";

function ToDoitems() {
  return (
    <div>
      <Header />
      <input type="checkbox" />
      <p>
        <b>Grocery Shopping</b>
      </p>

      <input type="checkbox" />
      <p>
        <b>House Cleaning</b>
      </p>

      <input type="checkbox" />
      <p>
        <b>Laundry</b>
      </p>

      <input type="checkbox" />
      <p>
        <b>Gardening</b>
      </p>
    </div>
  );
}

export default ToDoitems;
