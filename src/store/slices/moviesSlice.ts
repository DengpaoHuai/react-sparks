import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "../asyncThunks/MoviesThunk";

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
  loading: boolean;
  error: string | null;
};

const initialState: MovieState = {
  movies: [],
  loading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    setMovies: (state, action) => {
      console.log(action.type);
      state.movies = action.payload;
    },
    createMovie: (state, action) => {
      state.movies.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state.movies = action.payload;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });
  },
});

export const { setMovies, createMovie } = moviesSlice.actions;

export default moviesSlice.reducer;
