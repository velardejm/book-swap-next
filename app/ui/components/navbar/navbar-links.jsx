import Link from "next/link";

export default function NavbarLinks() {
  return (
    <>
      <li>
        <Link href="/login">Log In</Link>
      </li>
      <li>
        <Link href="/signup">Sign Up</Link>
      </li>
    </>
  );
}
