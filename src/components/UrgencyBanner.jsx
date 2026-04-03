import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import './UrgencyBanner.css'

const VEHICLES_LEFT = 3

export default function UrgencyBanner() {
    const countRef = useRef(null)

    useEffect(() => {
        if (!countRef.current) return
        gsap.fromTo(
            countRef.current,
            { textContent: 10 },
            {
                textContent: VEHICLES_LEFT,
                duration: 2,
                delay: 0.5,
                ease: 'power2.out',
                snap: { textContent: 1 },
                onUpdate() {
                    countRef.current.textContent = Math.round(Number(this.targets()[0].textContent))
                },
            }
        )
    }, [])

    return (
        <section className="urgency-section">
            <div className="urgency-bg" />
            <div className="urgency-bg-lines" />

            <div className="container urgency-inner">
                <motion.div
                    className="urgency-left"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="urgency-pulse">
                        <span className="pulse-dot" />
                        <span>Live Availability</span>
                    </div>
                    <h2 className="urgency-title">
                        Limited Premium Vehicles<br />
                        <span>Available — Book Early</span>
                    </h2>
                    <p className="urgency-sub">
                        Our luxury fleet books up fast for weddings, corporate events, and special occasions.
                        Secure your preferred car today before it's gone.
                    </p>
                    <div className="urgency-ctas">
                        <a
                            href="https://wa.me/919920053379?text=Hi%2C%20I%20want%20to%20check%20availability%20for%20a%20luxury%20car"
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-gold"
                        >
                            💬 Book on WhatsApp Now
                        </a>
                        <a href="tel:+919920053379" className="btn btn-outline">
                            ☎ Call Now
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className="urgency-right"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    {/* Counter box */}
                    <div className="counter-card glass-card">
                        <div className="counter-main">
                            <span className="counter-num" ref={countRef}>{VEHICLES_LEFT}</span>
                            <span className="counter-label">Vehicles Still Available</span>
                        </div>
                        <div className="counter-divider" />
                        <div className="counter-dates">
                            <div className="date-chip">
                                <span className="chip-icon">🔴</span>
                                <div>
                                    <strong>Peak Seasons</strong>
                                    <small>High Demand</small>
                                </div>
                            </div>
                            <div className="date-chip">
                                <span className="chip-icon">🟡</span>
                                <div>
                                    <strong>Weekends</strong>
                                    <small>Filling fast</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Social proof mini */}
                    <div className="urgency-proofs">
                        {['Rahul booked 2h ago', 'Priya booked yesterday', 'Mehta Corp. confirmed'].map(p => (
                            <div key={p} className="proof-chip">
                                <span className="proof-dot" /> {p}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
