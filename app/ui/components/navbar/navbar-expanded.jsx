import NavbarLinks from "./navbar-links";

export default function NavbarExpanded() {
  return (
    <>
      <ul className="menu menu-horizontal px-1 hidden lg:flex">
        <NavbarLinks />
      </ul>
    </>
  );
}
