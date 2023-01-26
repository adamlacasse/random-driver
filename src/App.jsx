import { useState } from 'react';
import giraffeLogo from './images/giraffeLogo.png';
import EnterTeam from './components/enterTeam/EnterTeam';
import RandomizedGroup from './components/randomizedGroup/RandomizedGroup';

import './App.scss';

function App() {
  const [unrandomizedGroup, setUnrandomizedGroup] = useState([]);

  return (
    <>
      <h1>Giraffe Randomizer</h1>
      <main>
        <EnterTeam unrandomizedGroup={unrandomizedGroup} setUnrandomizedGroup={setUnrandomizedGroup} />
        <RandomizedGroup unrandomizedGroup={unrandomizedGroup} />
      </main>
      <img src={giraffeLogo} id='giraffe-logo' />
    </>
  );
}

export default App;
