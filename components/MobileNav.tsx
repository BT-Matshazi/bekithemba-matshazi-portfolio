"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { navLinks } from "./Nav";

export default function MobileNav() {
    const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild className="flex justify-center items-center">
        <CiMenuFries className="text-accent text-[32px]" />
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">

          <Link href="/">
            <h1 className="text-4xl font-semibold">
              BT-Matshazi
              <span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
            {navLinks.map((item, i) => {
                return (
                    <Link
                        key={i}
                        href={item.path}
                        className={`${
                            pathname === item.path && "text-accent border-b-2 border-accent"
                        } capitalize font-xl font-medium hover:text-accent transition-all`}
                    >
                        {item.name}
                    </Link>
                );
            })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
