import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <div className="sm:hidden lg:block dark:bg-gradient-to-b w-full shadow  dark:from-gray-900 dark:to-gray-950 fixed z-50 ">
      <div className="flex justify-between text-center items-center w-1/2 mx-auto h-32 tracking-wide">
        <div className="grid grid-cols-2 justify-items-center space-x-5">
          <Link href="/" className="w-32 hover:text-gray-400">
            Home
          </Link>
          <Link href="/project" className="w-32 hover:text-gray-400">
            Project
          </Link>
        </div>
        <Link href="/" className="w-32 hover:text-gray-400">
          <img src="images/AUTHENTIC-OF-GEMMA-LOGO-02.png" alt="images" className="w-36" />
        </Link>
        <div className="grid grid-cols-2 space-x-5 justify-items-center">
          <Link className="w-32 hover:text-gray-400" href="/about">
            About
          </Link>
          <Link className="w-32 hover:text-gray-400" href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
