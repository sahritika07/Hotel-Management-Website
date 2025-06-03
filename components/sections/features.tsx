"use client"

import { motion } from "framer-motion"
import { Bed, Waves, Building, SpadeIcon as Spa, UtensilsCrossed, Gift } from "lucide-react"

const features = [
  {
    icon: Bed,
    title: "Quality Room",
    description: "Luxuriously appointed rooms with premium amenities and stunning city views for ultimate comfort.",
  },
  {
    icon: Waves,
    title: "Private Beach",
    description: "Exclusive access to pristine private beaches with crystal clear waters and golden sand.",
  },
  {
    icon: Building,
    title: "Best Accommodation",
    description: "World-class accommodations featuring elegant design and state-of-the-art facilities.",
  },
  {
    icon: Spa,
    title: "Wellness & Spa",
    description: "Rejuvenate your body and soul with our premium spa treatments and wellness programs.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants & Bars",
    description: "Exquisite dining experiences with world-renowned chefs and premium beverage selections.",
  },
  {
    icon: Gift,
    title: "Special Offers",
    description: "Exclusive packages and seasonal offers designed to enhance your luxury experience.",
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-amber-600 font-semibold mb-2 tracking-wider uppercase">HOTEL FACILITIES</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-playfair">
            Relax with Premium Facilities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover our exceptional amenities designed to provide you with the ultimate luxury experience during your
            stay.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                index === 0 ? "bg-teal-700 text-white" : "bg-white"
              }`}
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                  index === 0 ? "bg-amber-400" : "bg-amber-100"
                }`}
              >
                <feature.icon className={`w-8 h-8 ${index === 0 ? "text-black" : "text-amber-600"}`} />
              </div>
              <h3 className={`text-xl font-bold mb-4 ${index === 0 ? "text-white" : "text-gray-900"}`}>
                {feature.title}
              </h3>
              <p className={`leading-relaxed ${index === 0 ? "text-gray-200" : "text-gray-600"}`}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
