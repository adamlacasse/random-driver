import { useState } from "react";
import "./style.css";

export default ({ member }) => {
  const [turnTaken, setTurnTaken] = useState(false);

  return (
    <li>
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
