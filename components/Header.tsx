"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentPath = usePathname();

  // if the current path is activated, set the color to blue-60 and underline
  const isActive = (path: string) =>
    path === currentPath ? "text-blue-60 underline" : "";

  return (
    <nav className="absolute top-16 right-20">
      <ul className="flex flex-col items-end space-y-2 text-2xl text-blue-40">
        <li>
          <Link
            href="/"
            className={`hover:underline hover:text-blue-60 ${isActive("/")}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={`hover:underline hover:text-blue-60 ${isActive(
              "/about"
            )}`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/works"
            className={`hover:underline hover:text-blue-60 ${isActive(
              "/works"
            )}`}
          >
            Works
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={`hover:underline hover:text-blue-60 ${isActive(
              "/contact"
            )}`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const Header = () => {
  return (
    <div className="w-[144px] h-full flex p-2">
      <Navbar />
    </div>
  );
};

export default Header;
