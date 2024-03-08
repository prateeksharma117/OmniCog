"use client";

import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { AlignCenter } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
      <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 mx-5 font-semibold">
            <span>OmniCog.</span>
          </Link>

          <div className="hidden items-center space-x-4 sm:flex">
            <>
              <Link
                href="/credits"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              >
                Pricing
              </Link>
              <Link
                href="/sign-in"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              >
                Sign in
              </Link>
            </>
            <>
              <Link
                href="/dashboard"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              >
                Dashboard
              </Link>
            </>
          </div>
          <div className="flex items-center space-x-4 sm:hidden">
            <button
              className="text-gray-600 focus:outline-none mx-5"
              onClick={toggleMobileMenu}
            >
              <AlignCenter size={24} />
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div
            className={`sm:hidden relative transition-transform duration-1000 ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Add your mobile menu content here */}
            <div className="flex flex-col rounded-br-lg absolute top-0 right-0 items-center bg-white shadow-lg font-bold w-1/2 transition-all">
              <Link
                href="/pricing"
                className="py-3 text-gray-800 hover:bg-gray-100 w-full text-center rounded-sm hover:shadow-md"
              >
                Pricing
              </Link>
              <div className=" border border-gray-100 w-full"></div>
              <Link
                href="/sign-in"
                className="py-3 text-gray-800 hover:bg-gray-100 w-full text-center rounded-sm hover:shadow-md"
              >
                Sign in
              </Link>
              <div className=" border border-gray-100 w-full"></div>
              <Link
                href="/dashboard"
                className="py-3 text-gray-800 hover:bg-gray-100 w-full text-center rounded-sm hover:shadow-md"
              >
                Dashboard
              </Link>
            </div>
          </div>
        )}
      </nav>
    );
};

export default Navbar;
