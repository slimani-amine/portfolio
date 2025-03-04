"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import * as SheetPrimitive from "@radix-ui/react-dialog";

const links = [
  { name: "Home", path: "/" },
  { name: "Resume", path: "/resume" },
  { name: "Services", path: "/services" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet name="sheet">
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        <div className="mt-28 mb-28 text-center text-2xl">
          <Link href={"/"} aria-label="Home">
            <h1 className="text-4xl font-semibold">
              Amine<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-4">
          {links.map((link) => (
            <SheetPrimitive.Close asChild key={link.name}>
              <Link
                href={link.path}
                className={`${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent"
                } capitalize font-medium hover:text-accent transition-all`}
                aria-label={link.name}
              >
                {link.name}
              </Link>
            </SheetPrimitive.Close>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
