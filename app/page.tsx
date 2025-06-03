"use client"

import { useEffect } from "react"
import Header from "@/components/layout/header"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Rooms from "@/components/sections/rooms"
import Services from "@/components/sections/services"
import WhyChooseUs from "@/components/sections/why-choose-us"
import Achievements from "@/components/sections/achievements"
import Offers from "@/components/sections/offers"
import Blogs from "@/components/sections/blogs"
import Reviews from "@/components/sections/reviews"
import BookingForm from "@/components/sections/booking-form"
import Contact from "@/components/sections/contact"
import Footer from "@/components/layout/footer"

export default function HomePage() {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash) {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    // Handle initial hash on page load
    handleHashChange()

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange)

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="rooms">
        <Rooms />
      </section>
      <WhyChooseUs />
      <section id="services">
        <Services />
      </section>
      <Achievements />
      <Offers />
      <Blogs />
      <section id="reviews">
        <Reviews />
      </section>
      <section id="booking">
        <BookingForm />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  )
}
