import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPlanets } from "../services/planet.service";
import { Link, useNavigate } from "react-router-dom";
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

  const { data } = useQuery<PlanetResponse>({
    queryKey: ["planets", page],
    queryFn: () => getPlanets(page),
  });

  const navigate = useNavigate();

  const redirectToSecondPage = () => {
    navigate("/second");
  };

  return (
    <>
      <Link to="/second">vers la page</Link>
      <button
        onClick={() => {
          redirectToSecondPage();
        }}
      >
        vers la page
      </button>
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
