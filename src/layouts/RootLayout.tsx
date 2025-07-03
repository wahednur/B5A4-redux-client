import { Outlet } from "react-router";
import Footer from "../components/footer/footer";
import TopNavbar from "../components/navbars/top-nav";

export default function RootLayout() {
  return (
    <div>
      <header>
        <TopNavbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
