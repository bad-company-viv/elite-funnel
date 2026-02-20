import { useState } from 'react'
import { motion } from 'framer-motion'
import './BookingFilter.css'

const occasions = ['Wedding', 'Corporate Event', 'Airport Transfer', 'Self Drive', 'Anniversary', 'Other']

export default function BookingFilter() {
    const [form, setForm] = useState({ from: '', to: '', occasion: '', pickup: '' })

    const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

    const whatsappMsg = () => {
        const msg = encodeURIComponent(
            `Hi Elite Prime Cars! I'd like to book a luxury car.\n📅 From: ${form.from}\n📅 To: ${form.to}\n🎯 Occasion: ${form.occasion}\n📍 Pickup: ${form.pickup}`
        )
        window.open(`https://wa.me/919529375167?text=${msg}`, '_blank')
    }

    return (
        <section id="booking" className="booking-section">
            <div className="container">
                <motion.div
                    className="booking-card glass-card"
                    initial={{ opacity: 0, y: 60, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <div className="booking-header">
                        <span className="badge">⚡ Instant Booking</span>
                        <h2 className="booking-title">Check Availability</h2>
                        <p className="booking-sub">Tell us your occasion and dates — we'll confirm your luxury ride instantly</p>
                    </div>

                    <div className="booking-grid">
                        <div className="form-group">
                            <label className="form-label">📅 Pickup Date</label>
                            <input
                                type="date"
                                className="form-input"
                                value={form.from}
                                onChange={e => set('from', e.target.value)}
                                min={new Date().toISOString().split('T')[0]}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">📅 Return Date</label>
                            <input
                                type="date"
                                className="form-input"
                                value={form.to}
                                onChange={e => set('to', e.target.value)}
                                min={form.from || new Date().toISOString().split('T')[0]}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">🎯 Occasion</label>
                            <select
                                className="form-input"
                                value={form.occasion}
                                onChange={e => set('occasion', e.target.value)}
                            >
                                <option value="">Select Occasion</option>
                                {occasions.map(o => (
                                    <option key={o} value={o}>{o}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">📍 Pickup Location</label>
                            <input
                                type="text"
                                placeholder="e.g. Koregaon Park, Pune"
                                className="form-input"
                                value={form.pickup}
                                onChange={e => set('pickup', e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="booking-actions">
                        <motion.button
                            className="btn btn-gold booking-btn"
                            onClick={whatsappMsg}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            💬 Check Availability on WhatsApp
                        </motion.button>
                        <a href="tel:+919529375167" className="btn btn-outline booking-btn">
                            ☎ Call for Instant Quote
                        </a>
                    </div>

                    <div className="booking-badges">
                        <span className="micro-badge">✅ Trained Chauffeurs</span>
                        <span className="micro-badge">✅ 24/7 Support</span>
                        <span className="micro-badge">✅ No Hidden Charges</span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
