import React from 'react'
import MovieCard from '../Components/MovieCard'
import { BsSearch } from "react-icons/bs";
<BsSearch className="search-icon" />
import styled from 'styled-components';

const Home = () => {
    const movies=[
        {id:1,title:"John wick",relase_date:"12-09-2005"},
        {id:2,title:"Interstaller",relase_date:"12-08-2005"},
        {id:3,title:"Shaktiman",relase_date:"12-09-2005"},
        {id:4,title:"Student of the year",relase_date:"12-09-2005"}
    ]
    const handelsubmit=()=>{

    }
  return (
    <div className="home">
        <form onSubmit={handelsubmit} className="search-forms">
        <Inputbox >
                   <div className="icon">
                   <BsSearch className="search-icon" />
                   </div>
                    <input
                        type="text"
                        placeholder="Search for the movies"
                        className="search-input"
                    />
                </Inputbox>
        </form>
        <div className="movies-grid">
            {movies.map((movie)=>(<MovieCard movie={movie} key={movie.id}/>))}
        </div>
      
    </div>
  )
}

export default Home

const Inputbox = styled.div`
    position: relative;
    display: flex;
    align-items: center;
   
    
    .search-icon {
        position: absolute;
        left: 10px;
        color: #1d1c1c;
        font-size: 1.5rem;
        top:10px
    }

    .search-input {
        padding-left: 35px;
        width: 30%;
        height: 40px;
        border: 1px solid #ccc;
        border-radius: 10px;
        font-size: 1rem;
        background: rgba(255, 255, 255, 0.1);
        border:2px solid black;
        color: #1d1c1c;
    }
`;