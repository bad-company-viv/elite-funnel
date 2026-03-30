import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import './QuoteForm.css'

export default function QuoteForm() {
    const navigate = useNavigate()

    useEffect(() => {
        // Load the embed script
        const script = document.createElement('script')
        script.src = 'https://link.on.bingo/js/form_embed.js'
        script.async = true
        document.body.appendChild(script)

        const handleMessage = (e) => {
            // Check for various form submission message formats
            const isSubmit = 
                e.data === 'form-submit' ||
                e.data?.message === 'form-submit' ||
                e.data?.type === 'form-submit' ||
                e.data === 'form-submit-success' ||
                e.data?.message === 'form-submit-success' ||
                e.data?.type === 'form-submit-success' ||
                (typeof e.data === 'string' && e.data.toLowerCase().includes('submit'));

            if (isSubmit) {
                console.log('Form submission detected:', e.data);
                navigate('/thanks')
            }
        }

        window.addEventListener('message', handleMessage)

        return () => {
            // Cleanup script on unmount
            document.body.removeChild(script)
            window.removeEventListener('message', handleMessage)
        }
    }, [navigate])

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

                <motion.div
                    className="quote-form-embed"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <iframe
                        src="https://link.on.bingo/widget/form/NEnevuLGhMH3JQC1uYS7"
                        style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
                        id="inline-NEnevuLGhMH3JQC1uYS7"
                        data-layout="{'id':'INLINE'}"
                        data-trigger-type="alwaysShow"
                        data-trigger-value=""
                        data-activation-type="alwaysActivated"
                        data-activation-value=""
                        data-deactivation-type="neverDeactivate"
                        data-deactivation-value=""
                        data-form-name="Premium Funnel"
                        data-height="629"
                        data-layout-iframe-id="inline-NEnevuLGhMH3JQC1uYS7"
                        data-form-id="NEnevuLGhMH3JQC1uYS7"
                        title="Premium Funnel"
                    ></iframe>
                </motion.div>
            </div>
        </section>
    )
}
