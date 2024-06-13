"use client";

export default function NavLinks() {
  return (
    <>
      <li>
        <button
          className="lg:btn lg:content-center mr-2"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Log In
        </button>
      </li>
      <li>
        <button
          className="lg:btn lg:content-center"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          Sign Up
        </button>
      </li>
    </>
  );
}
