import "../components/MovieList.css";
import { useContext } from "react";
import { FavoritesContext } from "./FavoritesContext";

import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const { addToFav, deleteFromFav, loading, favorites } =
    useContext(FavoritesContext);

  if (!movie) {
    return <p>Loading</p>;
  }
  const yearOfRelease = movie.release_date.slice(0, 4);

  const isFav = favorites.find((m) => m.movieId === movie.id);
  console.log(favorites, movie);
  return (
    <div className="movie-list-page">
      <div className="movie-card" key={movie.id}>
        <div className="card-body">
          <img
            src={`https://images.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={"image of" + movie.title}
            loading="lazy"
          />
          <Link to={`/movies/${movie.id}`}>
            <h4 className="card-heading">{movie.title}</h4>
          </Link>
          <p className="release-year">{yearOfRelease}</p>
          {/* <p className="card-heading">Score:</p> */}
          <p>⭐ {Math.round(movie.vote_average * 100) / 100}</p>
          <details>
            <summary className="card-heading">Overview</summary>
            <p className="card-text">{movie.overview}</p>
          </details>
          <button
            className="like-button"
            onClick={() =>
              isFav ? deleteFromFav(isFav.id) : addToFav(movie.id)
            }
            disabled={loading}
          >
            {loading
              ? "⏳ Loading"
              : isFav
              ? "💔 Remove"
              : "🤍 Add To Favorites"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
