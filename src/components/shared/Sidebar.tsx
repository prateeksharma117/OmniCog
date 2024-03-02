"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Crown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { navLinks } from "../../../constants";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/dashboard" className=" flex justify-between items-center">
          <div className=" flex items-center gap-3">
            <Image src="/logo.png" alt="logo" width={40} height={40} />
            <h1 className="text-3xl font-bold">OmniCog</h1>
          </div>
          <Crown size={20} color="#6f7173" />
        </Link>

        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathname;
                const gradientClass = isActive
                  ? "shadow-md backdrop-blur-lg"
                  : "";

                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element hover:scale-95 group ${gradientClass}`}
                  >
                    <Link className="sidebar-link" href={link.route}>
                      {link.icon}
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <ul>
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname;
                const gradientClass = isActive
                  ? "shadow-md backdrop-blur-lg"
                  : "";

                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element hover:scale-95 group ${gradientClass}`}
                  >
                    <Link className="sidebar-link" href={link.route}>
                      {link.icon}
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className=" flex justify-between items-center  cursor-pointer gap-2 p-4">
                <UserButton afterSignOutUrl="/dashboard" showName />
                <p className=" px-1 py-1 bg-green-400 text-sm rounded-lg">
                  Free
                </p>
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            <Button asChild className="button bg-cover">
              <Link href="sign-in">Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
