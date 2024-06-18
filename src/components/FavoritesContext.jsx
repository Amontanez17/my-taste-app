import { createContext, useEffect, useState } from "react";
import axios from "axios";
import "../components/MovieList.css";

export const FavoritesContext = createContext();
const API_URL = "https://json-server-backend-r2qj.onrender.com";
let FAV_URL =
  "https://json-server-backend-r2qj.onrender.com/favorites?_expand=movie";

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(null);
  const [loading, setLoading] = useState(false);

  // async function getAllFavorites() {
  //   try {
  //     const response = await axios.get(API_URL + "/favorites");
  //     setFavorites(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  async function addToFav(movieId) {
    try {
      setLoading(true);
      await axios.post(
        "https://json-server-backend-r2qj.onrender.com/favorites",
        { movieId }
      );
      await getAllFavorites();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function deleteFromFav(id) {
    try {
      setLoading(true);
      await axios.delete(
        "https://json-server-backend-r2qj.onrender.com/favorites/" + id
      );
      await getAllFavorites();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function getAllFavorites() {
    try {
      const response = await axios.get(FAV_URL);
      setFavorites(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllFavorites();
  }, []);

  return (
    <FavoritesContext.Provider
      value={{ favorites, getAllFavorites, addToFav, deleteFromFav, loading }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
