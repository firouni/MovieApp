import React from "react";

const Rate =({rating})=> {
    const arrStar = [1, 2, 3, 4, 5];
    return (
        <div className="rateContainer">
            {arrStar.map((el) => 
            el <= rating ? <i class="fa-solid fa-star"></i> : <i class="fa-light fa-star"></i>
            )}
        </div>
    )

}

export default Rate;