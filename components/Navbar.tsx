"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Treatments", href: "#treatments" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div
        className={`container mx-auto flex items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "py-4" : "py-6"
        }`}
      >
        <Link href="/">
          <h1 className="text-2xl font-bold italic gold cursor-pointer">
            Dr. Raju Kumar
          </h1>
        </Link>

        <nav className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest hover:text-[#c9b8a0] transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a
          href="tel:+917379755375"
          className="hidden md:flex btn-primary items-center gap-2"
        >
          <Phone size={18} />
          Call Now
        </a>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="glass mx-4 rounded-3xl p-6 md:hidden">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-3 border-b border-white/10"
            >
              {link.name}
            </a>
          ))}

          <a
            href="tel:+917379755375"
            className="btn-primary mt-6 inline-flex items-center gap-2"
          >
            <Phone size={18} />
            Call Now
          </a>
        </div>
      )}
    </header>
  );
}