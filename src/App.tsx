import { FC } from "react";
import HomePage from "./pages/HomePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import MoviesContextProvider from "./contexts/MoviesContextProvider";

const App: FC = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 60,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <MoviesContextProvider>
        <RouterProvider router={router} />
      </MoviesContextProvider>
    </QueryClientProvider>
  );
};

export default App;
