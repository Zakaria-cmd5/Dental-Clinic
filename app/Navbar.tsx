"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const Navbar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "Sign Up", href: "/signup" },
    { label: "Appointment", href: "/appointment" },
    { label: "Current Appointment", href: "/currentAppointment" },
  ];

  return (
    <nav className="flex mb-5 px-5 h-14 items-center justify-between">
      <Link href="/" className="text-sky-500 text-4xl">
        Dent Care
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li
            key={link.href}
            className={classNames({
              "text-zinc-500": link.href !== currentPath,
              "text-sky-500": link.href === currentPath,
              "hover:text-sky-500 transition-colors font-semibold": true,
            })}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
