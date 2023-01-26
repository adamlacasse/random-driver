import { useState, useEffect } from "react";
import trashIcon from '../../../images/delete_FILL0_wght400_GRAD0_opsz48.svg';
import doneIcon from '../../../images/done_outline_FILL0_wght400_GRAD0_opsz48.svg';
import resetIcon from '../../../images/undo_FILL0_wght400_GRAD0_opsz48.svg';

import draggableLogic from "../../../helpers/draggable";

import "./RandomizedMember.scss";

export default ({ member, randomizedGroup, setRandomizedGroup }) => {
  const [turnTaken, setTurnTaken] = useState(false);
  useEffect(() => {
    draggableLogic();
  }, []);

  return (
    <li className={`randomized-member draggable ${turnTaken ? 'turn-taken' : ''}`} draggable="true">
      <span>{member}</span>
      <button
        type="button"
        className="inline-btn"
        title="Remove this person"
        onClick={() => setRandomizedGroup(randomizedGroup.filter((personToRemove) => personToRemove != member))}
      >
        <img src={trashIcon} className="btn-icon" />
      </button>
      <button
        type="button"
        className="inline-btn"
        title={turnTaken ? 'Reset person' : 'Mark their turn taken'}
        onClick={() => setTurnTaken(!turnTaken)}
      >
        <img src={turnTaken ? resetIcon : doneIcon} className="btn-icon" />
      </button>
    </li>
  );
};
