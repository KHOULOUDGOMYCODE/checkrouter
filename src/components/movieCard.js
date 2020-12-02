import React from 'react';
import StarRating from './star';
import {Link} from 'react-router-dom'

const MovieCard = (props) => {
  return(
          <>
        
      <div  className="movie-card">
      <h2>{props.movie.title} </h2>
        <img src={props.movie.posterUrl} alt=""/>
        <div className='description'>
      <Link to={{pathname:`/desc/${props.movie.title}`, state:props.movie.description}}>Read about the movie</Link></div>
      <Link to={{pathname:`/trailer/${props.movie.title}`,  state:props.movie.trailer }}>See the trailer</Link>
    <div className='stars'> <StarRating value={props.movie.rate}/></div>
        
    </div>
        </>
    
    );
  };
  
  export default MovieCard;