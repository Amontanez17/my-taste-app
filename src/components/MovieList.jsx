import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5005/movies?_limit=50&_start=50";

function MovieList() {
  const [movies, setMovies] = useState([]);

  async function getAllMovies() {
    try {
      const response = await axios.get(API_URL);
      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <div className="MovieListPage">
      {movies.map((movie) => {
        return (
          <div className="MovieCard card" key={movie.id}>
            <img
              src={`https://images.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt=""
            />
            <Link to={`/movies/${movie.id}`}>
              <h3>{movie.title}</h3>
            </Link>
            <p>{movie.overview}</p>
            {console.log(movie.overview)}
          </div>
        );
      })}
    </div>
  );
}

export default MovieList;
