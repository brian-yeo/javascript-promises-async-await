//index.js is the entry pt to the application
//import fetchWithTimeOut() from ./services
import { fetchWithTimeOut, fetchBooks, fetchMovies } from "./services";

/*
//import movie data
const movies = require("./data/movies.json");

//declare fetchMovies()
export function fetchMovies() {
  //create a resolve function called resolveFunction
  const resolveFunction = () => movies;

  //call and return fetchWithTimeout
  return fetchWithTimeout(1000).then(resolveFunction);
}

//execute fetchMovies() Promise
const moviePromise = fetchMovies();

moviePromise.then((results) => {
  console.log(results);
});
*/

function getBooksAndMovies() {
  return Promise.all([fetchBooks(), fetchMovies()])
    .then(([books, movies]) => ({
      books,
      movies,
    }))
    .catch((error) => console.log("Error fetching books and movies", error));
}

const getBooksAndMoviesPromise = getBooksAndMovies();

//log results of getBooksAndMovies()
getBooksAndMoviesPromise.then((results) => console.log("getBooksAndMoviesPromise", results));

//fetch books OR movies with Promise.race()
function getBooksOrMovies() {
  return Promise.race([fetchBooks(), fetchMovies()])
    .then((results) => results)
    .catch((error) => console.log("Error waiting for the promise race", error));
}

const getBooksOrMoviesPromise = getBooksAndMovies();

//log results of getBooksOrMovies()
getBooksOrMoviesPromise.then((results) => console.log("getBooksOrMoviesPromise", results));
