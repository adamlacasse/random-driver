import { Link } from "react-router-dom";

import steeringWheel from "../../img/steering-wheel.jpeg";
import huddle from "../../img/huddle.jpg";

import "./style.css";

export default () => {
  return (
    <section id="chooser-section">
      <Link to="/random-driver/driver">
        <div className="driver-section">
          <h2 className="chooser-heading">Choose a Random Driver</h2>
          <img
            src={steeringWheel}
            alt="Car steering wheel"
            className="chooser-img"
          />
        </div>
      </Link>
      <Link to="/random-driver/group">
        <div className="randomizer-section">
          <h2 className="chooser-heading">Randomize a Group</h2>
          <img src={huddle} alt="huddle" className="chooser-img" />
        </div>
      </Link>
    </section>
  );
};
