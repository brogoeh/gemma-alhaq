'use client';
import Link from 'next/link';
import React from 'react';

export default function MobileNav() {
  const handleClick = () => {
    document.querySelector('#menu').classList.toggle('hidden');
  };
  return (
    <div>
      <div className="block lg:hidden " onClick={handleClick}>
        <img src="burger.svg" alt="" className="w-8 z-50 shadow-md cursor-pointer hover:bg-slate-400 trasition duration-100 top-10 rounded right-12 fixed bg-slate-200" />
      </div>
      <div id="menu" className="text-lg shadow fixed grid justify-around py-10 bg-slate-950 justify-items-center w-full h-screen z-20">
        <Link href="/">Logo</Link>
        <Link href="/">Home</Link>
        <Link href="/project">Project</Link>
        <Link href="/about">About</Link>
        <Link href="contact">Contact</Link>
      </div>
    </div>
  );
}
