import { createBrowserRouter } from "react-router";
import AddBook from "../pages/books/add-book";
import Books from "../pages/books/books";
import EditBook from "../pages/books/edit-book";
import Borrow from "../pages/borrow/borrow";
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
      {
        path: "/borrow",
        Component: Borrow,
      },
      {
        path: "/add-borrow",
        Component: Borrow,
      },
      {
        path: "books/edit-book/:id",
        Component: EditBook,
      },
    ],
  },
]);

export default router;
