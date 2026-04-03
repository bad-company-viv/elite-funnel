import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ExitPopup.css";

export default function ExitPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      // Show popup when mouse leaves the top part of the window
      if (e.clientY <= 0 && !localStorage.getItem("exit_popup_shown")) {
        setIsOpen(true);
        localStorage.setItem("exit_popup_shown", "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi Elite Prime Cars! I want a callback.\n\n👤 Name: ${formData.name}\n📧 Email: ${formData.email}\n📞 Phone: ${formData.phone}`
    );
    window.open(`https://wa.me/919920053379?text=${msg}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setIsOpen(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="exit-popup-overlay">
          <motion.div
            className="exit-popup-card"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
          >
            <button className="exit-close" onClick={() => setIsOpen(false)}>✕</button>
            {!submitted ? (
              <>
                <div className="exit-header">
                  <h2 className="exit-title">Wait! Don&apos;t Leave Empty Handed</h2>
                  <p className="exit-subtitle">Get a <span className="gold-text">Free Consultation</span> and special offers on your first booking.</p>
                </div>
                <form className="exit-form" onSubmit={handleSubmit}>
                  <div className="exit-form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="exit-form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="exit-form-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone Number"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-gold w-full exit-btn">
                    Get a Call Back
                  </button>
                </form>
                <p className="exit-footer">🔒 Your information is safe with us.</p>
              </>
            ) : (
              <div className="exit-success">
                <div className="success-icon">✓</div>
                <h3>Thank You!</h3>
                <p>We will get back to you shortly.</p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
