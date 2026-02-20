import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Navbar.css'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'navbar--solid' : ''}`}
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
        >
            <div className="container navbar__inner">
                {/* Logo */}
                <a href="#" className="navbar__logo">
                    <span className="logo-icon">◆</span>
                    <div>
                        <span className="logo-main">ELITE PRIME CARS</span>
                    </div>
                </a>

                {/* CTAs */}
                <div className="navbar__actions">
                    <a
                        href="https://wa.me/919529375167?text=Hi%2C%20I%20want%20to%20book%20a%20luxury%20car%20in%20Pune"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-whatsapp navbar__cta"
                    >
                        💬 WhatsApp
                    </a>
                    <a
                        href="tel:+919529375167"
                        className="btn btn-gold navbar__cta"
                    >
                        ☎ Call Now
                    </a>
                </div>
            </div>
        </motion.nav>
    )
}
