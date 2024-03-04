import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
type Movie = {
  id: string;
  title: string;
  rating: number;
  director: string;
  genre: string;
  releaseDate: string;
};

const ListMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        "https://crudcrud.com/api/e6df3548c2bd4e0d925c9d788f20a0c5/movies"
      );
      const data = await response.json();
      setMovies(data);
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>List Movies</h1>
      <Link to="/create">Create Movie</Link>
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>Rating: {movie.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default ListMovies;
