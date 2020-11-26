import React from "react";
import MovieCard from "./movieCard";

const MovieList = (props) => {
  return (
    <div className="movie-list">
      {(props.input === "" && props.rate == null
        ? props.MovieList
        : props.MovieList.filter((el) =>
            props.input
              ? el.title.toUpperCase().includes(props.input.toUpperCase())
              : el.rate >= props.rate
          )
      ).map((el) => (
        <MovieCard key={el.id} movie={el} />
      ))}
    </div>
  );
};

export default MovieList;
