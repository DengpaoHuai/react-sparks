import { useState } from "react";
import usePaginate from "../hooks/usePaginate";

type Planet = {
  name: string;
  population: string;
};

type Planets = Planet[];

type PlanetResponse = {
  results: Planets;
  count: number;
  next: string | null;
  previous: string | null;
  currentPage?: number;
};

const HomePage = () => {
  const [page, setPage] = useState(1);
  const { data } = usePaginate<PlanetResponse>(
    "https://swapi.dev/api/planets/",
    page
  );
  return (
    <>
      {data?.results.map((planet) => (
        <div key={planet.name}>
          <h2>{planet.name}</h2>
          <p>Population: {planet.population}</p>
        </div>
      ))}
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next page
      </button>

      <button
        onClick={() => {
          setPage(page - 1);
        }}
      >
        Previous page
      </button>
    </>
  );
};

export default HomePage;
