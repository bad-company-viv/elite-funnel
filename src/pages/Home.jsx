import React from 'react'
import Hero from '../components/Hero'
import BookingFilter from '../components/BookingFilter'
import CarShowcase from '../components/CarShowcase'
import QuoteForm from '../components/QuoteForm'
import HowItWorks from '../components/HowItWorks'
import WhyUs from '../components/WhyUs'
import Testimonials from '../components/Testimonials'
import UrgencyBanner from '../components/UrgencyBanner'
import FAQ from '../components/FAQ'

export default function Home() {
  return (
    <>
      <Hero />
      <BookingFilter />
      <CarShowcase />
      <QuoteForm />
      <HowItWorks />
      <WhyUs />
      <Testimonials />
      <UrgencyBanner />
      <FAQ />
    </>
  )
}
