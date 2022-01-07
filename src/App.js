import { useState } from "react";
import giraffeLogo from './img/giraffeLogo.png'
import limuDoug from './img/doug-limu.webp';

import './styles.css';

const drivers = [];

function App() {
  const [inputValue, setInputValue] = useState('');
  const [randomDriver, setRandomDriver] = useState(null);
  const [showRandomizedGroup, setShowRandomizedGroup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.search(',') !== -1) {
      inputValue.split(',').forEach(driver => {
        drivers.push(driver);
      });
    } else {
      drivers.push(inputValue);
    }

    setInputValue('');
  }

  const handleRandomDriverRequest = () => {
    const filteredDrivers = drivers.filter(driver => driver !== randomDriver);
    setRandomDriver(filteredDrivers[Math.floor(Math.random() * filteredDrivers.length)])
  }

  return (
    <>
      <header>
        <div className="container">
          <img src={giraffeLogo} alt="I'm a Giraffe! Logo" className="giraffe-logo" />
          <h1>Giraffe Randomizer</h1>
        </div>
      </header>
      <main>
        <section className="container driver-entry">
          <h2>Enter the potential drivers</h2>
          <p>One at a time or comma separated</p>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            </label>
            <input type="submit" value="Add them!" disabled={!inputValue} />
          </form>
        </section>
        {drivers.length > 0 &&
          <section>
            <h2>Potential Drivers</h2>
            <ol>
              {drivers.map(driver => <li key={driver}>{driver}</li>)}
            </ol>
            <button
              onClick={handleRandomDriverRequest}
            >
              {!randomDriver ? 'Get a Driver!' : 'Get a different one?'}
            </button>
            <span>{' or '}</span>
            <button onClick={() => setShowRandomizedGroup(true)}>Randomize the whole group</button>
          </section>}
        {randomDriver &&
          <section>
            <h2>The new driver is</h2>
            <h3>{randomDriver}</h3>
            <img src={limuDoug} alt="Limu Emu and Doug" className="" />
          </section>
        }
        {showRandomizedGroup &&
          <section>
            <h2>Let's go in this order today!</h2>
            <ol>
              {[...drivers].sort(() => Math.random() - 0.5).map(person => <li key={person}>{person}</li>)}
            </ol>
          </section>
        }
      </main>
    </>
  );
}

export default App;
