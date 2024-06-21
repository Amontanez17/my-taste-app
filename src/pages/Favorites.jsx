import { useContext, useEffect, useState } from "react";
import { FavoritesContext } from "../components/FavoritesContext";
import MovieCard from "../components/MovieCard";
import "../pages/Favorites.css";
import axios from "axios";
import "../components/MovieList.css";
import Curate from "./Curate";
import { Link } from "react-router-dom";
// import "../pages/Favorites.css";

function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  // function handleSelect(title) {
  //   const found = selectedMovies.find((movieTitle) => movieTitle === title);
  //   if (found) {
  //     setSelectedMovies(
  //       selectedMovies.filter((movieTitle) => movieTitle !== title)
  //     );
  //   } else {
  //     setSelectedMovies([...selectedMovies, title]);
  //   }
  // }
  // console.log(selectedMovies);

  return (
    <>
      <div className="favorites-text-cont">
        <h2 className="favorites-heading">Your Favorites</h2>
        <p className="favorites-body-text">
          Sort through your favorites and finalize your selection before getting
          your personalized recommendations ✨
        </p>
      </div>
      {/* <select name="" id="" multiple>
        {favorites &&
        favorites.length &&
        favorites.map((fav) => (
          <option value={fav.movie.title}>{fav.movie.title}</option>
          ))}
          </select> */}

      {/* <div>
        {favorites &&
        favorites.length > 0 &&
        favorites.map(({ movie }) => {
          const selected = selectedMovies.find(
            (movieTitle) => movieTitle === movie.title
            );
            return (
              <div
              onClick={() => handleSelect(movie.title)}
              style={{
                cursor: "pointer",
                padding: "1rem",
                border: "1px solid white",
                boxShadow: selected ? "0 0 4px 8px white" : "",
                }}
                >
                <img src={movie.image} alt="" height={100} />
                <p>{movie.title}</p>
                {console.log(movie.title)}
                </div>
                );
                })}
                </div> */}

      <div className="movie-list-page">
        {favorites && favorites.length > 0 ? (
          favorites.map((fav) => <MovieCard key={fav.id} movie={fav.movie} />)
        ) : (
          <div className="no-fave-screen" fontWeight="300px">
            {" "}
            <img src="./spongebob.gif" alt="" />
            <h5>You haven't added any favorite movies yet!</h5>
          </div>
        )}
      </div>
      <div class="next-btn-container">
        <Link to={"/curate"}>
          <button className="next-btn">Next</button>
        </Link>
      </div>
    </>
  );
}

export default Favorites;
