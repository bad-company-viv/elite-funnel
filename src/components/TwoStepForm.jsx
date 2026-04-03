import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./TwoStepForm.css";

export default function TwoStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pickup: "",
    drop: "",
    date: "",
    occasion: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = (e) => {
    e.preventDefault();
    if (step === 1 && formData.name && formData.email && formData.phone) {
      setStep(2);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi Elite Prime Cars! I'd like to request a quote.\n\n` +
      `👤 Name: ${formData.name}\n` +
      `📧 Email: ${formData.email}\n` +
      `📞 Phone: ${formData.phone}\n` +
      `📍 Pickup: ${formData.pickup}\n` +
      `📍 Drop: ${formData.drop}\n` +
      `📅 Date: ${formData.date}\n` +
      `🎯 Occasion: ${formData.occasion}`
    );
    window.open(`https://wa.me/919920053379?text=${msg}`, "_blank");
  };

  return (
    <section id="quote" className="two-step-section">
      <div className="container">
        <motion.div
          className="form-card glass-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="form-header">
            <h2 className="form-title">Request a <span>Quote</span></h2>
            <p className="form-subtitle">
              {step === 1 
                ? "Step 1: Your Contact Information" 
                : "Step 2: Journey Details"}
            </p>
            <div className="step-indicator">
              <div className={`step-dot ${step >= 1 ? "active" : ""}`}></div>
              <div className="step-line"></div>
              <div className={`step-dot ${step >= 2 ? "active" : ""}`}></div>
            </div>
          </div>

          <form onSubmit={step === 1 ? nextStep : handleSubmit} className="multi-step-form">
            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="form-step"
                >
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-gold w-full mt-4">
                    Next Step →
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="form-step"
                >
                  <div className="form-grid">
                    <div className="form-group">
                      <label>Pickup Location</label>
                      <input
                        type="text"
                        name="pickup"
                        placeholder="Area, City"
                        required
                        value={formData.pickup}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Drop Location</label>
                      <input
                        type="text"
                        name="drop"
                        placeholder="Area, City"
                        required
                        value={formData.drop}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Date of Journey</label>
                      <input
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Occasion</label>
                      <select name="occasion" value={formData.occasion} onChange={handleChange} required>
                        <option value="">Select Occasion</option>
                        <option value="Wedding">Wedding</option>
                        <option value="Corporate">Corporate</option>
                        <option value="Airport">Airport Transfer</option>
                        <option value="Leisure">Leisure</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-actions">
                    <button type="button" onClick={() => setStep(1)} className="btn btn-outline">
                      ← Back
                    </button>
                    <button type="submit" className="btn btn-gold">
                      Get Final Quote
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
