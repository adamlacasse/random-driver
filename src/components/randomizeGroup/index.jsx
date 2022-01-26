import { useState } from "react";
import GroupEntry from "../groupEntry";

import "./style.css";

export default (props) => {
  const { drivers } = props;
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
            {drivers.map((driver, index) => (
              <li key={driver + index}>{driver}</li>
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
                {randomizedGroup.map((member, index) => (
                  <li key={index + member}>
                    {member}
                    <button
                      className="remove-btn tooltip"
                      onClick={() =>
                        setRandomizedGroup(
                          randomizedGroup.filter(originalMember => originalMember !== member)
                        )
                      }
                    >
                      <span>x</span>
                      <span className="tooltiptext">Remove this member</span>
                    </button>
                  </li>
                ))}
              </ol>
            </>
          )}
        </>
      )}
    </div>
  );
};
