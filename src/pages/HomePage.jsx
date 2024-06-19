import MovieList from "../components/MovieList";
import "./HomePage.css";
import "../components/MovieList.css";

function HomePage() {
  return (
    <>
      <div className="hero">
        <div className="hero-text">
          <h1>Welcome to Movietunes</h1>
          <h3>Curate your taste with us</h3>
          <p>
            Tired of looking for music and not finding the right selection? We
            are here to help you with that. Just select your favorite movies and
            we will recommend music based on your taste in movies{" "}
          </p>
        </div>
        <div className="hero-button-container">
          <button className="hero-button">Try it now</button>
        </div>
      </div>
      <h4 className="home-headline">Pick your favorite films to begin!</h4>

      <MovieList />

      <div className="page-nav-cont">
        {" "}
        <button>Back</button>
        <button>Next Page</button>
      </div>
    </>
  );
}

export default HomePage;
