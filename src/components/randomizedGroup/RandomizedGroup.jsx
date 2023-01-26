import { useState } from 'react';
import trashIcon from '../../images/delete_FILL0_wght400_GRAD0_opsz48.svg'

import './RandomizedGroup.scss';

export default function RandomizedGroup({ unrandomizedGroup, setShowEnterTeam }) {
  const [randomizedGroup, setRandomizedGroup] = useState([]);

  const handleRandomizeBtnClick = () => {
    setRandomizedGroup([...unrandomizedGroup].sort(() => Math.random() - 0.5));
    setShowEnterTeam(false);
  };

  const buttonMarkup = (
    <section className="randomized-group-section">
      <button 
        onClick={handleRandomizeBtnClick}
        disabled={unrandomizedGroup.length < 2}
      >
        Randomize the group!
      </button>
    </section>
  );

  const listMarkup = (
    <section className="randomized-group-section">
      <h2>Let's go in this order!</h2>
      <ol>
        {randomizedGroup.map(member => (
          <li key={member} title="Drag to reorder">
            <span>{member}</span>
            <button 
                type="button" 
                className="remove-btn" 
                onClick={() => setRandomizedGroup(randomizedGroup.filter((personToRemove) => personToRemove != member))}
            >
                <img src={trashIcon} className="trash-icon" />
            </button>
          </li>
        ))}
      </ol>
    </section>
  );

  return randomizedGroup.length > 0 ? listMarkup : buttonMarkup;
}
