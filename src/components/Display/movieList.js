import React from "react";
import MovieCard from "./movieCard";
//import "./movieDisplay.css";

const MovieList =({movies,searchName})=> {
    return (
        <div>
{
    movies.filter((e) => e.name.includes(searchName.toLowerCase().trim()))
    .map((e) => <MovieCard movie={e}/>)
}
        </div>
    )
}

export default MovieList;