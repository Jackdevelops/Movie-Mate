import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import MovieCard from "./components/MovieCard";
import MovieDetail from "./MovieDetail";
import Sidebar from "./components/Sidebar";
import BottomBar from "./components/BottomBar";
import Movies from "./Movies";
import Series from "./Series";
import SearchBar from "./components/SearchBar";
import Settings from "./Settings"; // Import the Settings component

const API_URL = "http://www.omdbapi.com?apikey=YOURAPIKEY";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const searchContent = async (title, type) => {
    if (type === "both" || type === "movie") {
      const movieResponse = await fetch(`${API_URL}&s=${title}&type=movie`);
      const movieData = await movieResponse.json();
      setMovies(movieData.Search || []);
    }
    if (type === "both" || type === "series") {
      const seriesResponse = await fetch(`${API_URL}&s=${title}&type=series`);
      const seriesData = await seriesResponse.json();
      setSeries(seriesData.Search || []);
    }
  };

  useEffect(() => {
    searchContent("disney", "both");
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    // Apply dark mode by default
    document.body.classList.add("dark-mode");
  }, []);

  return (
    <Router>
      <div className="app">
        {isMobile ? <BottomBar /> : <Sidebar />}

        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="movies-section">
                  <h1>Browse over 250,000 Movies & Series </h1>
                </div>
                <SearchBar
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  searchContent={searchContent}
                  isMoviesOnly={false}
                />
                <div className="movies-and-series-container">
                  <div className="movies-section">
                    <img
                      src="/assets/images/movie_mate-movies.png"
                      alt="Movie Mate"
                    />
                    <h1>Movies</h1>
                    <div className="container">
                      {movies.length > 0 ? (
                        movies.map((movie) => (
                          <Link
                            to={`/movie/${movie.imdbID}`}
                            key={movie.imdbID}
                          >
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

                  <div className="movies-section">
                    <img
                      src="/assets/images/movie_mate-series.png"
                      alt="Series Mate"
                    />
                    <h1>Series</h1>
                    <div className="container">
                      {series.length > 0 ? (
                        series.map((serie) => (
                          <Link
                            to={`/series/${serie.imdbID}`}
                            key={serie.imdbID}
                          >
                            <MovieCard movie={serie} />
                          </Link>
                        ))
                      ) : (
                        <div className="empty">
                          <h2>No Series Found</h2>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </>
            }
          />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/series/:id" element={<MovieDetail />} />
          <Route path="/settings" element={<Settings />} />{" "}
          {/* Added route for Settings */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
