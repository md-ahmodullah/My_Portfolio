import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import DetailsPage from "../Pages/DetailsPage";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects/details/:id",
        element: <DetailsPage />,
        loader: () => fetch("/details.json"),
      },
    ],
  },
]);
