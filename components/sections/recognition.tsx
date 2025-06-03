"use client"

import { motion } from "framer-motion"
import { Award, Trophy, Star, Medal } from "lucide-react"

const awards = [
  {
    id: 1,
    year: "2024",
    title: "Luxury Stay Award",
    description: "Recognized for exceptional luxury accommodations and world-class service standards.",
    icon: Award,
  },
  {
    id: 2,
    year: "2023",
    title: "Top Hospitality Innovator",
    description: "Leading innovation in hospitality technology and guest experience enhancement.",
    icon: Trophy,
  },
  {
    id: 3,
    year: "2022",
    title: "Ultimate Comfort Award",
    description: "Excellence in providing unmatched comfort and luxury amenities to our guests.",
    icon: Star,
  },
  {
    id: 4,
    year: "2021",
    title: "Outstanding Hospitality Award",
    description: "Exceptional service delivery and commitment to guest satisfaction excellence.",
    icon: Medal,
  },
]

export default function Recognition() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 bg-amber-500 rounded-full" />
          </div>
          <p className="text-amber-600 font-semibold mb-2 tracking-wider uppercase">OUR ACHIEVEMENTS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-playfair">
            Proudly Recognized for Excellence
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our commitment to excellence has been recognized by prestigious hospitality organizations worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-6 p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300"
            >
              {/* Award Badge */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-amber-200">
                    <award.icon className="w-8 h-8 text-amber-600" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-amber-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                    {award.year}
                  </div>
                </div>
              </div>

              {/* Award Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900 font-playfair">{award.title}</h3>
                  <span className="text-2xl font-bold text-gray-400">{award.year}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{award.description}</p>

                {/* Stars */}
                <div className="flex items-center mt-3">
                  {[...Array(3)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400 mr-1" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
