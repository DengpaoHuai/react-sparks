import { Movie } from "../reducers.old/movieReducer";

export const SET_MOVIES = "SET_MOVIES";
export const ADD_MOVIE = "ADD_MOVIE";
export const setMovies = () => {
  fetch("https://crudcrud.com/api/e6df3548c2bd4e0d925c9d788f20a0c5/movies")
    .then((res) => res.json())
    .then((data) => {
      return {
        type: SET_MOVIES,
        payload: data,
      };
    });
};

export const addMovie = (movie: Movie) => {
  return {
    type: ADD_MOVIE,
    payload: movie,
  };
};
