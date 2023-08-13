import React, { useState, useMemo } from "react";
import TodoItemAdd from "./todo-add/todo-add";
import TodoListItem from "./todo-list-item/todol-list-item";


const todoListInitialData = [
  { id: 1, action: "Купити хліб" },
  { id: 2, action: "Накопати Картошку" },
  { id: 3, action: "Піти в кіно" },
];

const TodoList = () => {
  const [todoListData, setTodoListData] = useState(todoListInitialData);
  const [toggle, setToggle] = useState(false);
  const editElement = (value, id) => {
    const newArray = todoListData.map((item) =>
      item.id === id ? { id, action: value } : item
    );
    setTodoListData(newArray);
  };

  const todoItemAdd = (action) => {
<<<<<<< HEAD
//видялаємо перший елемент і бачимо що при створенні в нас не створється елемент з айді 1 а створюється елемент з айді 4
//виправити

//local Storrage
//session Storage
//який формат

    const isAvailableId = (element, index, array) => {
      if (array[index]?.id + 1 !== array[index + 1]?.id) return true;
    };

    if (!action) return;
    setTodoListData(
      [
        ...todoListData,
        {
          id:
            todoListData.findIndex(isAvailableId) !== -1
              ? todoListData[todoListData.findIndex(isAvailableId)].id + 1
              : todoListData.length + 1,
          action,
        },
      ].sort((a, b) => a.id - b.id)
    );
  };
=======
    if (!action) return;
    setTodoListData([...todoListData, { id: todoListData.length + 1, action }]);
  };
  const [elem, delElem]=useState(); 

const deleteElem=(el)=>{
  console.log(todoListData);
  delElem(todoListData.map((item, index) => item.id == el ? todoListData.splice(index,index+1): null ));
  
}
>>>>>>> parent of 477d03b (change splice)

  const deleteElem = (id) => {
    const result = todoListData.filter((el) => el.id !== id);
    setTodoListData(result);
  };

  const memoTodoList = useMemo(() => {
    return todoListData.map((item) => {
      return (
        <TodoListItem
          key={item.id}
          item={item}
          editElement={editElement}
          deleteElem={deleteElem}
        />
      );
    });
  }, [todoListData]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16", marginLeft:"50px" }}>
      <h2>Todo List</h2>
<<<<<<< HEAD

      {memoTodoList}
      {toggle && <p>knopka On</p>}
=======
      {todoListData.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <div style={{border:"1px solid black", marginBottom:"20px", width: "150px", textAlign:"center", padding:"10px"}}>
              <h1>{item.id}</h1>
              <p>{item.action}</p>
              <button id={item.id} onClick={(e)=>deleteElem(e.target.id)}>Delate</button>
            </div>
          </React.Fragment>
        );
      })}
>>>>>>> parent of 477d03b (change splice)
      <TodoItemAdd todoItemAdd={todoItemAdd} />

      <button
        onClick={() => {
          setToggle((value) => !value);
        }}
      >
        Toggle
      </button>
    </div>
  );
};
export default TodoList;
