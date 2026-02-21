import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar ${scrolled ? "navbar--solid" : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="container navbar__inner">
        {/* Logo */}
        <a href="#" className="navbar__logo">
          <img
            src="/logo.png"
            alt="Elite Prime Cars"
            className="navbar__logo-image"
          />
        </a>

        {/* CTAs */}
        <div className="navbar__actions">
          <a href="#quote" className="btn navbar__cta navbar__cta-book">
            Book Now
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
