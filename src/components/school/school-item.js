// import { useState } from "react";
// import { render } from '@testing-library/react';
import { useState } from "react";
import "./school-item.css";

/* 

2 конпки
Опен=>Клосе 
 фолс фолс фолс
 тру  тру
 фолс
*/
const SchoolItem = ({ rooms }) => {
  const [open, setOpen] = useState({
    button11: false,
    button22: false,
    button33: false,
  });

  const toggleState = (property) => {
    setOpen({ ...open, [property]: !open[property] });
  };
  console.log(open);

  const buttons = Object.keys(open).map((item, index) => {
    return (
      <div key={index}>
        <button
          onClick={() => {
            toggleState(item);
          }}
        ></button>
      </div>
    );
  });

  return <>{buttons}</>;
};

export default SchoolItem;
