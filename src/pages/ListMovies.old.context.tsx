import { Link } from "react-router-dom";
import { useMovie } from "../contexts/MoviesContextProvider";

const ListMovies = () => {
  const { movies } = useMovie();

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
