//index.js is the entry pt to the application

//import movie data
const movies = require("./data/movies.json");

//import fetchWithTimeOut() from ./services
import { fetchWithTimeout } from "./services";

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
