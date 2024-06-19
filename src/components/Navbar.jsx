import "./Navbar.css";
import { Link } from "react-router-dom";
// import Favorites from "../pages/Favorites";

function Navbar() {
  return (
    <header className="Header" id="Header">
      <nav className="Navbar">
        <ul>
          <li>
            <Link to={"/"}>
              {" "}
              <img
                className="webLogo"
                src="./public/movietunes-logo-white@2x.png"
              ></img>
            </Link>
          </li>
        </ul>

        <div className="nav-link-container">
          <ul>
            <Link to={"/"}>
              <li>
                <img
                  className="icon"
                  src="./public/icons/fluent--home-28-filled.svg"
                ></img>
                Home
              </li>
            </Link>
            <Link to={"/favorites"}>
              <li>
                <img
                  className="icon"
                  src="./public/icons/material-symbols-light--favorite-rounded.svg"
                ></img>
                Favorites
              </li>{" "}
            </Link>
            <Link to={"/curate"}>
              <li>
                <img
                  className="icon"
                  src="./public/icons/mingcute--music-3-line.svg"
                ></img>
                Curate
              </li>
            </Link>

            <Link to={"/about"}>
              <li>
                <img
                  className="icon"
                  src="./public/icons/mdi--smiley-cool.svg"
                ></img>
                About
              </li>
            </Link>
            {/* <Link to={"/search"}>
              <li>
                <img
                  className="icon"
                  src="./public/icons/search-icon.svg"
                ></img>
              </li>
            </Link> */}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
