import { motion } from 'framer-motion'
import './WhyUs.css'

const FEATURES = [
    {
        icon: '🏆',
        title: 'Premium Fleet Only',
        desc: 'We operate exclusively in S, 7, A8, and Range Rover class — no compromise on luxury.',
    },
    {
        icon: '👨‍✈️',
        title: 'Trained Chauffeurs',
        desc: 'Professionally dressed, background-verified, punctual chauffeurs familiar with all Pune routes.',
    },
    {
        icon: '📍',
        title: 'Pan-Pune Coverage',
        desc: 'Any venue, hotel, airport, or destination across Pune, PCMC, and beyond.',
    },
    {
        icon: '🕐',
        title: '24/7 Availability',
        desc: 'Early-morning airport runs or late-night wedding exits — we are always on call for you.',
    },
    {
        icon: '📵',
        title: 'No Hidden Charges',
        desc: 'Transparent pricing upfront. What we quote is what you pay — always.',
    },
    {
        icon: '🛡',
        title: 'Fully Insured Vehicles',
        desc: 'Every vehicle in our fleet is comprehensively insured and regularly serviced.',
    },
]

export default function WhyUs() {
    return (
        <section id="why-us" className="section why-section">
            <div className="why-bg" />
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="badge">◆ Why Choose Us</span>
                    <h2 className="section-title">
                        The Elite Prime <span>Difference</span>
                    </h2>
                    <div className="gold-line" />
                    <p className="section-subtitle">Every detail crafted for your comfort, safety, and prestige</p>
                </motion.div>

                <div className="why-grid">
                    {FEATURES.map((f, i) => (
                        <motion.div
                            key={f.title}
                            className="why-card glass-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            whileHover={{ y: -6, borderColor: 'rgba(201,168,76,0.4)' }}
                        >
                            <div className="why-icon">{f.icon}</div>
                            <h3 className="why-title">{f.title}</h3>
                            <p className="why-desc">{f.desc}</p>
                            <div className="why-line" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
