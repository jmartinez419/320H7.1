import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
// Import our components
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
import './App.css'

function App() {
  // Constant with your API Key
  const apiKey = "98e3fb1f";

  //state to hold movie data
  const [movie, setMovie] = useState(null);

  //Function to get movies
  const getMovie = async(searchTerm) => {
    //make fetch request and store the response
    try{
    const response = await fetch( `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`);
    //parse json response into a javascript object
    const data = await response.json();
    //set the movie state to the recieved data
    setMovie(data);
    } catch(e){
      console.error(e);
    }
  };

   // this will run on the first render but not on subsquent renders
   useEffect(() =>{
    getMovie("clueless");
  }, []);

  // we pass the getmovie function as a prop called moviesearch
  return (
    <>
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie}/>
    </div>
      
    </>
  );
}

export default App
