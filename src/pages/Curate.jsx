import { useContext, useEffect, useState } from "react";
import "./Favorites";
import "./Favorites.css";
import { FavoritesContext } from "../components/FavoritesContext";
import axios from "axios";
import { KEY } from "../consts";
import "./Curate.css";

const baseUrl = "https://tastedive-proxy.onrender.com";

function Curate() {
  const [selectedMovies, setSelectedMovies] = useState([]);

  const [recommendation, setRecommendation] = useState([]);
  const [category, setCategory] = useState("-1");
  const [loading, setLoading] = useState(false);
  const { favorites } = useContext(FavoritesContext);

  function handleSelect(title) {
    const found = selectedMovies.find((movieTitle) => movieTitle === title);
    if (found) {
      setSelectedMovies(
        selectedMovies.filter((movieTitle) => movieTitle !== title)
      );
    } else {
      setSelectedMovies([...selectedMovies, title]);
    }
  }

  //   ?q=movie:shawshank-redemption,movie:titanic,movie:hurt-locker&type=movie&k=1029087-mytastea-3EE5ED6D
  /**
   * {
   *    q: [movie:shawshank-redemption,movie:titanic,movie:hurt-locker],
   *    type: "movie",
   *    k: 1029087-mytastea-3EE5ED6D
   * }
   */
  // https://tastedive.com/api/similar

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    if ("-1" === category) {
      return;
    }
    try {
      let url = `${baseUrl}?k=${KEY}&q=`;
      const mappedMovies = selectedMovies.map((movie) => "movie:" + movie);
      url += mappedMovies.join(",");
      url += "&type=" + category;

      const response = await axios.get(url);
      console.log(response);
      const recommendation = response.data.similar.results.slice(0, 6);
      setRecommendation(recommendation);
      console.log(recommendation);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="favorites-text-cont">
        <h2 className="favorites-heading">Let us curate for you!</h2>
        <p className="favorites-body-text">
          Finalize your selection before getting your personalized music, book,
          or movie recommendation by pressing curate 🔮
        </p>
        {/* <button>Curate</button> */}
      </div>
      <div className="curate-form-cont">
        <form className="curate-form" onSubmit={handleSubmit}>
          <div>
            <label>
              Category:
              <select
                name="category"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option disabled value="-1">
                  Please select a category
                </option>
                <option value="music">Music</option>
                <option value="movie">Movies</option>
                <option value="podcast">Podcasts</option>
              </select>
              {/* Select movies */}
            </label>
            {favorites &&
              favorites.length > 0 &&
              favorites.map(({ movie }) => {
                const isselected = selectedMovies.some(
                  (selectedMovie) => selectedMovie === movie.title
                );
                return (
                  <div
                    className={`selected-movies-curate ${
                      isselected ? "selected" : ""
                    }`}
                    onClick={() => handleSelect(movie.title)}
                    // style={{
                    //   cursor: "pointer",
                    //   padding: "1rem",
                    //   border: "1px solid white",
                    //   boxShadow: isselected ? "0 0 4px 8px white" : "",
                    // }}
                    key={movie.id}
                  >
                    <img
                      className="selected-movie-img"
                      src={`https://images.tmdb.org/t/p/original${movie.backdrop_path}`}
                      alt=""
                    />
                    <p>{movie.title}</p>
                    {console.log(movie.title)}
                  </div>
                );
              })}
            <div className="button-cont">
              <button className="curate-button" disabled={loading}>
                {loading ? "Loading" : "Curate"}{" "}
                {/* Display 'Loading' when loading state is true */}
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* <div className="rec-text"></div> */}
      <h4 className="rec-heading">Here are your recommendations 🔥</h4>
      <div className="rec-container">
        {recommendation.length > 0 &&
          recommendation.map((rec, index) => (
            <div key={index} className="rec-item">
              <h5>{rec.name}</h5>
              <p>{rec.type}</p>
            </div>
          ))}
      </div>
    </>
  );
}

export default Curate;
