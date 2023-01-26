import { useState } from 'react';
import RandomizedMember from './randomizedMember/RandomizedMember';

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
      <p>Drag and drop to reorder</p>
      <ol className='draggable-container'>
        {randomizedGroup.map((member, index) => (
          <RandomizedMember 
            key={`${index}-${member}`} 
            id={`${index}-${member}`} 
            member={member}
            randomizedGroup={randomizedGroup}
            setRandomizedGroup={setRandomizedGroup}
          />
        ))}
      </ol>
    </section>
  );

  return randomizedGroup.length > 0 ? listMarkup : buttonMarkup;
}
