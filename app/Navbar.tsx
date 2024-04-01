"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { status, data: session } = useSession();
  const currentPath = usePathname();

  let signinAndSignoutLabelSwitch =
    status === "authenticated"
      ? "Logout"
      : status === "unauthenticated"
      ? "Login"
      : "";
  let signinAndSignoutHrefSwitch =
    status === "authenticated"
      ? "/api/auth/signout"
      : status === "unauthenticated"
      ? "/api/auth/signin"
      : "/";

  const links = [
    { label: "Home", href: "/" },
    { label: "Appointment", href: "/appointment" },
    { label: "Current Appointment", href: "/currentAppointment" },
    { label: signinAndSignoutLabelSwitch, href: signinAndSignoutHrefSwitch },
  ];

  return (
    <nav className="flex items-center justify-between px-5 py-4 md:py-6">
      <Link href="/" className="text-sky-500 text-4xl">
        Dent Care
      </Link>
      {/* Responsive Navigation */}
      <DropdownMenu>
        <DropdownMenuTrigger className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="absolute right-0 top-full mt-2 md:hidden animate-fade">
          <ul className="bg-white shadow-lg py-1 rounded-md w-48">
            {links.map((link) => (
              <DropdownMenuItem
                key={link.href}
                className={classNames("text-gray-800 block px-4 py-2 text-sm", {
                  "text-sky-500 font-semibold": link.href === currentPath,
                })}
              >
                <Link href={link.href}>{link.label}</Link>
              </DropdownMenuItem>
            ))}
          </ul>
        </DropdownMenuContent>
      </DropdownMenu>
      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6">
        {links.map((link) => (
          <li
            key={link.href}
            className={classNames({
              "text-zinc-500": link.href !== currentPath,
              "text-sky-500 font-semibold": link.href === currentPath,
              "hover:text-sky-500 transition-colors": true,
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
