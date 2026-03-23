import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const airportTransfers = [
    { 
      name: "Mumbai Airport Transfer", 
      href: "#quote" 
    },
    { 
      name: "Pune Airport Transfer", 
      href: "#quote" 
    },
    { 
      name: "Mumbai → Pune Airport Transfer", 
      subtitle: "Daily pick and drop with doorstep services", 
      href: "#quote" 
    }
  ];

  return (
    <motion.nav
      className={`navbar ${scrolled ? "navbar--solid" : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="container">
        <div className="navbar__glass-container">
          {/* Logo */}
          <a href="#" className="navbar__logo">
            <img
              src="/logo.png"
              alt="Elite Prime Cars"
              className="navbar__logo-image"
            />
          </a>

          {/* Glassmorphic Navigation Menu */}
          <div className="navbar__menu">
            {airportTransfers.map((transfer, index) => (
              <a
                key={index}
                href={transfer.href}
                className="navbar__menu-item"
              >
                <span className="navbar__menu-item-name">{transfer.name}</span>
                {transfer.subtitle && (
                  <span className="navbar__menu-item-subtitle">{transfer.subtitle}</span>
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="navbar__mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${mobileMenuOpen ? "active" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          {/* Book Now Button */}
          <a href="#quote" className="navbar__book-btn">
            BOOK NOW
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="navbar__mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {airportTransfers.map((transfer, index) => (
              <a
                key={index}
                href={transfer.href}
                className="navbar__mobile-menu-item"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="navbar__mobile-menu-item-name">{transfer.name}</span>
                {transfer.subtitle && (
                  <span className="navbar__mobile-menu-item-subtitle">{transfer.subtitle}</span>
                )}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
