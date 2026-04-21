import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Crown, BadgeCheck, Briefcase, Plane, ChevronDown } from "lucide-react";
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

  const menuItems = [
    { name: "Luxury Rental", href: "/#cars", icon: Crown },
    { name: "Value Rental", href: "/#cars", icon: BadgeCheck },
    { name: "Corporate Rental", href: "/#booking", icon: Briefcase },
    { 
      name: "Airport Rental", 
      href: "#",
      isMega: true,
      icon: Plane,
      megaData: {
        sections: [
          {
            title: "Popular Routes",
            icon: <Plane size={20} className="mega-menu-icon-svg" />,
            items: [
              { name: "Mumbai Airport Transfer", href: "/#quote" },
              { name: "Pune Airport Transfer", href: "/#quote" },
              { name: "Mumbai → Pune Airport", href: "/#quote", subtitle: "Doorstep Services" },
            ]
          }
        ],
        featuredImage: "/images/merc-E.png"
      }
    },
  ];

  const [activeDropdown, setActiveDropdown] = useState(null);

  // Prevent redirect for mega menu triggers and handle smooth scroll
  const handleItemClick = (e, href, item = {}) => {
    if (item.isMega || item.isDropdown) {
      e.preventDefault();
      return;
    }

    if (href && (href.startsWith("/#") || href.startsWith("#"))) {
      const id = href.split("#")[1];
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    }
  };

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
          <a href="/" className="navbar__logo">
            <img
              src="/logo.png"
              alt="Elite Prime Cars"
              className="navbar__logo-image"
            />
          </a>

          {/* Glassmorphic Navigation Menu */}
          <div className="navbar__menu">
            {menuItems.map((item, index) => (
              <div 
                key={index} 
                className="navbar__menu-wrapper"
                onMouseEnter={() => (item.isDropdown || item.isMega) && setActiveDropdown(index)}
                onMouseLeave={() => (item.isDropdown || item.isMega) && setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="navbar__menu-item"
                  onClick={(e) => handleItemClick(e, item.href, item)}
                >
                  {item.icon && <item.icon className="navbar__menu-icon-top" size={20} />}
                  <div className="navbar__menu-item-content">
                    <span className="navbar__menu-item-name">{item.name}</span>
                    {(item.isDropdown || item.isMega) && <ChevronDown className="dropdown-icon" size={12} />}
                  </div>
                </a>

                <AnimatePresence>
                  {activeDropdown === index && (
                    <motion.div 
                      className={item.isMega ? "navbar__mega-menu" : "navbar__dropdown"}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      {item.isMega ? (
                        <div className="mega-menu-content">
                          <div className="mega-menu-grid mega-menu-grid--single">
                            {item.megaData.sections.map((section, sIdx) => (
                              <div key={sIdx} className="mega-menu-column">
                                <div className="mega-menu-header">
                                  <span className="mega-menu-icon">{section.icon}</span>
                                  <span className="mega-menu-title">{section.title}</span>
                                </div>
                                <ul className="mega-menu-list">
                                  {section.items.map((sub, iIdx) => (
                                    <li key={iIdx}>
                                      <a 
                                        href={sub.href} 
                                        className="mega-menu-link"
                                        onClick={(e) => handleItemClick(e, sub.href)}
                                      >
                                        <span className="mega-menu-link-name">{sub.name}</span>
                                        {sub.subtitle && <span className="mega-menu-link-sub">{sub.subtitle}</span>}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                          <div className="mega-menu-featured">
                            <img src={item.megaData.featuredImage} alt="Premium Fleet" className="mega-featured-img" />
                            <div className="mega-featured-overlay">
                              <p>Experience the Pinnacle of Luxury</p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        item.dropdownItems.map((sub, sIdx) => (
                          <a 
                            key={sIdx} 
                            href={sub.href} 
                            className="navbar__dropdown-item" 
                            onClick={(e) => handleItemClick(e, sub.href)}
                          >
                            <span className="navbar__dropdown-item-name">{sub.name}</span>
                            {sub.subtitle && <span className="navbar__dropdown-item-sub">{sub.subtitle}</span>}
                          </a>
                        ))
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
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
          <a 
            href="/#quote" 
            className="navbar__book-btn"
            onClick={(e) => handleItemClick(e, "/#quote")}
          >
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
            {menuItems.map((item, index) => (
              <div key={index} className="navbar__mobile-menu-group">
                <a
                  href={item.href}
                  className="navbar__mobile-menu-item"
                  onClick={(e) => handleItemClick(e, item.href, item)}
                >
                  <div className="navbar__mobile-menu-item-content">
                    {item.icon && <item.icon className="navbar__mobile-icon" size={18} />}
                    <span className="navbar__mobile-menu-item-name">{item.name}</span>
                  </div>
                </a>
                
                {item.isMega && (
                  <div className="navbar__mobile-mega-cols">
                    {item.megaData.sections.map((section, sIdx) => (
                      <div key={sIdx} className="navbar__mobile-mega-section">
                        <div className="navbar__mobile-mega-header">{section.icon} {section.title}</div>
                        {section.items.map((sub, iIdx) => (
                          <a
                            key={iIdx}
                            href={sub.href}
                            className="navbar__mobile-submenu-item"
                            onClick={(e) => handleItemClick(e, sub.href)}
                          >
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                )}

                {item.isDropdown && (
                  <div className="navbar__mobile-submenu">
                    {item.dropdownItems.map((sub, sIdx) => (
                      <a
                        key={sIdx}
                        href={sub.href}
                        className="navbar__mobile-submenu-item"
                        onClick={(e) => handleItemClick(e, sub.href)}
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
