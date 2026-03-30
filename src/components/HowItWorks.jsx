import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './HowItWorks.css'

export default function HowItWorks() {
    const containerRef = useRef(null)

    // Animate the central line height based on scroll
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    })

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

    const steps = [
        {
            number: '01',
            title: 'Choose Your Ride',
            desc: 'Browse our luxurious fleet and select the perfect vehicle for your specific occasion or business needs.',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
                    <polyline points="17 2 12 7 7 2" />
                </svg>
            )
        },
        {
            number: '02',
            title: 'Confirm Details',
            desc: 'Connect with our team instantly via WhatsApp or phone to finalize dates, requirements, and secure your booking.',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
            )
        },
        {
            number: '03',
            title: 'Enjoy the Journey',
            desc: 'Your meticulously prepared vehicle and professional chauffeur will arrive precisely on time. Relax and enjoy.',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
            )
        }
    ]

    return (
        <section id="how-it-works" className="section hiw-section">
            <div className="container" ref={containerRef}>
                <motion.div
                    className="hiw-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="badge">◆ Our Process</span>
                    <h2 className="section-title">
                        Seamless <span>Booking Experience</span>
                    </h2>
                    <div className="gold-line" />
                    <p className="section-subtitle">Reserve your ultimate luxury experience in three simple steps.</p>
                </motion.div>

                <div className="hiw-timeline">
                    {/* The Background Line */}
                    <div className="timeline-line">
                        {/* The Animated Fill Line */}
                        <motion.div className="timeline-progress" style={{ scaleY }} />
                    </div>

                    {steps.map((step, index) => {
                        const isEven = index % 2 === 0
                        return (
                            <div key={step.number} className={`hiw-step ${isEven ? 'step-left' : 'step-right'}`}>
                                <motion.div
                                    className="step-content"
                                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, type: 'spring', bounce: 0.3 }}
                                >
                                    <div className="step-number">{step.number}</div>
                                    <h3 className="step-title">{step.title}</h3>
                                    <p className="step-desc">{step.desc}</p>
                                </motion.div>

                                <motion.div
                                    className="step-node"
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
                                >
                                    <span className="step-icon">{step.icon}</span>
                                </motion.div>
                            </div>
                        )
                    })}
                </div>

                <motion.div
                    className="hiw-cta-wrap"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                >
                    <a href="/#fleet" className="btn btn-gold btn-lg hiw-cta">
                        View Fleet
                    </a>
                </motion.div>

                <motion.div
                    className="hiw-hero-banner"
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >
                    <video
                        className="hiw-hero-banner__video"
                        src="/helicopter.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        aria-hidden="true"
                    />
                    <div className="hiw-hero-banner__content">
                        <h3 className="hiw-hero-banner__text">For those who have arrived early in life.</h3>
                        <a 
                            href="https://wa.me/919529375167?text=Hi%2C%20I%27m%20interested%20in%20your%20exclusive%20luxury%20car%20services" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn btn-gold hiw-hero-banner__cta"
                        >
                            By Invite Only
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
