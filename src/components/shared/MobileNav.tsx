"use client"

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AlignCenter } from "lucide-react";
import { navLinks } from "../../../constants";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import Image from "next/image";

const MobileNav = () => {

  const pathname=usePathname()

  return (
    <header className="header">
      <Link href="/dashboard" className="flex items-center gap-2 md:py-2">
        <h1 className=" text-3xl font-bold">OmniCog</h1>
      </Link>

      <nav className=" flex gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
          <Sheet>
            <SheetTrigger>
              <AlignCenter size={25} color="#8a9099" />
            </SheetTrigger>
            <SheetContent className=" sheet-content sm:w-64">
              <h1 className=" text-3xl font-bold">OmniCog</h1>
              <ul className="header-nav_elements">
                {navLinks.map((link) => {
                  const isActive = link.route === pathname;
                  const gradientClass = isActive
                    ? "bg-gradient-to-r from-pink-500 to-violet-600 text-white  rounded-lg shadow-sm"
                    : "";

                  return (
                    <li
                      key={link.route}
                      className={` flex whitespace-nowrap  text-dark-700 ${gradientClass}`}
                    >
                      <Link
                        className="sidebar-link cursor-pointer "
                        href={link.route}
                      >
                        <Image
                          src={link.icon}
                          alt="logo"
                          width={24}
                          height={24}
                          className={`${isActive && "brightness-200"}`}
                        />
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut>
          <Button asChild className="button bg-cover">
            <Link href="sign-in">Login</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;
