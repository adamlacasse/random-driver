import { useState } from "react";
import GroupEntry from "../groupEntry";

import "./style.css";

export default (props) => {
  const { drivers } = props;
  const [randomDriver, setRandomDriver] = useState(null);

  const handleRandomDriverRequest = () => {
    const filteredDrivers = drivers.filter((driver) => driver !== randomDriver);
    setRandomDriver(
      filteredDrivers[Math.floor(Math.random() * filteredDrivers.length)]
    );
  };

  return (
    <div className="container driver">
      <h2>Find a random driver</h2>
      <GroupEntry {...props} />
      {drivers.length > 0 && (
        <>
          <h3 className="results-header">Potential Drivers</h3>
          <ol className="results-list">
            {drivers.map((driver, index) => (
              <li key={driver + index}>{driver}</li>
            ))}
          </ol>
          {!randomDriver && (
            <button className="btn-primary" onClick={handleRandomDriverRequest}>
              Find the Next Driver!
            </button>
          )}
          {randomDriver && (
            <>
              <h2 className="driver-header">The next driver is <span className="driver-name">{randomDriver}</span>!</h2>
              <button
                className="btn-secondary"
                onClick={handleRandomDriverRequest}
              >
                Get Another Driver
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
};
