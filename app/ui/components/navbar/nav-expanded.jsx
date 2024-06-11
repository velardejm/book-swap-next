import NavLinks from "./nav-links";

export default function NavExpanded() {
  return (
    <>
      <ul className="menu menu-horizontal px-1 hidden lg:flex">
        <NavLinks />
      </ul>
    </>
  );
}
