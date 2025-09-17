"use client";

import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <img
          src="/images/tactec-2nd-lockup.png"
          alt="TacTec"
          className="h-10"
        />

        {/* Navigation */}
        <nav className="flex gap-6 text-gray-300">
          <Link
            to="challenge"
            smooth={true}
            spy={true}
            offset={-80}
            activeClass="text-white font-bold"
            className="cursor-pointer hover:text-white"
          >
            Challenge
          </Link>
          <Link
            to="solution"
            smooth={true}
            spy={true}
            offset={-80}
            activeClass="text-white font-bold"
            className="cursor-pointer hover:text-white"
          >
            Solution
          </Link>
          <Link
            to="features"
            smooth={true}
            spy={true}
            offset={-80}
            activeClass="text-white font-bold"
            className="cursor-pointer hover:text-white"
          >
            Features
          </Link>
          <Link
            to="tech"
            smooth={true}
            spy={true}
            offset={-80}
            activeClass="text-white font-bold"
            className="cursor-pointer hover:text-white"
          >
            Tech
          </Link>
          <Link
            to="start"
            smooth={true}
            spy={true}
            offset={-80}
            activeClass="text-white font-bold"
            className="cursor-pointer hover:text-white"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
