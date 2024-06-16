import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="Header" id="Header">
      <nav className="Navbar">
        <p className="serviceName">
          <img
            className="webLogo"
            src="./public/movietunes-logo-white@2x.png"
          ></img>
        </p>
        <div className="nav-link-container">
          <ul>
            <Link to={"/"}>
              <li>
                <img
                  className="dashboardLogo"
                  src="../src/assets/dashboardlogo.svg"
                ></img>
                Home
              </li>
            </Link>
            <Link to={"/"}>
              <li>
                <img
                  className="manageLogo"
                  src="../src/assets/managelogo.svg"
                ></img>
                Favorites
              </li>{" "}
            </Link>
            <Link to={"/about"}>
              <li>
                <img
                  className="aboutLogo"
                  src="../src/assets/aboutlogo.svg"
                ></img>
                About
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
