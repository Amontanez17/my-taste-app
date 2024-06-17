import { useEffect } from "react";
import axios from "axios";

const FAV_URL = "http://localhost:5005/favorites?_expand=movie";

function Favorites({ setFavorites }) {
  async function getAllFavorites() {
    try {
      const response = await axios.get(FAV_URL);

      setFavorites(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(favorites);
  useEffect(() => {
    getAllFavorites();
  }, []);

  return (
    <div>
      {" "}
      <div>
        <h2>Favorites</h2>
        <ul>
          {favorites.map((fav) => (
            <li key={fav.id}>
              {fav.movie.title} - {fav.movie.vote_average}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Favorites;
