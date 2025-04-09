import React from 'react'
import { CiHeart } from "react-icons/ci";
const MovieCard = ({movie}) => {
    function favouritemovie(){
        alert("Button clicked")
    }
   
  return (
    <div className="movie-card">
        
        <div className="movie-poster">
                <img src={movie.url} alt="" />
                <div className="movie-overlay">
                    <button className="favourite-btn" onClick={favouritemovie}><CiHeart/> </button>
                </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
      
    </div>
  )
}

export default MovieCard
