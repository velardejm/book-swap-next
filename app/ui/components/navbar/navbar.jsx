import Link from "next/link";
import NavDropdown from "./nav-dropdown";
import LoginModal from "./login-modal";
import SignupModal from "./signup-modal";
import NavLinks from "./nav-links";

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
        <LoginModal />
        <SignupModal />
        <NavDropdown />
        
        <ul className="menu menu-horizontal px-1 hidden lg:flex">
          <NavLinks />
        </ul>
      </div>
    </div>
  );
}
