import './index.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Thanks from './pages/Thanks'
import Footer from './components/Footer'
import ExitPopup from './components/ExitPopup'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div style={{ background: 'var(--black)', minHeight: '100vh' }}>
      <Navbar />
      <ExitPopup />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
      <Footer />
      <a
        href="https://wa.me/919920053379?text=Hi%2C%20I%20want%20to%20book%20a%20luxury%20car%20in%20Pune"
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
