"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const reasons = [
  {
    number: 1,
    title: "Provide the best choice of Room.",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.",
  },
  {
    number: 2,
    title: "Low price with Best Quality",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.",
  },
  {
    number: 3,
    title: "Restaurant Service",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.",
  },
]

const reviews = [
  {
    name: "Cody Fisher",
    rating: 4.5,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Albert Flores",
    rating: 4.2,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Devon Lane",
    rating: 4.8,
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why You Should <span className="text-yellow-500">Stay Here</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto px-4">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Reasons */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {reason.number}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Image with Reviews */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative h-56 sm:h-64 lg:h-80 rounded-3xl overflow-hidden">
              <Image src="/images/luxury-room-2.jpg" alt="Hotel Room" fill className="object-cover" />
            </div>

            {/* Floating Review Cards */}
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className={`absolute bg-white rounded-2xl p-3 sm:p-4 shadow-lg ${
                  index === 0
                    ? "top-4 right-4"
                    : index === 1
                      ? "top-1/2 left-4 transform -translate-y-1/2"
                      : "bottom-4 right-4"
                }`}
              >
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Image
                   src="/images/human1.jpg" 
                    alt={review.name}
                    width={32}
                    height={32}
                    className="rounded-full sm:w-10 sm:h-10"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 text-xs sm:text-sm">{review.name}</p>
                    <p className="text-xs text-yellow-500">Give Rating {review.rating}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
