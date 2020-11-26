import React from 'react';
import StarRating from './star';

const MovieCard = (props) => {
    return (
        <>
      <div  className="movie-card">
        <h3>{props.movie.title}</h3>
        <h2>Movie description</h2><p>{props.movie.description}</p>
        <img src={props.movie.posterUrl} alt=""/>
        <h3> <StarRating value={props.movie.rate}/></h3>

        </div>
        <br/>
        </>
          
    
    );
  };
  
  export default MovieCard;