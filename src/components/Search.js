import React from "react";
import Rate from "./Rate";

const SearchBar =({setSearchName,ratingSearch,setRatingSearch})=> {
    return (
        <div>
            <input type="text" placeholder="search" onChange={(e) => setSearchName(e.target.value)}/>
            <Rate ratingSearch={ratingSearch} setRatingSearch={setRatingSearch}/>
        </div>
    )
}

export default SearchBar;