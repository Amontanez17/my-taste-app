import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FavoritesProvider } from "./components/FavoritesContext.jsx";
import { BrowserRouter as Router } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById("root"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </Router>
  </React.StrictMode>
);
