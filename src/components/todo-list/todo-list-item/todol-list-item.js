import { useEffect, useState } from "react";

const TodoListItem = ({ item, deleteElem, editElement }) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    console.log("render");
  });
  return (
    <div
      key={item.id}
      style={{
        border: "1px solid black",
        marginBottom: "20px",
        textAlign: "center",
        padding: "10px",
      }}
    >
      <h1>{item.id}</h1>
      <p>{item.action}</p>
      <button onClick={() => deleteElem(item.id)}>Delete</button>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button
        disabled={value.length < 3}
        onClick={() => {
          console.log("click");
          editElement(value, item.id);
        }}
      >
        Save
      </button>
      {value.length < 3 && value !== "" ? <p>Ввести больше 3!</p> : null}
    </div>
  );
};

export default TodoListItem;
