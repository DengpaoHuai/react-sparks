import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await fetch(
    "https://crudcrud.com/api/e6df3548c2bd4e0d925c9d788f20a0c5/movies"
  );
  const results = await response.json();
  console.log(results);
  return results;
});
