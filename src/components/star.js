import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = (props) => {
  const [rating, setRating] = useState(props.value);
  return (
    <div className='star'>
      {[...Array(5)].map((el, i) => {
        const ratingValue = i + 1;
        return (
          <span>  
            <FaStar
              className="staar"
              name="rating"
              onClick={() => {
            props.handleRate(ratingValue);
                setRating(ratingValue);
              }}
              onChange={(e) => setRating(e.target.value)}
              color={ratingValue <= rating ? "#ffc107" : " #e4e5e4"}
            />
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
