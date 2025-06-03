"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, Users, Award, Clock } from "lucide-react"

export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-80 lg:h-96 rounded-3xl overflow-hidden">
              <Image src="/images/hero-luxury.jpg" alt="Hotel Luxury" fill className="object-cover" />
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500">15+</div>
                <div className="text-xs text-gray-600">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <p className="text-yellow-500 font-semibold mb-2 tracking-wider uppercase">ABOUT US</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-playfair">
                Luxury Redefined for the Modern Traveler
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                At Elite Stay Hotel, we believe that luxury is not just about opulent surroundings, but about creating
                unforgettable experiences that resonate with your soul. Our commitment to excellence has made us a
                premier destination for discerning travelers worldwide.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">4.9</div>
                  <div className="text-sm text-gray-600">Guest Rating</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">50K+</div>
                  <div className="text-sm text-gray-600">Happy Guests</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">25+</div>
                  <div className="text-sm text-gray-600">Awards Won</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Service</div>
                </div>
              </div>
            </div>

            <Button className="bg-yellow-500 text-black hover:bg-yellow-600 px-8 py-3">Learn More About Us</Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
