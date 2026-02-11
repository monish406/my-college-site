"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-blue-900 text-white shadow-md">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3">
        
        <h1 className="text-lg sm:text-xl font-bold">
          My College
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col space-y-1"
        >
          <span className={`w-6 h-0.5 bg-white transition ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`w-6 h-0.5 bg-white transition ${isOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-white transition ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-blue-800 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-64 py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-4 space-y-4 text-sm">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
