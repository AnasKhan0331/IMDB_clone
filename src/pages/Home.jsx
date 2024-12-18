import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link } from "react-router-dom";
import "./home.css";
import MovieList from "./movieList";
const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=a1bfdfca1734b3c518374f4afe9513d3&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
      >
        {popularMovies?.map((movie, index) => (
          <Link
            style={{ textDecoration: "none", color: "#fff" }}
            to={`/movie/${movie.id}`}
          >
            <div className="posterImage">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt=""
              />
            </div>
            <div className="posterImage_overlay">
              <div className="posterImage_title">
                {movie ? movie?.title : ""}
              </div>
              <div className="posterImage_runtime">
                {movie ? movie?.release_date : ""}
                <span className="posterImage_rating">
                  {movie ? movie?.vote_average : ""}
                  <i className="fa fa-star" />
                </span>
              </div>
              <div className="posterImage_description">
                {movie ? movie?.overview : ""}
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
      <MovieList />
    </div>
  );
};

export default Home;
