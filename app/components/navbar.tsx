"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tarieven", label: "Tarieven" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 w-full border-b border-gray-200 bg-background">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="relative flex justify-between items-center h-24 py-4">
          {/* Logo – left */}
          <Link href="/" className="flex items-center shrink-0 hover:opacity-80 transition-opacity">
            <Image
              src="/kattenoppas-logo.png"
              alt="Katten Oppas Purmerend"
              width={160}
              height={80}
              className="h-auto"
              priority
            />
          </Link>

          {/* Navigation links – center (desktop) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium tracking-tight text-foreground/90 hover:text-brand transition-colors duration-200 py-2"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + mobile menu button */}
          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 bg-brand text-white px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-brand/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Plan een afspraak
            </Link>
            <button
              type="button"
              className="md:hidden p-2 text-foreground hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label={mobileMenuOpen ? "Menu sluiten" : "Menu openen"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-background">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-foreground/90 hover:text-brand py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand text-white px-4 py-3 rounded-lg font-semibold text-sm hover:bg-brand/90 transition-colors mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Phone className="w-4 h-4" />
              Plan een afspraak
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;