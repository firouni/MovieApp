import React, {useState} from 'react';
import './App.css';
import {moviesData} from './movieData';
import AddMovie from './components/Add/addMovie';
import MovieList from './components/Display/movieList';
import SearchBar from './components/Search';


function App() {
console.log('moviesData', moviesData)
  const [movies,setMovies]=useState(moviesData)
  //add element function
  const Addmoviehandler=(newMovie)=>{
    setMovies([...movies,newMovie])
  }
  //search bar function
  const [searchName,setSearchName]=useState('')

  return (
    <div className="App">
      <h1> Movie App Name</h1>
      <MovieList movies={movies} searchName={searchName}/>
      <AddMovie Addmoviehandler={Addmoviehandler}/>
      <SearchBar setSearchName={setSearchName}/>
    </div>
  );
}

export default App;
