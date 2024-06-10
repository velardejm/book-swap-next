import Link from "next/link";
import NavbarDropdown from "./navbar-dropdown";
import NavbarLinks from "./navbar-links";

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
        <NavbarDropdown />
        <NavbarLinks />
      </div>
    </div>
  );
}
