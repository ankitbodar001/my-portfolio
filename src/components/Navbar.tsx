
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        scrolled ? 'bg-data-darker/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-bold text-gradient-purple"
        >
          DataFolio
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white hover:text-data-accent-light"
        >
          <Menu />
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-data-accent-light transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-data-dark/95 backdrop-blur-lg md:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-data-accent-light transition-colors py-2"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
