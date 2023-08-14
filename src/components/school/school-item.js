import { useState } from "react";
import "./school-item.css";

const SchoolItem = ({ rooms }) => {
  const [open, setOpen] = useState({
    button11: false,
    button22: false,
    button33: false,
  });

  const toggleState = (property) => {
    let openKey = Object?.entries(open)?.find((el) => el[1]);
    setOpen({
      ...open,
      ...(openKey && { [openKey[0]]: false }),
      [property]: !open[property],
    });
  };

  const buttons = Object.keys(open).map((item, index) => {
    return (
      <>
        <div key={index}>
          <button
            onClick={() => {
              toggleState(item);
            }}
          >
            {open[item] ? "Open" : "Close"}
          </button>
        </div>
      </>
    );
  });

  return <>{buttons}</>;
};

export default SchoolItem;
