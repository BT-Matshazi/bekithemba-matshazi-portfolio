import Link from "next/link";

// components
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            BT-Matshazi
            <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop navigation and Hire Me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>
                Hire Me
            </Button>
          </Link>
        </div>

        {/* Mobile navigation */}
        <div className="xl:hidden">
          <MobileNav/>
        </div>
      </div>
    </header>
  );
}
