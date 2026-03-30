import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Thanks() {
  useEffect(() => {
    window.scrollTo(0, 0)

    // Google tag (gtag.js)
    const script1 = document.createElement('script')
    script1.async = true
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=AW-18034803211'
    document.head.appendChild(script1)

    const script2 = document.createElement('script')
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-18034803211');
    `
    document.head.appendChild(script2)

    // Google Tag Manager (gtm.js)
    const gtmScript = document.createElement('script')
    gtmScript.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PKS5MBSP');
    `
    document.head.prepend(gtmScript) // Placed as high as possible in head

    const gtmNoscript = document.createElement('noscript')
    gtmNoscript.innerHTML = `
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PKS5MBSP"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `
    document.body.prepend(gtmNoscript) // Placed immediately after body tag

    return () => {
      if (document.head.contains(script1)) document.head.removeChild(script1)
      if (document.head.contains(script2)) document.head.removeChild(script2)
      if (document.head.contains(gtmScript)) document.head.removeChild(gtmScript)
      if (document.body.contains(gtmNoscript)) document.body.removeChild(gtmNoscript)
    }
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
