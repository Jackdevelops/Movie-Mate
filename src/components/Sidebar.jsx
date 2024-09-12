import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <img src="/assets/images/movie_mate-logo.png" alt="Movie Mate" />
      </div>
      <button
        className="sidebar-btn"
        data-bg="url('https://via.placeholder.com/400')"
        onClick={() => handleNavigation("/")}
      >
        Home
      </button>
      <button
        className="sidebar-btn"
        data-bg="url('https://via.placeholder.com/400')"
        onClick={() => handleNavigation("/movies")}
      >
        Movies
      </button>
      <button
        className="sidebar-btn"
        data-bg="url('https://via.placeholder.com/400')"
        onClick={() => handleNavigation("/series")}
      >
        Series
      </button>

      <button
        className="sidebar-btn"
        data-bg="url('https://via.placeholder.com/400')"
        onClick={() => handleNavigation("/settings")}
      >
        Settings
      </button>
    </div>
  );
};

export default Sidebar;
