'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-gray-dark">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link href="/" className="text-xl font-bold tracking-tight">
            PROTECT OUR FREEDOM
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/why-this-matters" className="hover:text-accent transition-colors">
              Why This Matters
            </Link>
            <Link href="/take-action" className="hover:text-accent transition-colors">
              Take Action
            </Link>
            <Link href="/blog" className="hover:text-accent transition-colors">
              News
            </Link>
            <Link href="/about" className="hover:text-accent transition-colors">
              About
            </Link>
            <Link
              href="/take-action#volunteer"
              className="bg-accent hover:bg-accent-hover text-background px-6 py-2 rounded font-semibold transition-colors"
            >
              Join the Fight
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-gray-dark">
            <Link href="/why-this-matters" className="block hover:text-accent transition-colors">
              Why This Matters
            </Link>
            <Link href="/take-action" className="block hover:text-accent transition-colors">
              Take Action
            </Link>
            <Link href="/blog" className="block hover:text-accent transition-colors">
              News
            </Link>
            <Link href="/about" className="block hover:text-accent transition-colors">
              About
            </Link>
            <Link
              href="/take-action#volunteer"
              className="block bg-accent hover:bg-accent-hover text-background px-6 py-2 rounded font-semibold transition-colors text-center"
            >
              Join the Fight
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
