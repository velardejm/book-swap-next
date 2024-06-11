"use client";

import { useState } from "react";
import NavLinks from "./nav-links";

export default function NavDropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      <div className="lg:hidden">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost lg:hidden"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
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
