import { useState } from "react";

const TodoItemAdd = ({ todoItemAdd }) => {
  const [value, setValue] = useState("");

  return (
    <>
      <input style={{width:"164px", gap:"20px", marginTop:"30px", marginBottom:"10px"}} type="text" onChange={(e) => setValue(e.target.value)} />
      <button style={{width:"172px", gap:"20px"}}
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
