import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import WhiteLogo from "../assets/white-logo.png";
import GrayLogo from "../assets/black-logo.png";

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

  // Menu icon animation variants
  const topBarVariants = {
    open: {
      rotate: 45,
      y: 8,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    closed: {
      rotate: 0,
      y: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const middleBarVariants = {
    open: {
      opacity: 0,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    closed: {
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut", delay: 0.1 },
    },
  };

  const bottomBarVariants = {
    open: {
      rotate: -45,
      y: -8,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    closed: {
      rotate: 0,
      y: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const mobileMenuVariants = {
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        height: { duration: 0.4, ease: "easeInOut" },
        opacity: { duration: 0.3, delay: 0.1 },
      },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.3, ease: "easeInOut" },
        opacity: { duration: 0.2 },
      },
    },
  };

  const menuItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { type: "spring", stiffness: 300, damping: 24 },
      },
    },
    closed: {
      y: 20,
      opacity: 0,
      transition: {
        y: { type: "spring", stiffness: 300, damping: 24 },
      },
    },
  };

  const containerVariants = {
    open: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  // Navbar height animation variant
  const navbarHeightVariants = {
    expanded: {
      height: "80px", // Normal height
      transition: { duration: 0.1, ease: "easeInOut" },
    },
    condensed: {
      height: "70px", // 10px reduced height
      transition: { duration: 0.1, ease: "easeInOut" },
    },
  };

  return (
    <motion.nav
      variants={navbarHeightVariants}
      animate={scrolled ? "condensed" : "expanded"}
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 border-b ${
        scrolled
          ? "bg-gray-100 text-black border-gray-300 shadow-md"
          : "bg-black/10 text-white border-gray-600"
      }`}
    >
      {/* Main container with max-w-7xl */}
      <div className="max-w-7xl mx-auto h-full">
        <motion.div
          className="flex items-center justify-between px-5 h-full transition-all duration-500"
          layout // This enables smooth layout transitions
        >
          {/* Logo */}
          <motion.div className="flex items-center gap-2" layout>
            <Link to="/">
              <motion.img
                src={scrolled ? GrayLogo : WhiteLogo}
                alt="Logo"
                className="w-24 h-auto object-contain transition-all duration-500"
                animate={{
                  scale: scrolled ? 0.9 : 1,
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }} // Changed from 0.3 to 0.2
              />
            </Link>
          </motion.div>

          {/* Desktop Links */}
          <motion.ul
            className={`hidden md:flex gap-8 text-lg font-medium transition-colors duration-300 ${
              scrolled ? "text-black" : "text-white"
            }`}
            layout
          >
            <Link to="/" className="hover:text-[#8D99AF]">
              Home
            </Link>
            <Link to="/categories" className="hover:text-[#8D99AF]">
              Category
            </Link>
            <Link to="/listing" className="hover:text-[#8D99AF]">
              Listing
            </Link>
            <Link to="/contact" className="hover:text-[#8D99AF]">
              Contact Us
            </Link>
          </motion.ul>

          {/* Desktop Button */}
          <motion.div layout>
            <Link
              to="/add-listing"
              className={`hidden md:block px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                scrolled
                  ? "bg-[#8D99AF] text-white hover:bg-[#7a8497]"
                  : "bg-[#8D99AF] text-white hover:bg-white hover:text-[#8D99AF]"
              }`}
            >
              + Add Your Listing
            </Link>
          </motion.div>

          {/* Mobile Menu Toggle - Clean Morph Animation */}
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative w-8 h-8 focus:outline-none flex flex-col items-center justify-center gap-1.5"
            whileTap={{ scale: 0.9 }}
            layout
          >
            {/* Top Bar */}
            <motion.div
              className="w-6 h-0.5 bg-current rounded-full"
              variants={topBarVariants}
              animate={menuOpen ? "open" : "closed"}
            />

            {/* Middle Bar */}
            <motion.div
              className="w-6 h-0.5 bg-current rounded-full"
              variants={middleBarVariants}
              animate={menuOpen ? "open" : "closed"}
            />

            {/* Bottom Bar */}
            <motion.div
              className="w-6 h-0.5 bg-current rounded-full"
              variants={bottomBarVariants}
              animate={menuOpen ? "open" : "closed"}
            />
          </motion.button>
        </motion.div>

        {/* Mobile Dropdown with Framer Motion */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="absolute top-full left-0 w-full bg-gray-700 text-white overflow-hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="max-w-7xl mx-auto">
                <motion.ul
                  className="flex flex-col items-center gap-6 py-6 text-lg font-medium"
                  variants={containerVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <motion.div variants={menuItemVariants}>
                    <Link
                      to="/"
                      className="hover:text-[#8D99AF] transition-colors duration-300 block py-2"
                      onClick={() => setMenuOpen(false)}
                    >
                      Home
                    </Link>
                  </motion.div>
                  <motion.div variants={menuItemVariants}>
                    <Link
                      to="/categories"
                      className="hover:text-[#8D99AF] transition-colors duration-300 block py-2"
                      onClick={() => setMenuOpen(false)}
                    >
                      Category
                    </Link>
                  </motion.div>
                  <motion.div variants={menuItemVariants}>
                    <Link
                      to="/listing"
                      className="hover:text-[#8D99AF] transition-colors duration-300 block py-2"
                      onClick={() => setMenuOpen(false)}
                    >
                      Listing
                    </Link>
                  </motion.div>
                  <motion.div variants={menuItemVariants}>
                    <Link
                      to="/contact"
                      className="hover:text-[#8D99AF] transition-colors duration-300 block py-2"
                      onClick={() => setMenuOpen(false)}
                    >
                      Contact Us
                    </Link>
                  </motion.div>
                  <motion.div variants={menuItemVariants}>
                    <Link
                      to="/add-listing"
                      className="bg-[#8D99AF] text-white px-6 py-3 rounded-full hover:bg-[#7a8497] transition-colors duration-300 block"
                      onClick={() => setMenuOpen(false)}
                    >
                      + Add Your Listing
                    </Link>
                  </motion.div>
                </motion.ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
