//add services files

//create exported function called fetchWithTimeout(delay)
export function fetchWithTimeout(delay) {
  //add promise
  return new Promise((resolve) => setTimeout(resolve, delay));
}

export function fetchMovies() {
  //use fetch api to get movies data from movies.json
  return fetch("./data/movies.json")
    .then((response) => response.json())
    .then((movies) => movies)
    .catch((error) => console.log(error));
}

// create another fetch method called fetchBooks
export function fetchBooks() {
  //use fetch api to get movies data from movies.json
  return fetch("./data/books.json")
    .then((response) => response.json())
    .then((books) => books)
    .catch((error) => console.log(error));
}

/** Async fetch functions */
export async function asyncFetchMovies() {
  // add try/catch block
  try {
    const response = await fetch("./data/movies.json");
    const results = await response.json();
    return results;
  } catch (error) {
    console.log(error);
  }
}

export async function asyncFetchBooks() {
  try {
    const response = await fetch("./data/books.json");
    const results = response.json();
    return results;
  } catch (error) {
    console.log(error);
  }
}
