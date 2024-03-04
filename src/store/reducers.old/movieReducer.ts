import { ADD_MOVIE, SET_MOVIES } from "../actions.old/movieActions";

export type Movie = {
  _id: number;
  title: string;
  poster_path: string;
  release_date: string;
  rating: number;
  overview: string;
};

type MovieState = {
  movies: Movie[];
};

const initialState: MovieState = {
  movies: [],
};

type Action = {
  type: string;
  payload: Movie[] | Movie;
};

const movieReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_MOVIES:
      if (!Array.isArray(action.payload)) return state;
      return {
        movies: action.payload,
      };
    case ADD_MOVIE:
      if (Array.isArray(action.payload)) return state;
      return {
        movies: [...state.movies, action.payload],
      };
    default:
      return state;
  }
};

export default movieReducer;
