import { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { styleReset } from "react95";
import original from "react95/dist/themes/original";
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import AppHeader from "./components/AppHeader";
import StartMenu from "./components/StartMenu";
import PotentialDriversEntry from "./components/windows/PotentialDriversEntry";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
  #desktop {
    min-height: 100vh;
    background-color: teal;
  }
  ${styleReset}
`;

function App() {
  const [drivers, setDrivers] = useState([]);
  const [startMenuOpen, setStartMenuOpen] = useState(false);

  const [inputValue, setInputValue] = useState('');
  const [randomDriver, setRandomDriver] = useState(null);
  const [showRandomizedGroup, setShowRandomizedGroup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.search(',') !== -1) {
      setDrivers([...drivers, inputValue.split(',')]);
    } else {
      setDrivers([...drivers, inputValue]);
    }

    setInputValue('');
  }

  const handleRandomDriverRequest = () => {
    const filteredDrivers = drivers.filter(driver => driver !== randomDriver);
    setRandomDriver(filteredDrivers[Math.floor(Math.random() * filteredDrivers.length)])
  }

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <AppHeader
          startMenuOpen={startMenuOpen}
          setStartMenuOpen={setStartMenuOpen}
        />
        <main>
        {startMenuOpen && (
            <StartMenu
              setStartMenuOpen={setStartMenuOpen}
            />
          )}
        </main>
        <section id="desktop">
          <PotentialDriversEntry
            windowId="drivers-entry"
            inputValue={inputValue}
            setInputValue={setInputValue}
            handleSubmit={handleSubmit}
          />
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
      </ThemeProvider>
    </>
  );
}

export default App;
