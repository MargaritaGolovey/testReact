import { useState } from "react";

const TodoItemAdd = ({ todoItemAdd }) => {
  const [value, setValue] = useState("");

  return (
    <>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button
        onClick={() => {
          if (value.trim()) todoItemAdd(value);
        }}
      >
        Add
      </button>
    </>
  );
};
export default TodoItemAdd;
