"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Title */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-[var(--color-primary)]">
              Fusus al-Hikam
            </span>
            <span className="text-lg font-vazirmatn hidden sm:inline" dir="rtl">
              فصوص الحکمة
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-[var(--color-primary)] font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/chapters"
              className="text-gray-700 hover:text-[var(--color-primary)] font-medium transition-colors"
            >
              Chapters
            </Link>
            <Link
              href="/chapters/1"
              className="px-4 py-2 bg-[var(--color-primary)] text-white rounded hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              Read
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-[var(--color-primary)] font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/chapters"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-[var(--color-primary)] font-medium"
              onClick={() => setIsOpen(false)}
            >
              Chapters
            </Link>
            <Link
              href="/chapters/1"
              className="block px-3 py-2 rounded-md bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] font-medium"
              onClick={() => setIsOpen(false)}
            >
              Start Reading
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
