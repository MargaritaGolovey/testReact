// import { useState } from "react";
// import { render } from '@testing-library/react';
import { useState } from "react";
import "./school-item.css";

const SchoolItem = ({ rooms }) => {
  const [btn, setBtn] = useState(false);

  return (
    <>
      {rooms.map((el, id) => {
        return (
          <div key={id}>
            {id < 5 ? <div className={btn? "flex": "blue"}>{el}</div> : null}
            {id >= 5 && btn ? <div className={btn? "flex": "blue"}>{el}</div> : null}
          </div>
        );
      })}

      <button
        onClick={() => {
          setBtn((value) => !value);
        }}
      >
        open
      </button>
    </>
  );
};

export default SchoolItem;
