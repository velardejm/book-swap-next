import Link from "next/link";

export default function NavLink() {
  return (
    <>
      <li>
        {/* <Link href="/login">Log In</Link> */}
        <button
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Log In
        </button>
      </li>
      <li>
        {/* <Link href="/signup">Sign Up</Link> */}
        <button
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Sign Up
        </button>
      </li>
    </>
  );
}
