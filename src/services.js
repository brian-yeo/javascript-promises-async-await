//add services files

//create exported function called fetchWithTimeout(delay)
export function fetchWithTimeout(delay) {
  //add promise
  return new Promise((resolve) => setTimeout(resolve, delay));
}
