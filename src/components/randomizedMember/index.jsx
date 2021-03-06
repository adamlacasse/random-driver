import { useState, useEffect } from "react";
import "./style.css";
import draggableLogic from "../../helpers/draggable";

export default ({ member }) => {
  const [turnTaken, setTurnTaken] = useState(false);
  useEffect(() => {
    draggableLogic();
  }, []);

  return (
    <li className="draggable" draggable="true">
      <span className={`${turnTaken ? "turn-taken grey" : ""}`}>{member}</span>
      <button
        className="check-btn tooltip"
        onClick={() => setTurnTaken(!turnTaken)}
      >
        {turnTaken ? <span>🔁</span> : <span>✔️</span>}
        <span className="tooltiptext">
          {turnTaken
            ? "Unmark person"
            : "Mark person as having taken their turn"}
        </span>
      </button>
    </li>
  );
};
