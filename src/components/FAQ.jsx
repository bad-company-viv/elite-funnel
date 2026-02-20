import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './FAQ.css'

const faqs = [
    {
        q: 'How do I book a luxury car?',
        a: 'You can book a luxury car by filling out the quote request form on our website, calling us directly at +91 95293 75167, or messaging us on WhatsApp. Our team will get back to you within minutes to confirm your booking.'
    },
    {
        q: 'What cities do you operate in?',
        a: 'We currently operate in Mumbai, Pune, Jaipur, and Gurgaon. We offer both local travel within these cities and outstation trips to nearby destinations.'
    },
    {
        q: 'Are your chauffeurs professional and experienced?',
        a: 'Yes, all our chauffeurs are professionally trained, licensed, and have extensive experience in luxury car services. They undergo regular background checks and training to ensure your safety and comfort.'
    },
    {
        q: 'What is included in the rental price?',
        a: 'Our rental prices include the vehicle, professional chauffeur, fuel for local trips, and basic insurance. For outstation trips, fuel is calculated based on actual distance traveled. Tolls and parking fees are additional.'
    },
    {
        q: 'Can I book a car for airport transfers?',
        a: 'Absolutely! We specialize in airport transfers. Our chauffeurs track flight timings to ensure timely pickup, and they assist with luggage. We offer competitive fixed rates for airport transfers.'
    },
    {
        q: 'How far in advance should I book?',
        a: 'We recommend booking at least 24 hours in advance to ensure availability of your preferred vehicle. However, we also accept last-minute bookings subject to availability. Contact us directly for urgent bookings.'
    },
    {
        q: 'What is your cancellation policy?',
        a: 'You can cancel free of charge up to 24 hours before your scheduled pickup time. Cancellations within 24 hours may be subject to a cancellation fee. Please contact us for specific terms.'
    },
    {
        q: 'Are the vehicles insured?',
        a: 'Yes, all our vehicles are fully insured with comprehensive coverage. This includes insurance for the vehicle, passengers, and third-party liability, ensuring complete peace of mind during your journey.'
    },
    {
        q: 'Can I extend my rental duration?',
        a: 'Yes, you can extend your rental duration subject to vehicle availability. Please inform your chauffeur or contact our support team as early as possible to arrange an extension.'
    },
    {
        q: 'Do you offer monthly or corporate packages?',
        a: 'Yes, we offer special packages for monthly rentals and corporate clients. These packages come with discounted rates and priority booking. Contact us for a customized quote based on your requirements.'
    }
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null)

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section id="faq" className="section faq-section">
            <div className="container faq-container">
                <motion.div
                    className="faq-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="badge">◆ Support</span>
                    <h2 className="section-title">
                        Frequently Asked <span>Questions</span>
                    </h2>
                    <div className="gold-line" />
                    <p className="section-subtitle">Everything you need to know about our luxury rental service.</p>
                </motion.div>

                <div className="faq-list">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index
                        return (
                            <motion.div
                                key={index}
                                className={`faq-item ${isOpen ? 'open' : ''}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                            >
                                <button
                                    className="faq-question"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <span>{faq.q}</span>
                                    <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="faq-answer-wrap"
                                        >
                                            <div className="faq-answer">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
