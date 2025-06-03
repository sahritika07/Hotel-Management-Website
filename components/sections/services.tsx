"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Waves, UtensilsCrossed, Dumbbell, Car, Wifi, Coffee } from "lucide-react"

const services = [
  {
    icon: Waves,
    title: "Swimming Pool",
    description:
      "Dive into luxury with our pristine swimming pool featuring crystal-clear waters and poolside service.",
    image: "/images/pool.jpg",
  },
  {
    icon: UtensilsCrossed,
    title: "Fine Dining",
    description: "Experience culinary excellence with our world-class restaurants serving international cuisine.",
    image: "/images/restaurant.jpg",
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    description: "Stay fit and healthy with our state-of-the-art gym equipment and personal training services.",
    image: "/images/gym.jpg",
  },
  {
    icon: Car,
    title: "Valet Parking",
    description: "Enjoy hassle-free parking with our professional valet service available 24/7.",
    image: "/images/spa.jpg",
  },
  {
    icon: Wifi,
    title: "Free Wi-Fi",
    description: "Stay connected with complimentary high-speed internet access throughout the property.",
    image: "/images/conference.jpg",
  },
  {
    icon: Coffee,
    title: "Room Service",
    description: "Indulge in 24-hour room service with an extensive menu delivered to your door.",
    image: "/images/wedding.jpg",
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-yellow-500 font-semibold mb-2 tracking-wider uppercase">OUR SERVICES</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-playfair">Premium Hotel Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover our comprehensive range of luxury services designed to make your stay exceptional and memorable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-black" />
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2 font-playfair">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
