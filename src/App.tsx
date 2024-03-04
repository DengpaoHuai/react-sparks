import { FC } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import MoviesContextProvider from "./contexts/MoviesContextProvider";
import { Provider } from "react-redux";
import store from "./store/store";

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
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <MoviesContextProvider>
          <RouterProvider router={router} />
        </MoviesContextProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
