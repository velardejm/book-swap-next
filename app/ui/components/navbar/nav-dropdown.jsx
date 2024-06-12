"use client";

import { useState } from "react";
import MenuButton from "./menu-button";
import NavLinks from "./nav-links";

export default function NavDropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      <div className="lg:hidden">
        <MenuButton clickHandler={() => setIsDropdownOpen(!isDropdownOpen)} />
        {isDropdownOpen && (
          <div className="relative">
            <ul
              tabIndex={0}
              className="absolute right-0 menu menu-sm mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              onClick={closeDropdown}
            >
              <NavLinks />
            </ul>
          </div>
        )}
        <div
          className={`${
            isDropdownOpen ? "" : "hidden"
          } absolute top-0 right-0 w-dvw h-dvh bg-blue-300 opacity-0`}
          onClick={closeDropdown}
        ></div>
      </div>
    </>
  );
}
