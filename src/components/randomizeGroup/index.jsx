import { useState } from "react";
import GroupEntry from "../groupEntry";
import GroupMember from "../randomizedMember";
import UnrandomizedMember from "../unrandomizedMember";

import "./style.css";

export default (props) => {
  const { drivers, setDrivers } = props;
  const [randomizedGroup, setRandomizedGroup] = useState([]);

  return (
    <div className="container driver">
      <h2>Randomize a Group</h2>
      <GroupEntry {...props} />
      {drivers.length > 0 && (
        <>
          <h3
            className={`results-header ${
              randomizedGroup.length > 0 ? "grey" : ""
            }`}
          >
            Un-randomized Group
          </h3>
          <ol
            className={`results-list ${
              randomizedGroup.length > 0 ? "grey" : ""
            }`}
          >
            {drivers.map(member => (
              <UnrandomizedMember
                key={member} 
                member={member} 
                drivers={drivers} 
                setDrivers={setDrivers} 
                randomizedGroup={randomizedGroup}
                setRandomizedGroup={setRandomizedGroup}
              />
            ))}
          </ol>
          <button
            className={
              randomizedGroup.length > 0 ? "btn-secondary" : "btn-primary"
            }
            onClick={() =>
              setRandomizedGroup([...drivers].sort(() => Math.random() - 0.5))
            }
          >
            Randomize the Group
            {randomizedGroup.length > 0 && " Again"}
          </button>
          {randomizedGroup.length > 0 && (
            <>
              <h2 className="rando-group-header">
                Let's go in this order today!
              </h2>
              <ol>
                {randomizedGroup.map(member => (
                  <GroupMember key={member} member={member} />
                ))}
              </ol>
            </>
          )}
        </>
      )}
    </div>
  );
};
