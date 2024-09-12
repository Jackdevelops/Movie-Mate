import React, { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard"; // Reusing MovieCard component
import { Link } from "react-router-dom";
import SearchBar from "./components/SearchBar";

const API_URL = "http://www.omdbapi.com?apikey=30c331fd";

const Series = () => {
  const [series, setSeries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Function to search series using the OMDB API
  const searchSeries = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}&type=series`);
    const data = await response.json();
    setSeries(data.Search || []);
  };

  // Effect to trigger the search when the component mounts
  useEffect(() => {
    searchSeries("disney");
  }, []);

  return (
    <div className="series-only-page">
      <div className="movies-section">
        <img src="/assets/images/movie_mate-series.png" alt="Series Mate" />
        <h1>Series</h1>
      </div>
      <div className="search-bar-container">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          searchContent={searchSeries}
          isMoviesOnly={false} // Set this to false since we're focusing on series
        />
      </div>
      <div className="container">
        {series.length > 0 ? (
          series.map((serie) => (
            <Link to={`/movie/${serie.imdbID}`} key={serie.imdbID}>
              <MovieCard movie={serie} /> {/* Reusing MovieCard component */}
            </Link>
          ))
        ) : (
          <div className="empty">
            <h2>No Series Found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Series;
