import NavbarDropdown from "./navbar-dropdown";
import NavbarLinks from "./navbar-links";

export default function NavBar() {
  return (
    <div className="navbar bg-base-100">

      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">BookSwap</a>
      </div>

      <div className="navbar-center hidden lg:flex">
  
      </div>

      <div className="navbar-end">
        <NavbarDropdown />
        <NavbarLinks />
      </div>
    </div>
  );
}
