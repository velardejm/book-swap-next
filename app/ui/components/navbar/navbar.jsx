import Link from "next/link";
import NavbarExpanded from "./navbar-expanded";
import NavbarCollapsed from "./navbar-collapsed";

export default function NavBar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link className="btn btn-ghost text-xl" href="/">
          BookSwap
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex"></div>

      <div className="navbar-end">
        <NavbarExpanded />
        <NavbarCollapsed />
      </div>
    </div>
  );
}
