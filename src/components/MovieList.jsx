import { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import "./MovieList.css";
import MovieCard from "./MovieCard";

const API_URL = "http://localhost:5005";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);

  // async function toggleLike(movieId) {
  //   if (favorites.includes(movieId)) {
  //     const updateFavorites = favorites.filter((id) => id !== movieId);
  //     setFavorites(updateFavorites);
  //   }

  async function deleteFromFav(id) {
    try {
      setLoading(true);
      await axios.delete("http://localhost:5005/favorites/" + id);
      await getAllFavorites();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function addToFav(movieId) {
    try {
      setLoading(true);
      await axios.post("http://localhost:5005/favorites", { movieId });
      await getAllFavorites();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function getAllMovies() {
    try {
      const response = await axios.get(API_URL + "/movies?_limit=50&_start=1");
      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  async function getAllFavorites() {
    try {
      const response = await axios.get(API_URL + "/favorites");
      /**
       * [{id: number, movieId: number}]
       * [123,542,1346]
       */
      setFavorites(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(favorites);
  useEffect(() => {
    getAllMovies();
    getAllFavorites();
  }, []);

  return (
    <MovieCard
      movies={movies}
      favorites={favorites}
      addToFav={addToFav}
      deleteFromFav={deleteFromFav}
      loading={loading}
    />
  );
}

export default MovieList;
