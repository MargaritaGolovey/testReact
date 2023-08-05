import React, { useState } from "react";
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
  const [elem, delElem]=useState(); 

const delateElem=(el)=>{
  console.log(todoListData);
  delElem(todoListData.map((item, index) => item.id == el ? todoListData.splice(index,index+1): null ));
  
}

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16", marginLeft:"50px" }}>
      <h2>Todo List</h2>
      {todoListData.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <div style={{border:"1px solid black", marginBottom:"20px", width: "150px", textAlign:"center", padding:"10px"}}>
              <h1>{item.id}</h1>
              <p>{item.action}</p>
              <button id={item.id} onClick={(e)=>delateElem(e.target.id)}>Delate</button>
            </div>
          </React.Fragment>
        );
      })}
      <TodoItemAdd todoItemAdd={todoItemAdd} />
    </div>
  );
};
export default TodoList;
