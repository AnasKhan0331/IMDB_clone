import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/header";
import Home from "./pages/Home";
import MovieList from "./pages/movieList";
import MovieDetails from "./pages/MovieDetails";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/movies/:type" element={<MovieList />} />
          <Route path="*" element={<h1>Error Page</h1>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
