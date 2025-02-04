"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Instagram, Linkedin, User } from "lucide-react";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <h1 className="text-2xl md:text-3xl font-bold">Muhammad Samad</h1>

        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <a
                href="https://portfolio-tailwind-css-by-samad.vercel.app/"
                target="_blank"
                className="hover:text-gray-300"
              >
                <User />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/s_a_m_a_d11/"
                target="_blank"
                className="hover:text-gray-300"
              >
                <Instagram />
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-gray-700">
          <ul className="flex flex-col space-y-2 px-4 py-2">
            <li>
              <a
                href="https://portfolio-tailwind-css-by-samad.vercel.app/"
                target="_blank"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-gray-300"
              >
                <User />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/s_a_m_a_d11/"
                target="_blank"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-gray-300"
              >
                <Instagram />
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
