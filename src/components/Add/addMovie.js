import React, {useState} from "react";
import {v4 as uuidv4} from 'uuid';

const AddMovie = ({Addmoviehandler}) => {
    const [name,setName]=useState('')
    const [description,setDescription]=useState('')
    const [date,setDate]=useState('')
    const [type,setType]=useState('')
    const [image,setImage]=useState('')
    const [rating,setRating]=useState(0)

    const AddMovie = () => {
        Addmoviehandler({
            id:uuidv4(),
            name:name,
            description:description,
            date:date,
            type:type,
            image:image,
            rating:rating,
            isDone:false
        })
    }
    return (
        <div>
            <input placeholder="movie name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input placeholder="description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
            <input placeholder="types" value={type} onChange={(e)=>setType(e.target.value)}/>
            <input placeholder="date" value={date} onChange={(e)=>setDate(e.target.value)}/>
            <input placeholder="image" value={image} onChange={(e)=>setImage(e.target.value)}/>
            <input placeholder="rating" value={rating} onChange={(e)=>setRating(e.target.value)}/>
            
            <button onClick={()=>AddMovie()}> Add movie </button>
        </div>
    )
}

export default AddMovie;