import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BookingFilter from './components/BookingFilter'
import CarShowcase from './components/CarShowcase'
import QuoteForm from './components/QuoteForm'
import HowItWorks from './components/HowItWorks'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import UrgencyBanner from './components/UrgencyBanner'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ background: 'var(--black)', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <BookingFilter />
      <CarShowcase />
      <QuoteForm />
      <HowItWorks />
      <WhyUs />
      <Testimonials />
      <UrgencyBanner />
      <FAQ />
      <Footer />
      <a
        href="https://wa.me/919529375167?text=Hi%2C%20I%20want%20to%20book%20a%20luxury%20car%20in%20Pune"
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp-link"
        aria-label="Chat on WhatsApp"
      >
        <img src="/whatsapp.webp" alt="WhatsApp" className="floating-whatsapp-image" />
      </a>
    </div>
  )
}
