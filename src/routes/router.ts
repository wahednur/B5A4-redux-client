import { createBrowserRouter } from "react-router";
import AddBook from "../pages/books/add-book";
import Books from "../pages/books/books";
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
      {
        path: "/create-book",
        Component: AddBook,
      },
      {
        path: "/books",
        Component: Books,
      },
    ],
  },
]);

export default router;
