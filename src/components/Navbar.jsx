import "./Navbar.css";
import { Link } from "react-router-dom";
// import Favorites from "../pages/Favorites";

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
                <img className="icon" src="./public/icons/home-icon.svg"></img>
                Home
              </li>
            </Link>
            <Link to={"/favorites"}>
              <li>
                <img
                  className="icon"
                  src="./public/icons/favorite-icon.svg"
                ></img>
                Favorites
              </li>{" "}
            </Link>
            <Link to={"/music"}>
              <li>
                <img className="icon" src="./public/icons/music-icon.svg"></img>
                Curate
              </li>
            </Link>

            <Link to={"/about"}>
              <li>
                <img className="icon" src="./public/icons/about-icon.svg"></img>
                About
              </li>
            </Link>
            <Link to={"/search"}>
              <li>
                <img
                  className="icon"
                  src="./public/icons/search-icon.svg"
                ></img>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
