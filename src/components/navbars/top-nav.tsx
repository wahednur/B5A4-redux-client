import { Link, NavLink } from "react-router";
import { ModeToggle } from "../theme/mode-toggle";

export default function TopNavbar() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-3">
      <div className="container flex items-center justify-between">
        <Link className="flex gap-1 items-center" to={"/"}>
          <img src="/ws.svg" alt="WS-LMS" className="h-8" />{" "}
          <h1 className="text-4xl font-bold">LMS</h1>
        </Link>
        <ul className="flex nav items-center justify-center flex-1 mr-4">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/books">Books</NavLink>
          </li>
          <li>
            <NavLink to="/create-book">Add Book</NavLink>
          </li>
          <li>
            <NavLink to="/borrow">Borrow</NavLink>
          </li>
        </ul>
        <div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
