"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const navLinks = [
  { name: "home", path: "/" },
  // { name: "services", path: "/services" },
  // { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  // { name: "contact", path: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {navLinks.map((item, i) => {
        return (
          <Link
            key={i}
            href={item.path}
            className={`${
              pathname === item.path && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}
