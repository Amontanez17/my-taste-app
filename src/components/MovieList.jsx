import { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import "./MovieList.css";
import MovieCard from "./MovieCard";
import { useContext } from "react";
import { FavoritesContext } from "./FavoritesContext";
const API_URL = "https://json-server-backend-r2qj.onrender.com";

function MovieList() {
  const [movies, setMovies] = useState(null);
  const { getAllFavorites, favorites, addToFav, deleteFromFav, loading } =
    useContext(FavoritesContext);
  const [page, setPage] = useState(1);
  const moviesPerPage = 20;
  const [search, setSearch] = useState("");

  // async function toggleLike(movieId) {
  //   if (favorites.includes(movieId)) {
  //     const updateFavorites = favorites.filter((id) => id !== movieId);
  //     setFavorites(updateFavorites);
  //   }

  async function getAllMovies() {
    try {
      const response = await axios.get(
        `${API_URL}/movies?_limit=${moviesPerPage}&_page=${page}`
      );
      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSearch() {
    try {
      const response = await axios.get(
        `${API_URL}/movies?_limit=${moviesPerPage}&original_title_like=${search}`
      );
      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllMovies();
    console.log(movies);
  }, [page]);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <>
      <div className="search-cont">
        <input
          className="search-bar"
          type="search"
          placeholder="search for a movie"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />{" "}
        <button className="search-button" onClick={handleSearch}>
          search
        </button>
      </div>
      <div className="movie-list-page">
        {movies &&
          movies.map((movie) => {
            return <MovieCard movie={movie} key={movie.id} />;
          })}
      </div>
      <div className="page-nav-cont">
        <button onClick={handlePrevPage}>Back</button>
        <button onClick={handleNextPage}>Next Page</button>
      </div>
    </>
  );
}
export default MovieList;
