import MovieList from "../components/MovieList";
import "../App.css";

function HomePage() {
  return (
    <>
      <div className="hero">
        {/* <h1>Welcome!</h1>
        <h3>Curate your taste with us</h3>
        <p>
          Tired of looking for music and not finding the right selection? We are
          here to help you with that!
        </p> */}
        <button>Try it now</button>
      </div>
      <div>
        <MovieList />
      </div>
    </>
  );
}

export default HomePage;
