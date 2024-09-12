import React, { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard";
import { Link } from "react-router-dom";
import SearchBar from "./components/SearchBar";

const API_URL = "http://www.omdbapi.com?apikey=30c331fd";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Function to search movies using the OMDB API
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}&type=movie`);
    const data = await response.json();
    setMovies(data.Search || []);
  };

  // Effect to trigger the search when the component mounts
  useEffect(() => {
    searchMovies("disney");
  }, []);

  return (
    <div className="movies-only-page">
      <div className="movies-section">
        <img src="/assets/images/movie_mate-movies.png" alt="Movie Mate" />
        <h1>Movies</h1>
      </div>
      <div className="search-bar-container">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          searchContent={searchMovies}
          isMoviesOnly={true}
        />
      </div>
      <div className="container">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
              <MovieCard movie={movie} />
            </Link>
          ))
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Movies;
