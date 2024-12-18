import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "./card/Card";
import "./movieList.css";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]); // State to hold the list of movies
  const { type } = useParams(); // Get the "type" parameter from the URL

  useEffect(() => {
    getData(); // Fetch data on initial render
  }, []);

  useEffect(() => {
    getData(); // Fetch data whenever the "type" changes
  }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=a1bfdfca1734b3c518374f4afe9513d3&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results); // Log the results to confirm the API response
        setMovieList(data.results); // Update the state with fetched movies
      })
      .catch((error) => console.error("Error fetching movies:", error)); // Handle errors gracefully
  };

  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list__cards">
        {movieList.map((movie) => (
          <Cards key={movie.id} movie={movie} /> // Add a "key" prop for React's reconciliation
        ))}
      </div>
    </div>
  );
};

export default MovieList;
