// import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Favorites from "./pages/Favorites";
import Curate from "./pages/Curate";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/curate" element={<Curate />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
