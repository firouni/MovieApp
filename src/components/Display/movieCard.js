import React from "react";
import {Card} from "react-bootstrap";
import Rate from "../Rate";
//import {moviesData} from "../../movieData";

const MovieCard =({moviesData})=> {
    console.log('moviesData', moviesData)
    return (
        <div className="cardContainer">
            <Card style={{width: "10px"}} >
                <Card.Img src={moviesData.image} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>{moviesData.title}</Card.Title>
                    <Card.Text>{moviesData.description} </Card.Text>
                    <Rate rate={moviesData.rating}/>
                </Card.ImgOverlay>
            </Card>
        </div>
    )
}

export default MovieCard;