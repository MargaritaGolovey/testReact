import React, { useState } from "react";
import "./todo-list.css";
import TodoItemAdd from "./todo-add/todo-add";
const todoListInitialData = [
  { id: 1, action: "Купити хліб" },
  { id: 2, action: "Накопати Картошку" },
  { id: 3, action: "Піти в кіно" },
];

const TodoList = () => {
  const [todoListData, setTodoListData] = useState(todoListInitialData);

  const todoItemAdd = (action) => {
    if (!action) return;
    setTodoListData([...todoListData, { id: todoListData.length + 1, action }]);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <h2>Todo List</h2>
      {todoListData.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <div className="list">
              <h1>{item.id}</h1>
              <p>{item.action}</p>
            </div>
          </React.Fragment>
        );
      })}
      <TodoItemAdd todoItemAdd={todoItemAdd} />
    </div>
  );
};
export default TodoList;
