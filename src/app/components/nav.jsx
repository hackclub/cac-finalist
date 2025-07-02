"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-[var(--cac-blue)] shadow-md px-4 py-5 font-[family-name:var(--font-geist-mono)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left section: CAC placeholder + logos */}
        <div className="flex items-center space-x-4">
          {/* CAC placeholder - always visible, aligned left */}
          <div className="text-white text-lg font-semibold whitespace-nowrap">
            🏠 CAC
          </div>

          {/* Logos - visible on md+ only */}
          <div className="hidden md:flex items-center space-x-4">
            <img
              src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/344153355c22d8f969f31ff333468fd08b0f1c9c_image.png"
              alt="Logo 1"
              className="h-10 w-auto"
            />
            <img
              src="https://assets.hackclub.com/flag-standalone.svg"
              alt="Logo 2"
              className="h-10 w-auto"
            />
          </div>
        </div>

        {/* Nav Links - flex right */}
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          <li>
            <a href="/" className="hover:text-blue-300">
              Home
            </a>
          </li>
          <li>
            <a href="/overview" className="hover:text-blue-300">
              Docs
            </a>
          </li>
          <li>
            <a href="/faq" className="hover:text-blue-300">
              FAQ
            </a>
          </li>
         
        </ul>

        {/* Mobile menu button */}
        <div className="md:hidden text-white">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <ul className="md:hidden mt-2 space-y-2 px-2 pb-3 text-white font-medium">
          <li>
            <a href="/" className="block px-2 py-1 rounded hover:bg-blue-600">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block px-2 py-1 rounded hover:bg-blue-600">
              Docs
            </a>
          </li>
          <li>
            <a href="#" className="block px-2 py-1 rounded hover:bg-blue-600">
              Githb 
            </a>
          </li>
          <li>
            <a href="#" className="block px-2 py-1 rounded hover:bg-blue-600">
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
