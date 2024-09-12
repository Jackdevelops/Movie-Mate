import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Ensure this path is correct

const BottomBar = () => {
  return (
    <div className="bottom-bar">
      <Link to="/" className="bottom-bar-item">
        <img src="/assets/images/movie_mate-home.png" alt="Home" />
      </Link>
      <Link to="/movies" className="bottom-bar-item">
        <img src="/assets/images/movie_mate-movies.png" alt="Movies" />
      </Link>
      <Link to="/series" className="bottom-bar-item">
        <img src="/assets/images/movie_mate-series.png" alt="Series" />
      </Link>
      <Link to="/settings" className="bottom-bar-item">
        <img src="/assets/images/movie_mate-settings.png" alt="Settings" />
      </Link>
    </div>
  );
};

export default BottomBar;
