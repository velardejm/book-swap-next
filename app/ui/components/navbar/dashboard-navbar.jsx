import Link from "next/link";
import MenuButton from "./menu-button";

export default function DashboardNavbar() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          {" "}
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer" className="">
              <MenuButton />
            </label>
          </div>
        </div>

        <div className="navbar-center">
          <Link className="btn btn-ghost text-xl" href="/">
            BookSwap
          </Link>
        </div>

        <div className="navbar-end"></div>
      </div>

      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
