import { useState } from 'react';
import giraffeLogo from './images/giraffeLogo.png';
import EnterTeam from './components/enterTeam/EnterTeam';
import RandomizedGroup from './components/randomizedGroup/RandomizedGroup';

import './App.scss';

function App() {
  const [unrandomizedGroup, setUnrandomizedGroup] = useState([]);
  const [showEnterTeam, setShowEnterTeam] = useState(true);

  return (
    <>
      <h1>Giraffe Randomizer</h1>
      <main>
        {showEnterTeam && <EnterTeam unrandomizedGroup={unrandomizedGroup} setUnrandomizedGroup={setUnrandomizedGroup} />}
        <RandomizedGroup unrandomizedGroup={unrandomizedGroup} setShowEnterTeam={setShowEnterTeam} />
      </main>
      <img src={giraffeLogo} id='giraffe-logo' />
    </>
  );
}

export default App;
