import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <div className="dark:bg-gradient-to-b w-full  dark:from-gray-900 dark:to-gray-950 shadow">
      <div className="flex justify-between items-center w-1/2 mx-auto h-32 tracking-wide">
        <div className="grid grid-cols-2 justify-items-center space-x-5">
          <Link href="/">Homepage</Link>
          <Link href="/project">Our Project</Link>
        </div>
        <Link href="/">
          <img src="images/AUTHENTIC-OF-GEMMA-LOGO-02.png" alt="images" className="w-36" />
        </Link>
        <div className="grid grid-cols-2 space-x-5 justify-items-center">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}
