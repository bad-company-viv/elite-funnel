import './Footer.css'

export default function Footer() {
    const year = new Date().getFullYear()

    const occasions = ['Wedding Car Rental', 'Corporate Car Rental', 'Airport Transfer Pune', 'Anniversary Car Rental', 'Outstation Luxury Trips']
    const fleet = ['Mercedes S-Class Pune', 'BMW 7 Series Pune', 'Audi A8 Rental Pune', 'Range Rover Rental Pune']
    const areas = ['Koregaon Park', 'Kalyani Nagar', 'Viman Nagar', 'Baner', 'Hinjewadi', 'Wakad', 'Kharadi', 'Camp Area']

    return (
        <footer id="contact" className="footer">
            <div className="footer-top-line" />

            {/* CTA Strip */}
            <div className="footer-cta-strip">
                <div className="container footer-cta-inner">
                    <div>
                        <h3 className="footer-cta-title">Ready to Drive in Style?</h3>
                        <p className="footer-cta-sub">Book your luxury car today. Response within 10 minutes.</p>
                    </div>
                    <div className="footer-cta-buttons">
                        <a
                            href="https://wa.me/919529375167?text=Hi%2C%20I%20want%20to%20book%20a%20luxury%20car%20in%20Pune"
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-gold"
                        >
                            WhatsApp Us
                        </a>
                        <a href="tel:+919920053379" className="btn btn-outline">
                            ☎ +91 9920053379
                        </a>
                    </div>
                </div>
            </div>

            <div className="container footer-grid">
                {/* Brand */}
                <div className="footer-brand">
                    <div className="footer-logo">
                        <img
                            src="/elite-logo-2.png"
                            alt="Elite Prime Cars"
                            className="footer-logo-image"
                        />
                    </div>
                    <p className="footer-tagline">
                        Pune's most trusted luxury car rental service. Chauffeur-driven elegance for every occasion.
                    </p>
                    <div className="footer-contact">
                        <a href="tel:+919529375167" className="footer-contact-item">
                            <span>☎</span> +91 9920053379
                        </a>
                        <a href="mailto:book@eliteprimecars.com" className="footer-contact-item footer-contact-item--mail">
                            <span id='mail'>✉</span> book@eliteprimecars.com
                        </a>
                        <div className="footer-contact-item">
                            <span>📍</span> Pune, Maharashtra, India
                        </div>
                    </div>
                    <div className="footer-social">
                        <a href="#" className="social-btn" aria-label="Instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                        <a href="#" className="social-btn" aria-label="Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                        <a href="https://wa.me/919529375167" target="_blank" rel="noreferrer" className="social-btn" aria-label="WhatsApp">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                        </a>
                        <a href="#" className="social-btn" aria-label="YouTube">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Occasions */}
                <div className="footer-col">
                    <h4 className="footer-col-title">Occasions</h4>
                    <ul className="footer-links">
                        {occasions.map(o => <li key={o}><a href="#booking">{o}</a></li>)}
                    </ul>
                </div>

                {/* Fleet */}
                <div className="footer-col">
                    <h4 className="footer-col-title">Our Fleet</h4>
                    <ul className="footer-links">
                        {fleet.map(f => <li key={f}><a href="#fleet">{f}</a></li>)}
                    </ul>
                </div>


            </div>

            <div className="footer-bottom">
                <div className="container footer-bottom-inner">
                    <p className="footer-copyright">
                        © {year} Elite Prime Cars. All rights reserved.
                        &nbsp;·&nbsp; Luxury Car Rentals in Pune
                    </p>
                    <div className="footer-right-section">
                        <p className="footer-legal">
                            <a href="#">Privacy Policy</a>
                            &nbsp;·&nbsp;
                            <a href="#">Terms of Service</a>
                        </p>
                        {/* Credit Section */}
                        <div className="footer-credit">
                            <a
                                href="https://fabulousmedia.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="credit-link"
                                aria-label="FabulousMedia"
                            >
                                <img
                                    src="https://play.fabulousmedia.in/sitecredit/images/fabulousmedia.svg"
                                    alt="FabulousMedia"
                                    className="credit-logo"
                                    loading="lazy"
                                    width="80"
                                    height="12"
                                />
                            </a>
                            <div className="credit-divider"></div>
                            <a
                                href="https://gocommercially.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="credit-link"
                                aria-label="GoCommercially"
                            >
                                <img
                                    src="https://play.fabulousmedia.in/sitecredit/images/gocommercially.svg"
                                    alt="GoCommercially"
                                    className="credit-logo"
                                    loading="lazy"
                                    width="80"
                                    height="12"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
