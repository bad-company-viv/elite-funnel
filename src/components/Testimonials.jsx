import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Testimonials.css'

const TESTIMONIALS = [
    {
        id: 1,
        name: 'Rajesh Sharma',
        occasion: 'Wedding Client',
        location: 'Mumbai',
        text: "Absolutely fantastic experience! The Mercedes E-Class was immaculate and the chauffeur was professional and courteous. Made our wedding day even more special. Highly recommended for anyone looking for luxury car rentals in Mumbai.",
        rating: 5,
        initials: 'RS',
    },
    {
        id: 2,
        name: 'Priya Patel',
        occasion: 'Corporate Client',
        location: 'Pune',
        text: "Excellent service from start to finish. Booked the BMW 7 Series for a corporate event and it exceeded all expectations. The attention to detail and punctuality was remarkable. Will definitely use again!",
        rating: 5,
        initials: 'PP',
    },
    {
        id: 3,
        name: 'Vikram Singh',
        occasion: 'Family Trip',
        location: 'Jaipur',
        text: "The Range Rover was perfect for our family trip to Udaipur. Spacious, comfortable, and the driver knew all the best routes. The entire experience was seamless and luxurious. Worth every penny!",
        rating: 5,
        initials: 'VS',
    },
    {
        id: 4,
        name: 'Anita Desai',
        occasion: 'Corporate Client',
        location: 'Gurgaon',
        text: "Used their services for airport transfers and client meetings. The S-Class is simply the best car for business. Always on time, impeccably maintained vehicles. They understand the meaning of luxury service.",
        rating: 5,
        initials: 'AD',
    },
    {
        id: 5,
        name: 'Amit Malhotra',
        occasion: 'Business Trip',
        location: 'Mumbai',
        text: "Hired the Audi A6 for a week-long business trip. Superb comfort, latest features, and excellent customer service. The team went above and beyond to accommodate our schedule changes.",
        rating: 5,
        initials: 'AM',
    },
    {
        id: 6,
        name: 'Sneha Kapoor',
        occasion: 'Regular Client',
        location: 'Pune',
        text: "My go-to service for luxury car rentals. Have used them multiple times for various occasions. Consistently excellent service, well-maintained fleet, and reasonable pricing for the luxury provided.",
        rating: 5,
        initials: 'SK',
    }
]

export default function Testimonials() {
    const [active, setActive] = useState(0)
    const t = TESTIMONIALS[active]

    return (
        <section id="testimonials" className="section testi-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="badge">◆ Client Stories</span>
                    <h2 className="section-title">
                        What Our <span>Clients Say</span>
                    </h2>
                    <div className="gold-line" />
                    <p className="section-subtitle">Trusted by 500+ clients across Pune for weddings, corporate events, and more</p>
                </motion.div>

                {/* Main Quote */}
                <div className="testi-main">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={t.id}
                            className="testi-card glass-card"
                            initial={{ opacity: 0, y: 30, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.97 }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                        >
                            <div className="quote-mark">"</div>
                            <div className="stars">
                                {Array.from({ length: t.rating }).map((_, i) => (
                                    <span key={i}>★</span>
                                ))}
                            </div>
                            <p className="testi-text">{t.text}</p>
                            <div className="testi-author">
                                <div className="testi-avatar">
                                    <div className="avatar-placeholder">{t.initials}</div>
                                    <div className="avatar-hint">ADD PHOTO</div>
                                </div>
                                <div>
                                    <strong className="author-name">{t.name}</strong>
                                    <span className="author-occasion">{t.occasion}</span>
                                    <span className="author-location">📍 {t.location}</span>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation dots */}
                    <div className="testi-nav">
                        {TESTIMONIALS.map((_, i) => (
                            <button
                                key={i}
                                className={`testi-dot ${i === active ? 'active' : ''}`}
                                onClick={() => setActive(i)}
                                aria-label={`Testimonial ${i + 1}`}
                            />
                        ))}
                    </div>

                    {/* Prev / Next */}
                    <div className="testi-arrows">
                        <button
                            className="arrow-btn"
                            onClick={() => setActive(a => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                        >
                            ←
                        </button>
                        <span className="testi-counter">{active + 1} / {TESTIMONIALS.length}</span>
                        <button
                            className="arrow-btn"
                            onClick={() => setActive(a => (a + 1) % TESTIMONIALS.length)}
                        >
                            →
                        </button>
                    </div>
                </div>

                {/* Avatar strip – placeholder row */}
                <div className="testi-strip">
                    {TESTIMONIALS.map((t2, i) => (
                        <button
                            key={t2.id}
                            className={`strip-avatar ${i === active ? 'strip-active' : ''}`}
                            onClick={() => setActive(i)}
                            title={t2.name}
                        >
                            <span>{t2.initials}</span>
                        </button>
                    ))}
                </div>

                {/* Aggregate rating bar */}
                <motion.div
                    className="rating-bar glass-card"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    <div className="rating-score">
                        <span className="rating-num">5.0</span>
                        <div>
                            <div className="stars" style={{ fontSize: '1.3rem' }}>★★★★★</div>
                            <span className="rating-label">500+ Verified Reviews</span>
                        </div>
                    </div>
                    <div className="rating-bars">
                        {[
                            { label: 'Vehicle Condition', val: 100 },
                            { label: 'Chauffeur Service', val: 98 },
                            { label: 'Punctuality', val: 97 },
                            { label: 'Value for Money', val: 96 },
                        ].map(r => (
                            <div key={r.label} className="rbar-row">
                                <span className="rbar-label">{r.label}</span>
                                <div className="rbar-track">
                                    <motion.div
                                        className="rbar-fill"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${r.val}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                                    />
                                </div>
                                <span className="rbar-val">{r.val}%</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
