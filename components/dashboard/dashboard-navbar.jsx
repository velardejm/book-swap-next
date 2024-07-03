"use client";
import { useRef } from "react";

import Link from "next/link";
import MenuButton from "../navbar/menu-button";

import { logout } from "@/lib/auth";

export default function DashboardNavbar() {
  const menuButtonRef = useRef(null);
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer" ref={menuButtonRef}>
              <MenuButton />
            </label>
          </div>
        </div>

        <div className="navbar-center">
          <Link className="btn btn-ghost text-xl" href="/">
            BookSwap
          </Link>
        </div>

        <div className="navbar-end">
          <button
            className="lg:btn lg:content-center mr-2"
            onClick={() => {
              logout();
            }}
          >
            Log Out
          </button>
        </div>
      </div>

      <div className="drawer z-50">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li onClick={() => menuButtonRef.current.click()}>
              <Link className="" href="/dashboard">
                My Books
              </Link>
            </li>
            <li onClick={() => menuButtonRef.current.click()}>
              <Link className="" href="/dashboard/requests">
                Requests
              </Link>
              <Link className="" href="/dashboard/sent-requests">
                Sent Requests
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
