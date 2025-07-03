import { createBrowserRouter } from "react-router";
import HomePage from "../pages/Home/home-page";
import RootLayout from "./../layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
    ],
  },
]);

export default router;
