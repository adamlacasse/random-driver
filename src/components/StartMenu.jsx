import { useState } from "react";
import { List, ListItem, Divider } from "react95";
import resumeIcon from "../img/resume.png";
import pcIcon from "../img/pc.ico";
import folderWithTools from "../img/folder_tools.png";
import globeIcon from "../img/globe.png";

import "./StartMenu.scss";

const StartMenu = (props) => {
  const [showBiographyPanel, setShowBiographyPanel] = useState(false);
  const [showExperiencePanel, setShowExperiencePanel] = useState(false);
  const [showProjectsPanel, setShowProjectsPanel] = useState(false);

  return (
    <section className="start-menu">
      <List>
        <div className="start-menu-contents">
          <div className="windows95">
            Windows<span>95</span>
          </div>
          <div className="list-item-container">
          <ListItem
              onMouseEnter={() => console.log('fix me')}
              onMouseLeave={() => console.log('fix me')}   
            >
              <img src={folderWithTools} alt="folder with tools" />
              <span>Enter Group Members</span>
              <div className="arrow-right" />
            </ListItem>
            <ListItem 
              onMouseEnter={() => console.log('fix me')}
              onMouseLeave={() => console.log('fix me')}
            >
                <img src={globeIcon} alt="globe icon" />
                <span>Pick a Random Driver</span>
                <div className="arrow-right" />
            </ListItem>
            <ListItem
                onMouseEnter={() => console.log('fix me')}
                onMouseLeave={() => console.log('fix me')}   
            >
              <img src={resumeIcon} alt="resume icon" />
              <span>Randomize the Group</span>
              <div className="arrow-right" />
            </ListItem>

            <Divider className="divider" />

            <ListItem onClick={props.toggleStartMenuLoader}>
              <img src={pcIcon} alt="PC icon" />
              <span>{props.showStartMenuLoader ? 'End Joke' : 'Restart'}</span>
            </ListItem>
          </div>
        </div>
      </List>


      {/* <BiographyPanel
        showBiographyPanel={showBiographyPanel} 
        setShowBiographyPanel={setShowBiographyPanel}
        displayedWindows={props.displayedWindows}
        setDisplayedWindows={props.setDisplayedWindows}
        setStartMenuOpen={props.setStartMenuOpen}
      />
      <ExperiencePanel
        showExperiencePanel={showExperiencePanel}
        setshowExperiencePanel={setShowExperiencePanel}
        displayedWindows={props.displayedWindows}
        setDisplayedWindows={props.setDisplayedWindows}
        setStartMenuOpen={props.setStartMenuOpen}
      />
      <ProjectsPanel
        showProjectsPanel={showProjectsPanel}
        setShowProjectsPanel={setShowProjectsPanel}
        displayedWindows={props.displayedWindows}
        setDisplayedWindows={props.setDisplayedWindows}
        setStartMenuOpen={props.setStartMenuOpen}
      /> */}
    </section>
  );
};

export default StartMenu;
