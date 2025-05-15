"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between container py-4">
        <Link
          href="/"
          className="flex items-center gap-2 z-20"
          onClick={closeMobileMenu}
        >
          <div className="relative w-[50px] h-[50px] md:w-[60px] md:h-[60px]">
            <Image
              src="/icons/logo.png"
              alt="Members Only Photography Logo"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-lg md:text-xl font-medium">
            Members Only Photography
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-gray-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-20 p-2"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white z-10 flex flex-col transition-transform duration-300 ease-in-out transform ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <div className="h-20"></div
