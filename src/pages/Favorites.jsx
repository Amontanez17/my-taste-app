import { useContext, useEffect, useState } from "react";
import { FavoritesContext } from "../components/FavoritesContext";
import MovieCard from "../components/MovieCard";
import "../pages/Favorites.css";
import axios from "axios";
import "../components/MovieList.css";
// import "../pages/Favorites.css";

function Favorites() {
  const { favorites } = useContext(FavoritesContext);
  // const [favoriteMovies, setFavoriteMovies] = useState(null);

  // async function getAllFavorites() {
  //   try {
  //     const response = await axios.get(FAV_URL);
  //     setFavoriteMovies(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // console.log(favorites);

  // useEffect(() => {
  //   setFavoriteMovies(favorites.map((fav) => fav.movie));
  // }, [favorites]);

  return (
    <>
      <div>
        <div id="fav-movie-list-page">
          <div className="favorites-text-cont">
            <h2 className="favorites-heading">Your Favorites</h2>
          </div>
          {favorites && favorites.length > 0 ? (
            favorites.map((fav) => <MovieCard key={fav.id} movie={fav.movie} />)
          ) : (
            <div className="no-fave-screen">
              {" "}
              <p>You have no favorite movies yet.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Favorites;
