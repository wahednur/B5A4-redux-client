import { createBrowserRouter } from "react-router";
import AddBook from "../pages/books/add-book";
import Books from "../pages/books/books";
import EditBook from "../pages/books/edit-book";
import AddBorrow from "../pages/borrow/add-borrow";
import BorrowSummary from "../pages/borrow/BorrowSummary";
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
        path: "/borrow/:id",
        Component: AddBorrow,
      },
      {
        path: "/add-borrow",
        Component: AddBorrow,
      },
      {
        path: "books/edit-book/:id",
        Component: EditBook,
      },
      {
        path: "/borrow-summary",
        Component: BorrowSummary,
      },
    ],
  },
]);

export default router;
