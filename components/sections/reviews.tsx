"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star, Quote } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    comment:
      "Absolutely stunning hotel! The service was impeccable and the rooms were luxurious. The staff went above and beyond to make our stay memorable. Highly recommend!",
    avatar: "/placeholder.svg?height=60&width=60",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "London, UK",
    rating: 5,
    comment:
      "The attention to detail at Royal Hotel is remarkable. From the elegant decor to the world-class amenities, everything exceeded our expectations. Will definitely return!",
    avatar: "/placeholder.svg?height=60&width=60",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    location: "Barcelona, Spain",
    rating: 5,
    comment:
      "Perfect location, amazing food, and outstanding service. The spa treatments were divine and the pool area was like a private oasis. Truly a 5-star experience!",
    avatar: "/placeholder.svg?height=60&width=60",
    date: "3 weeks ago",
  },
]

export default function Reviews() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-yellow-500 font-semibold mb-2 tracking-wider uppercase">TESTIMONIALS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-playfair">What Our Guests Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Read authentic reviews from our valued guests who have experienced the luxury and comfort of Royal Hotel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-4 lg:p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-yellow-500 opacity-50" />
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">"{review.comment}"</p>

              <div className="flex items-center space-x-4">
                <Image
                  src={review.avatar || "/placeholder.svg"}
                  alt={review.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.location}</p>
                  <p className="text-xs text-gray-400">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">Have you stayed with us? We'd love to hear about your experience!</p>
          <button className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
            Write a Review
          </button>
        </motion.div>
      </div>
    </section>
  )
}
