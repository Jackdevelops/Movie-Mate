import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./App.css"; // Make sure this path is correct

const API_URL = "http://www.omdbapi.com?apikey=30c331fd";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(`${API_URL}&i=${id}`);
      const data = await response.json();
      setMovie(data);
    };
    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return (
      <div className="empty">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="movie-detail">
      <div className="movie-poster">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>
      <div className="movie-info">
        <h1>{movie.Title}</h1>
        <p>
          <strong>Year:</strong> {movie.Year}
        </p>
        <p>
          <strong>Genre:</strong> {movie.Genre}
        </p>
        <p>
          <strong>Plot:</strong> {movie.Plot}
        </p>
        <p>
          <strong>Director:</strong> {movie.Director}
        </p>
        <p>
          <strong>Actors:</strong> {movie.Actors}
        </p>
        <p>
          <strong>IMDB Rating:</strong> {movie.imdbRating}
        </p>
      </div>
    </div>
  );
};

export default MovieDetail;
