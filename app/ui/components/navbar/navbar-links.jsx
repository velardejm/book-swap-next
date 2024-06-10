import Link from "next/link";

export default function NavbarLinks() {
  return (
    <>
      <ul className="menu menu-horizontal px-1 hidden lg:flex">
        <li>
          <Link href="/books"> Item 1</Link>
        </li>
        <li>
          <Link href="/"> Item 2</Link>
        </li>
      </ul>
    </>
  );
}
