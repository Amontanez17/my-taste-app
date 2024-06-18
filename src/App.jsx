// import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "./FavoritesContext";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <>
      <FavoritesProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
          <Footer />
        </div>
      </FavoritesProvider>
    </>
  );
}

export default App;
