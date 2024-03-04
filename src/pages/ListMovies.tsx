import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { StoreType, useCustomDispatch } from "../store/store";
import { useEffect } from "react";
import { fetchMovies } from "../store/asyncThunks/MoviesThunk";

const ListMovies = () => {
  const { movies } = useSelector((state: StoreType) => state.movies);
  const dispatch = useCustomDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <div>
      <h1>List Movies</h1>
      <Link to="/create">Create Movie</Link>
      {movies?.map((movie) => (
        <div key={movie._id}>
          <h2>{movie.title}</h2>
          <p>Rating: {movie.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default ListMovies;
