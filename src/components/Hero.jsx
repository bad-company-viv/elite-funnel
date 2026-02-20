import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import './Hero.css'

const PARTICLES = Array.from({ length: 20 }, (_, i) => i)

export default function Hero() {
    const particlesRef = useRef(null)
    const videoRef = useRef(null)

    /* ─── Floating particles ─── */
    useEffect(() => {
        if (!particlesRef.current) return
        const particles = particlesRef.current.querySelectorAll('.particle')
        particles.forEach((p) => {
            gsap.to(p, {
                y: `random(-30, 30)`,
                x: `random(-20, 20)`,
                opacity: `random(0.2, 0.6)`,
                duration: `random(3, 7)`,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                delay: `random(0, 4)`,
            })
        })
    }, [])

    /* ─── Ensure video plays on iOS ─── */
    useEffect(() => {
        if (!videoRef.current) return
        videoRef.current.play().catch(() => { })
    }, [])

    const fade = (delay) => ({
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { delay, duration: 0.8, ease: 'easeOut' } },
    })

    return (
        <section className="hero">
            {/* ── Full-screen background video ── */}
            <video
                ref={videoRef}
                className="hero__video"
                src="/hero.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
            />

            {/* Cinematic overlays */}
            <div className="hero__video-overlay" />
            <div className="hero__grid-overlay" />

            {/* Particles */}
            <div className="particles" ref={particlesRef}>
                {PARTICLES.map((i) => (
                    <div
                        key={i}
                        className="particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${Math.random() * 3 + 1}px`,
                            height: `${Math.random() * 3 + 1}px`,
                        }}
                    />
                ))}
            </div>

            {/* ── TOP: Badge + Headline ── */}
            <div className="hero__top">
                <div className="container hero__top-inner">
                    <motion.span
                        className="badge"
                        variants={fade(0.2)}
                        initial="hidden"
                        animate="visible"
                    >
                        ◆ Pune&apos;s #1 Luxury Fleet
                    </motion.span>

                    <motion.h1
                        className="hero__headline"
                        variants={fade(0.4)}
                        initial="hidden"
                        animate="visible"
                    >
                        Travel as a star
                        <br />
                        <span className="bright-text">in luxury cars.</span>
                    </motion.h1>
                </div>
            </div>

            {/* ── BOTTOM: Sub + CTAs + Trust ── */}
            <div className="hero__bottom">
                <div className="container hero__bottom-inner">
                    <motion.p
                        className="hero__sub"
                        variants={fade(0.6)}
                        initial="hidden"
                        animate="visible"
                    >
                        Luxury Car Rentals in Pune
                    </motion.p>

                    <motion.p
                        className="hero__desc"
                        variants={fade(0.75)}
                        initial="hidden"
                        animate="visible"
                    >
                        Chauffeur-driven Mercedes, BMW, Audi &amp; Range Rover for
                        weddings, corporate events, airport transfers &amp; self drives.
                    </motion.p>

                    <motion.div
                        className="hero__ctas"
                        variants={fade(0.9)}
                        initial="hidden"
                        animate="visible"
                    >
                        <a href="#booking" className="btn btn-gold">
                            <span>📅</span> Check Availability
                        </a>
                        <a href="tel:+919529375167" className="btn btn-outline">
                            <span>☎</span> Call Now
                        </a>
                    </motion.div>

                    {/* Trust bar */}
                    <motion.div
                        className="hero__trust"
                        variants={fade(1.0)}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="trust-item">
                            <span className="trust-num">500+</span>
                            <span className="trust-label">Happy Clients</span>
                        </div>
                        <div className="trust-divider" />
                        <div className="trust-item">
                            <span className="trust-num">10+</span>
                            <span className="trust-label">Luxury Cars</span>
                        </div>
                        <div className="trust-divider" />
                        <div className="trust-item">
                            <span className="trust-num">24/7</span>
                            <span className="trust-label">Availability</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="scroll-indicator"
                animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
                <div className="scroll-line" />
                <span>Scroll</span>
            </motion.div>
        </section>
    )
}
