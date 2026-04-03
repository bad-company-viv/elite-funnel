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
                        className="badge hero__badge"
                        variants={fade(0.2)}
                        initial="hidden"
                        animate="visible"
                    >
                        ◆ Pune&apos;s #1 Luxury Fleet
                    </motion.span>

                    <motion.div
                        className="hero__headline-logo-wrap"
                        variants={fade(0.4)}
                        initial="hidden"
                        animate="visible"
                    >
                        <img
                            src="/elite-logo-2.png"
                            alt="Elite Prime Cars"
                            className="hero__headline-logo"
                        />
                    </motion.div>
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
                        Chauffeur-driven Mercedes, BMW &amp; Rolls Royce for
                        weddings, corporate events, airport transfers &amp; self drives.
                    </motion.p>

                    <motion.div
                        className="hero__ctas"
                        variants={fade(0.9)}
                        initial="hidden"
                        animate="visible"
                    >
                        <a href="/#booking" className="btn btn-gold">
                            Book Now
                        </a>
                        <a href="tel:+919920053379" className="btn btn-outline">
                            <span>☎</span> Call Now
                        </a>
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="hero__side-stats"
                variants={fade(1.0)}
                initial="hidden"
                animate="visible"
            >
                <div className="hero__side-stat">
                    <span className="hero__side-value">50+</span>
                    <span className="hero__side-label">Premium Vehicles</span>
                </div>
                <div className="hero__side-stat">
                    <span className="hero__side-value">24/7</span>
                    <span className="hero__side-label">Concierge Service</span>
                </div>
                <div className="hero__side-stat">
                    <span className="hero__side-value">5★</span>
                    <span className="hero__side-label">Client Rating</span>
                </div>
            </motion.div>

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
