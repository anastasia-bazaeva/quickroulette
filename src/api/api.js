import { randomMovie } from "utils/utils";
import { API_KEY, API_URL } from "./config";

const checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return res.json().then((err) => {
      return Promise.reject(err);
    });
  };

  export const getMovie = (movie) => {
    return fetch(`${API_URL}/?i=tt${movie}&apikey=${API_KEY}`, {
      method: "GET",
    }).then(checkResponse);
  };

  export const getRandom = async() => {
    let movie = randomMovie();
    try {
        const res = await getMovie(movie);
        return res;
    } 
    catch (e) {
        if(e.Error === "Incorrect IMDb ID.") {
          getRandom();
        } else {
            console.log(e);
        }
    }
  }