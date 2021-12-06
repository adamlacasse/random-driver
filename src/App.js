import { useState } from "react";

const drivers = [];

function App() {
  const [inputValue, setInputValue] = useState('');
  const [randomDriver, setRandomDriver] = useState(null);

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
    const filteredDrivers  = drivers.filter(driver => driver !== randomDriver);
    setRandomDriver(filteredDrivers[Math.floor(Math.random() * filteredDrivers.length)])
  }

  return (
    <>
    <header>
      <h1>Giraffe Drivers</h1>
    </header>
      <section>
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
          {!randomDriver ? 'Get the Driver!' : 'Get a different one?'}
        </button>
      </section>}
      {randomDriver && 
        <section>
          <h1>{randomDriver}</h1>
        </section>
      }
    </>
  );
}

export default App;
