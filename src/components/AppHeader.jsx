import { AppBar, Toolbar, Bar, Button } from "react95";
import windowsLogo from "../img/windows_logo.png";

import "./AppHeader.scss";

const AppHeader = ({ startMenuOpen, setStartMenuOpen }) => (
  <AppBar id="app-header">
    <Toolbar>
      <Bar size={35}>
        <div id="app-header-content">
          <Button onClick={() => setStartMenuOpen(!startMenuOpen)}>
            <img src={windowsLogo} alt="Windows logo" />
            <span>Start</span>
          </Button>
          <h1>Giraffe Drivers</h1>
        </div>
      </Bar>
    </Toolbar>
  </AppBar>
);

export default AppHeader;
