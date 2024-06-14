import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const URL = "http://localhost:5005/movies?_limit=50&_start=50";

function MovieList() {
  const [movies, setMovies] = useState([]);

  async function getAllMovies() {
    try {
      const response = await axios.get(URL);
      setMovies(response.date);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllMovies();
  }, []);

  return <div>MovieList</div>;
}

export default MovieList;
