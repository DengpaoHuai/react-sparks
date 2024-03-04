import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SecondPage from "../pages/SecondPage";
import ListMovies from "../pages/ListMovies";
import CreateMovie from "../pages/CreateMovie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/second",
    element: <SecondPage></SecondPage>,
  },
  {
    path: "/create",
    element: <CreateMovie></CreateMovie>,
  },
  {
    path: "/list",
    element: <ListMovies></ListMovies>,
  },
]);

export default router;
