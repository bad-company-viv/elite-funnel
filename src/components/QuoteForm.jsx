import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './QuoteForm.css'

export default function QuoteForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        location: '',
        vehicle: '',
        pickupDate: '',
        dropoffDate: '',
        message: ''
    })

    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // Basic frontend validation (relying on required attributes mostly)
        if (!formData.fullName || !formData.email || !formData.phoneNumber || !formData.location || !formData.message) {
            alert('Please fill in all required fields.')
            return
        }

        // Show success message
        setIsSubmitted(true)

        // WhatsApp redirect
        const text = `Quote Request:\nName: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phoneNumber}\nLocation: ${formData.location}\nVehicle: ${formData.vehicle}\nPickup: ${formData.pickupDate}\nDrop-off: ${formData.dropoffDate}\nMessage: ${formData.message}`
        window.open(`https://wa.me/919529375167?text=${encodeURIComponent(text)}`, '_blank')

        // Reset form after a few seconds
        setTimeout(() => {
            setIsSubmitted(false)
            setFormData({
                fullName: '',
                email: '',
                phoneNumber: '',
                city: '',
                vehicle: '',
                pickupDate: '',
                dropoffDate: '',
                message: ''
            })
            e.target.reset()
        }, 5000)
    }

    return (
        <section id="quote" className="section quote-section">
            <div className="container quote-container">
                <motion.div
                    className="quote-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Request a <span>Quote</span></h2>
                    <p className="quote-subtitle">Fill out the form below and our team will get back to you with a quote.</p>
                </motion.div>

                <motion.form
                    className="quote-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <div className="form-row">
                        <div className="form-group">
                            <label>Full Name *</label>
                            <input type="text" name="fullName" placeholder="Enter your full name" required onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Email *</label>
                            <input type="email" name="email" placeholder="your.email@example.com" required onChange={handleChange} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Phone Number *</label>
                            <input type="tel" name="phoneNumber" placeholder="+91 98765 43210" required onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Location in Pune *</label>
                            <input type="text" name="location" placeholder="e.g. Koregaon Park, Baner..." required onChange={handleChange} />
                        </div>
                    </div>

                    <div className="form-row full-width">
                        <div className="form-group">
                            <label>Preferred Vehicle</label>
                            <select name="vehicle" onChange={handleChange}>
                                <option value="">Select a vehicle (optional)</option>
                                <option value="Mercedes S-Class">Mercedes S-Class</option>
                                <option value="BMW 7 Series">BMW 7 Series</option>
                                <option value="Audi A8">Audi A8</option>
                                <option value="Range Rover">Range Rover</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Pickup Date</label>
                            <input type="date" name="pickupDate" required onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Drop-off Date</label>
                            <input type="date" name="dropoffDate" required onChange={handleChange} />
                        </div>
                    </div>

                    <div className="form-row full-width">
                        <div className="form-group">
                            <label>Message / Special Requirements *</label>
                            <textarea
                                name="message"
                                rows="4"
                                placeholder="Tell us about your requirements, destination, or any special requests..."
                                required
                                onChange={handleChange}
                            ></textarea>
                        </div>
                    </div>

                    {isSubmitted && (
                        <div className="success-message">
                            Thanks! We've received your request and will follow up shortly. Redirecting to WhatsApp...
                        </div>
                    )}

                    <button type="submit" className="submit-btn" disabled={isSubmitted}>
                        {isSubmitted ? 'REQUESTING...' : 'REQUEST QUOTE'}
                    </button>
                </motion.form>
            </div>
        </section>
    )
}
