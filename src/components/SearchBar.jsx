import React from "react";

const SearchBar = ({
  searchTerm,
  setSearchTerm,
  searchContent,
  isMoviesOnly,
}) => {
  return (
    <div className="search">
      <input
        placeholder={
          isMoviesOnly ? "Search for Movies" : "Search for Movies or Series"
        }
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <img
        src="/assets/images/movie_mate-search.png"
        alt="search"
        onClick={() =>
          searchContent(searchTerm, isMoviesOnly ? "movie" : "both")
        }
      />
    </div>
  );
};

export default SearchBar;
