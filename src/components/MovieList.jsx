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

  // async function toggleLike(movieId) {
  //   if (favorites.includes(movieId)) {
  //     const updateFavorites = favorites.filter((id) => id !== movieId);
  //     setFavorites(updateFavorites);
  //   }

  async function getAllMovies() {
    try {
      const response = await axios.get(API_URL + "/movies?_limit=20&_start=1");
      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  // async function getAllFavorites() {
  //   try {
  //     const response = await axios.get(API_URL + "/favorites");
  //     /**
  //      * [{id: number, movieId: number}]
  //      * [123,542,1346]
  //      */
  //     setFavorites(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  console.log(movies);
  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    movies &&
    movies.map((movie) => {
      return (
        <div id="movie-list-page" key={movie.id}>
          <MovieCard movie={movie} />
        </div>
      );
    })
  );
}
export default MovieList;
