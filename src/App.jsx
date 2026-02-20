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
    </div>
  )
}
