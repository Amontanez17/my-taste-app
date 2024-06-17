import "../components/MovieList.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function MovieCard({ movies, favorites, addToFav, deleteFromFav, loading }) {
  return (
    <div id="movie-list-page">
      {movies.map((movie) => {
        const isFav = favorites.find((m) => m.movieId === movie.id);
        return (
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
              <p className="card-heading">Audience Score:</p>
              <p>{Math.round(movie.vote_average * 100) / 100}</p>
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
        );
      })}
    </div>
  );
}

export default MovieCard;
