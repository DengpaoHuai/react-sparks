import { Reducer, useEffect, useReducer, useState } from "react";
import "./App.css";

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

type PlanetAction = {
  type: "SET_PLANETS";
  payload: PlanetResponse;
};

const planetsReducer = (state: PlanetResponse, action: PlanetAction) => {
  switch (action.type) {
    case "SET_PLANETS":
      return {
        ...state,
        results: action.payload.results,
        count: action.payload.count,
        next: action.payload.next,
        previous: action.payload.previous,
      };

    default:
      return {
        result: [],
        count: 0,
        next: null,
        previous: null,
      };
  }
};

function App() {
  const [state, dispatch] = useReducer<Reducer<PlanetResponse, PlanetAction>>(
    planetsReducer,
    {} as PlanetResponse
  );

  const fetchPlanets = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: "SET_PLANETS", payload: data });
  };

  useEffect(() => {
    fetchPlanets("https://swapi.dev/api/planets/");
  }, []);

  return (
    <>
      {state.results.map((planet: Planet) => (
        <div key={planet.name}>
          <h2>{planet.name}</h2>
          <p>Population: {planet.population}</p>
        </div>
      ))}
      <button
        onClick={() => {
          fetchPlanets(state.next);
        }}
      >
        Next page
      </button>
      <p>
        Page {state.currentPage} / {Math.ceil(state.count / 10)}
      </p>
      <button
        onClick={() => {
          fetchPlanets(state.previous);
        }}
      >
        Previous page
      </button>
    </>
  );
}

export default App;
