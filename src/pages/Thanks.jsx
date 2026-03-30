import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Thanks() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section style={{ 
      paddingTop: '150px', 
      paddingBottom: '100px', 
      textAlign: 'center', 
      minHeight: '80vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      paddingLeft: '20px',
      paddingRight: '20px'
    }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: '600px' }}
      >
        <div style={{ marginBottom: '2rem' }}>
          <svg style={{ width: '80px', height: '80px', color: 'var(--gold)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h1 style={{ color: 'var(--gold)', fontSize: '3.5rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Thank You!</h1>
        <p style={{ color: 'var(--light-gray)', fontSize: '1.2rem', marginBottom: '2.5rem', lineHeight: '1.6' }}>
          Your request has been successfully submitted. Our premium concierge team will get back to you shortly with a tailored quote.
        </p>
        <Link 
          to="/" 
          style={{ 
            display: 'inline-block', 
            padding: '14px 32px', 
            background: 'var(--gold)', 
            color: 'var(--black)', 
            textDecoration: 'none', 
            fontWeight: '600', 
            borderRadius: '4px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.background = '#fff';
          }}
          onMouseOut={(e) => {
            e.target.style.background = 'var(--gold)';
          }}
        >
          Return to Home
        </Link>
      </motion.div>
    </section>
  )
}
