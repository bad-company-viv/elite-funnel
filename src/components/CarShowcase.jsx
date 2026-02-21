import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import "./CarShowcase.css";

const GOLD_ACCENT = "#ffd447";

const CARS = [
  {
    id: 1,
    name: "Mercedes E-Class",
    tagline: "The Pinnacle of Luxury",
    price: "₹8,000",
    unit: "/ day",
    features: [
      "Chauffeur Driven",
      "Massaging Seats",
      "Panoramic Sunroof",
      "Burmester Sound",
    ],
    badge: "Most Booked",
    badgeColor: GOLD_ACCENT,
    occasions: ["Wedding", "Corporate", "Airport"],
    image: "/images/merc-E.png",
  },
  {
    id: 2,
    name: "BMW 7 Series",
    tagline: "Sheer Driving Pleasure",
    price: "₹7,500",
    unit: "/ day",
    features: [
      "Executive Package",
      "Sky Lounge Roof",
      "Bowers & Wilkins Audio",
      "Gesture Control",
    ],
    badge: "Premium",
    badgeColor: "#b0b0b0",
    occasions: ["Corporate", "Wedding", "Self Drive"],
    image: "/images/bmw.png",
  },
  {
    id: 3,
    name: "Audi A6",
    tagline: "Intelligence Meets Elegance",
    price: "₹7,000",
    unit: "/ day",
    features: [
      "Quattro AWD",
      "Rear Seat Entertainment",
      "Matrix LED",
      "Bang & Olufsen",
    ],
    badge: "Top Rated",
    badgeColor: GOLD_ACCENT,
    occasions: ["Corporate", "Airport", "Wedding"],
    image: "/images/AUDI-a6.png",
  },
  {
    id: 4,
    name: "Rolls Royce",
    tagline: "Above & Beyond",
    price: "₹9,000",
    unit: "/ day",
    features: [
      "Terrain Response",
      "Meridian Sound",
      '23" Wheels',
      "Air Suspension",
    ],
    badge: "Exclusive",
    badgeColor: GOLD_ACCENT,
    occasions: ["Wedding", "Adventure", "Corporate"],
    image: "/images/rolls-royce.png",
  },
];

export default function CarShowcase() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Wedding", "Corporate", "Airport", "Self Drive"];

  const visible =
    activeFilter === "All"
      ? CARS
      : CARS.filter((c) => c.occasions.includes(activeFilter));

  return (
    <section id="fleet" className="section fleet-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="badge">◆ Our Fleet</span>
          <h2 className="section-title">
            Premium <span>Car Collection</span>
          </h2>
          <div className="gold-line" />
          <p className="section-subtitle">
            Hand-selected, meticulously maintained luxury vehicles for every
            occasion
          </p>
        </motion.div>

        {/* Filters */}
        <div className="fleet-filters">
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-btn ${activeFilter === f ? "active" : ""}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="cars-grid">
          <AnimatePresence mode="popLayout">
            {visible.map((car, i) => {
              const isHighlighted = car.badge === "Exclusive";

              return (
                <motion.div
                  key={car.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Tilt
                    tiltMaxAngleX={8}
                    tiltMaxAngleY={8}
                    glareEnable={true}
                    glareMaxOpacity={0.08}
                    glareColor={GOLD_ACCENT}
                    glareBorderRadius="var(--radius-lg)"
                    scale={1.02}
                    transitionSpeed={500}
                    className={`car-card ${isHighlighted ? "car-card--highlight" : ""}`}
                  >
                    {/* Badge */}
                    <div
                      className="car-badge"
                      style={{ background: car.badgeColor }}
                    >
                      {car.badge}
                    </div>

                    {/* Image placeholder */}
                    <div className="car-img-wrap">
                      <img src={car.image} alt={car.name} className="car-img" />
                      <div className="car-img-shimmer" />
                    </div>

                    <div className="car-body">
                      <div className="car-meta">
                        <div>
                          <h3 className="car-name">{car.name}</h3>
                          <p className="car-tagline">{car.tagline}</p>
                        </div>
                        {/* <div className="car-price-wrap">
                                                    <span className="car-from">from</span>
                                                    <span className="car-price">{car.price}</span>
                                                    <span className="car-unit">{car.unit}</span>
                                                </div> */}
                      </div>

                      <ul className="car-features">
                        {car.features.map((f) => (
                          <li key={f}>
                            <span className="feature-dot" />
                            {f}
                          </li>
                        ))}
                      </ul>

                      <div className="car-occasions">
                        {car.occasions.map((o) => (
                          <span key={o} className="occasion-tag">
                            {o}
                          </span>
                        ))}
                      </div>

                      <div className="car-ctas">
                        <a
                          href={`https://wa.me/919529375167?text=Hi%2C%20I%20want%20to%20book%20${encodeURIComponent(car.name)}%20for%20my%20occasion`}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-gold car-btn"
                        >
                          Book Now
                        </a>
                        <a
                          href="tel:+919529375167"
                          className="btn btn-outline car-btn"
                        >
                          Call
                        </a>
                      </div>
                    </div>
                  </Tilt>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
