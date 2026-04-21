import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ExitPopup.css";

export default function ExitPopup() {
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    const handleMouseLeave = (e) => {
      // Show popup when mouse leaves the top part of the window
      if (e.clientY <= 0 && !localStorage.getItem("exit_popup_shown")) {
        setIsOpen(true);
        localStorage.setItem("exit_popup_shown", "true");
      }
    };

    // Load the embed script
    const script = document.createElement('script')
    script.src = 'https://link.on.bingo/js/form_embed.js'
    script.async = true
    document.body.appendChild(script)

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave)
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    };
  }, []);


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
            <div className="exit-header">
                <h2 className="exit-title">Wait! Don&apos;t Leave Empty Handed</h2>
                <p className="exit-subtitle">Get a <span className="gold-text">Free Consultation</span> and special offers on your first booking.</p>
            </div>
            
            <div className="exit-iframe-container" style={{ minHeight: '450px' }}>
                <iframe
                    src="https://link.on.bingo/widget/form/2T1tDXXywOCY4cQmyDEm"
                    style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
                    id="inline-2T1tDXXywOCY4cQmyDEm" 
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Form 3"
                    data-height="434"
                    data-layout-iframe-id="inline-2T1tDXXywOCY4cQmyDEm"
                    data-form-id="2T1tDXXywOCY4cQmyDEm"
                    title="Form 3"
                ></iframe>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
