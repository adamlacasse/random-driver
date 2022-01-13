import { Link } from "react-router-dom";
import giraffeLogo from "../../img/giraffeLogo.png";

export default () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <img
            src={giraffeLogo}
            alt="I'm a Giraffe! Logo"
            className="giraffe-logo"
          />
        </Link>
        <h1>Giraffe Randomizer</h1>
      </div>
    </header>
  );
};
