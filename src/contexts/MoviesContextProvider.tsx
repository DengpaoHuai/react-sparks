import { FC, createContext, useContext, useEffect, useState } from "react";

type Movie = {
  _id: string;
  title: string;
  rating: number;
  director: string;
  genre: string;
  releaseDate: string;
};

type MoviesContextType = {
  movies: Movie[];
  setMovies: (movies: Movie[]) => void;
  add_Movie: (data: Movie) => void;
};

export const MoviesContext = createContext<MoviesContextType>(
  {} as MoviesContextType
);

type MoviesContextProviderProps = {
  children: React.ReactNode;
};

export const useMovie = () => useContext(MoviesContext);

const MoviesContextProvider: FC<MoviesContextProviderProps> = ({
  children,
}) => {
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

  const add_Movie = async (data: Movie) => {
    setMovies([...movies, data]);
  };

  return (
    <MoviesContext.Provider value={{ movies, setMovies, add_Movie }}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
