import { useState } from 'react';
import './RandomizedGroup.scss';

export default function RandomizedGroup({ unrandomizedGroup }) {
  const [randomizedGroup, setRandomizedGroup] = useState([]);

  const buttonMarkup = (
    <section id="randomized-group-section">
      <button 
        id="randomize-group-btn" 
        onClick={() => setRandomizedGroup([...unrandomizedGroup].sort(() => Math.random() - 0.5))}
      >
        Randomize the group!
      </button>
    </section>
  );

  const listMarkup = (
    <>
      <h2>here's the randomized group....</h2>
      <ul>
        {randomizedGroup.map(member => (
          <li key={member}>
            <span>{member}</span>
          </li>
        ))}
      </ul>
    </>
  );

  return randomizedGroup.length > 0 ? listMarkup : buttonMarkup;
}
