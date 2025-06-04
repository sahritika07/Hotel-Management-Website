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
    avatar: "/images/human1.jpg",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "London, UK",
    rating: 5,
    comment:
      "The attention to detail at Elite Stay Hotel is remarkable. From the elegant decor to the world-class amenities, everything exceeded our expectations. Will definitely return!",
    avatar: "/images/human3.jpg",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    location: "Barcelona, Spain",
    rating: 5,
    comment:
      "Perfect location, amazing food, and outstanding service. The spa treatments were divine and the pool area was like a private oasis. Truly a 5-star experience!",
    avatar: "/images/human2.jpg",
    date: "3 weeks ago",
  },
]

export default function Reviews() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-yellow-500 font-semibold mb-2 tracking-wider uppercase text-sm sm:text-base">TESTIMONIALS</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-playfair">
            What Our Guests Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Read authentic reviews from our valued guests who have experienced the luxury and comfort of Elite Stay Hotel.
          </p>
        </motion.div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-5 sm:p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Stars and Quote */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500 opacity-50" />
              </div>

              {/* Comment */}
              <p className="text-gray-700 mb-6 leading-relaxed italic text-sm sm:text-base">"{review.comment}"</p>

              {/* Reviewer Info */}
              <div className="flex items-center space-x-4">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover w-12 h-12 sm:w-14 sm:h-14"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{review.name}</h4>
                  <p className="text-xs sm:text-sm text-gray-500">{review.location}</p>
                  <p className="text-xs text-gray-400">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-gray-600 mb-4 text-base sm:text-lg">
            Have you stayed with us? We'd love to hear about your experience!
          </p>
          <button className="bg-yellow-500 text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium text-sm sm:text-base hover:bg-yellow-600 transition-colors">
            Write a Review
          </button>
        </motion.div>
      </div>
    </section>
  )
}
