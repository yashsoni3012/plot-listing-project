import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Menu } from "lucide-react";
import WhiteLogo from "../assets/white-logo.png";
import GrayLogo from "../assets/black-logo.png"; // ← add your grayish logo image

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 border-b ${
        scrolled
          ? "bg-gray-100 text-black border-gray-300 shadow-md"
          : "bg-black/30 text-white border-gray-600"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-5 py-3 md:py-4 transition-all duration-500">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={scrolled ? GrayLogo : WhiteLogo}
            alt="Logo"
            className="w-24 h-auto object-contain transition-all duration-500"
          />
        </div>

        {/* Desktop Links */}
        <ul
          className={`hidden md:flex gap-8 text-lg font-medium transition-colors duration-300 ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          <Link to="/" className="hover:text-[#8D99AF]">
            Home
          </Link>
          <Link to="/category" className="hover:text-[#8D99AF]">
            Category
          </Link>
          <Link to="/listing" className="hover:text-[#8D99AF]">
            Listing
          </Link>
          <Link to="/contact" className="hover:text-[#8D99AF]">
            Contact Us
          </Link>
        </ul>

        {/* Desktop Button */}
        <Link
          to="/add-listing"
          className={`hidden md:block px-5 py-2 rounded-full font-medium transition-all duration-300 ${
            scrolled
              ? "bg-[#8D99AF] text-white hover:bg-[#7a8497]"
              : "bg-[#8D99AF] text-white hover:bg-white hover:text-[#8D99AF]"
          }`}
        >
          + Add Your Listing
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl focus:outline-none transition-all duration-300"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Dropdown (Top to Bottom) */}
      <div
        className={`absolute top-full left-0 w-full bg-gray-700 text-white overflow-hidden transition-all duration-500 ease-in-out ${
          hasMounted
            ? menuOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
            : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 text-lg font-medium">
          <Link
            to="/"
            className="hover:text-[#8D99AF]"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/category"
            className="hover:text-[#8D99AF]"
            onClick={() => setMenuOpen(false)}
          >
            Category
          </Link>
          <Link
            to="/listing"
            className="hover:text-[#8D99AF]"
            onClick={() => setMenuOpen(false)}
          >
            Listing
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#8D99AF]"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
          <Link
            to="/add-listing"
            className="bg-[#8D99AF] text-white px-6 py-2 rounded-full hover:bg-[#7a8497] transition"
            onClick={() => setMenuOpen(false)}
          >
            + Add Your Listing
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
