"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

const offers = [
  {
    id: 1,
    title: "Make a date to catch up on missed celebrations and enjoy",
    discount: "Free 0%",
    rating: 4.9,
    reviews: "Reviews",
    price: 250,
    period: "Every 21 Day",
    description:
      "Birthdays, anniversaries, engagements - whatever the milestone, it's be a celebrations fit for royalty.",
    image: "/images/restaurant.jpg",
  },
  {
    id: 2,
    title: "Deluxe bed rooms benefit from a 25% discount when booking in August",
    discount: "25% OFF",
    rating: 4.9,
    reviews: "Reviews",
    price: 590,
    period: "Every 21 Day",
    description:
      "Birthdays, anniversaries, engagements - whatever the milestone, it's be a celebrations fit for royalty.",
    image: "/images/luxury-room-1.jpg",
  },
  {
    id: 3,
    title: "25% Meeting room make a date to catch up on missed celebrations and enjoy",
    discount: "25% OFF",
    rating: 4.9,
    reviews: "Reviews",
    price: 250,
    period: "Every 21 Day",
    description:
      "Birthdays, anniversaries, engagements - whatever the milestone, it's be a celebrations fit for royalty.",
    image: "/images/conference.jpg",
  },
]

export default function Offers() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-900">
      <div className="container mx-auto px-14 lg:px-12 ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="text-yellow-500 font-semibold mb-2 text-sm">STAY MEMORABLE</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Best Offers At Our Hotels</h2>
        </motion.div>

        <div className="space-y-6 lg:space-y-8 m-24 ">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 bg-gray-800 rounded-3xl overflow-hidden"
            >
              {/* Image */}
              <div className="relative  h-40 sm:h-48 lg:h-56 order-1 lg:order-2 m-10">
                <Image src={offer.image || "/placeholder.svg"} alt={offer.title} fill className="object-cover mt-10 "   />
                <div className="absolute top-14 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full font-semibold text-sm">
                  {offer.discount}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8 flex flex-col justify-center order-1 lg:order-2">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-600 mb-4">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-tight">{offer.title}</h3>

                <div className="flex items-center space-x-4 mb-4 flex-wrap gap-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-500 text-yellow-500" />
                    ))}
                    <span className="text-white ml-2 text-sm sm:text-base">
                      {offer.rating} {offer.reviews}
                    </span>
                  </div>
                </div>

                <p className="text-gray-400 mb-6 text-sm sm:text-base leading-relaxed">{offer.description}</p>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <span className="text-2xl sm:text-3xl font-bold text-white">${offer.price}</span>
                    <span className="text-gray-400 ml-2 text-sm sm:text-base">{offer.period}</span>
                  </div>
                  <Button className="bg-yellow-500 text-black hover:bg-yellow-600 w-full sm:w-auto">VIEW OFFER</Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
