import { useState } from 'react';
import currentGiraffes from '../../data/currentGiraffes.json';

const itsAprilFoolsDay = new Date().getMonth() === 4 && new Date().getDate() === 1;
if (itsAprilFoolsDay) {
  currentGiraffes.push('Big Chungus 🐰');
};

import "./style.css";

export default ({ inputValue, setInputValue, handleSubmit, setDrivers, drivers }) => {
  const [giraffesAdded, setGiraffesAdded] = useState(false);
  const handleAddGiraffes = () => {
    setDrivers([...drivers, ...currentGiraffes]);
    setGiraffesAdded(true);
  }

  return (
    <section className="group-entry">
      <p>Enter group one at a time or comma separated</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <input 
            className="form-input-btn"
            type="submit" 
            value="Add them!" 
            disabled={!inputValue}
        />
      </form>
      <p>
        {'Or '}
        <button onClick={handleAddGiraffes} disabled={giraffesAdded}>Populate with all the Giraffes</button>
      </p>
    </section>
  );
};
