import { Link } from "react-router-dom";
import giraffeLogo from "../../img/giraffeLogo.png";

export default ({ setDrivers }) => {
  return (
    <header>
      <div className="container">
        <Link to="/random-driver">
          <img
            src={giraffeLogo}
            alt="I'm a Giraffe! Logo"
            className="giraffe-logo"
            onClick={() => setDrivers([])}
          />
        </Link>
        <h1>Giraffe Randomizer</h1>
      </div>
    </header>
  );
};
