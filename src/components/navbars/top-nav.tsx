import { Link } from "react-router";
import { ModeToggle } from "../theme/mode-toggle";

export default function TopNavbar() {
  return (
    <div>
      <div className="container flex items-center justify-between">
        <Link to={"/"}>
          <img src="/ws.svg" alt="WS-LMS" className="h-8" /> <h1>WS LMS-</h1>
        </Link>
        <ul className="flex items-center justify-end flex-1">
          <li>Home</li>
        </ul>
        <div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
