"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const rooms = [
  {
    id: 1,
    name: "Room with View",
    guests: "3 GUESTS",
    image: "/images/luxury-room-1.jpg",
  },
  {
    id: 2,
    name: "Luxury Room",
    guests: "6 GUESTS",
    image: "/images/luxury-room-2.jpg",
    featured: true,
  },
  {
    id: 3,
    name: "Apartment",
    guests: "5 GUESTS",
    image: "/images/luxury-room-3.jpg",
  },
  {
    id: 4,
    name: "Small Room",
    guests: "1 GUESTS",
    image: "/images/room-deluxe.jpg",
  },
  {
    id: 5,
    name: "Medium Room",
    guests: "4 GUESTS",
    image: "/images/room-executive.jpg",
  },
]

export default function Rooms() {
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
          <p className="text-gray-600 mb-2">Our Room</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            A World Of <span className="text-yellow-500">Choice</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Room with View */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="relative h-48 rounded-2xl overflow-hidden">
              <Image src={rooms[0].image || "/placeholder.svg"} alt={rooms[0].name} fill className="object-cover" />
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">{rooms[0].guests}</p>
              <h3 className="text-xl font-bold text-gray-900">{rooms[0].name}</h3>
            </div>
          </motion.div>

          {/* Luxury Room - Featured Large */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-1 lg:row-span-2 space-y-4"
          >
            <div className="relative h-96 mt-10  lg:h-96 rounded-2xl overflow-hidden">
              <Image src={rooms[1].image || "/placeholder.svg"} alt={rooms[1].name} fill className="object-cover" />
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">{rooms[1].guests}</p>
              <h3 className="text-xl font-bold text-gray-900">{rooms[1].name}</h3>
            </div>
          </motion.div>

          {/* Apartment */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="relative h-48 rounded-2xl overflow-hidden">
              <Image src={rooms[2].image || "/placeholder.svg"} alt={rooms[2].name} fill className="object-cover" />
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">{rooms[2].guests}</p>
              <h3 className="text-xl font-bold text-gray-900">{rooms[2].name}</h3>
            </div>
          </motion.div>

          {/* Small Room */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="relative h-48 rounded-2xl overflow-hidden">
              <Image src={rooms[3].image || "/placeholder.svg"} alt={rooms[3].name} fill className="object-cover" />
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">{rooms[3].guests}</p>
              <h3 className="text-xl font-bold text-gray-900">{rooms[3].name}</h3>
            </div>
          </motion.div>

          {/* Medium Room */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="relative h-48 rounded-2xl overflow-hidden">
              <Image src={rooms[4].image || "/placeholder.svg"} alt={rooms[4].name} fill className="object-cover" />
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">{rooms[4].guests}</p>
              <h3 className="text-xl font-bold text-gray-900">{rooms[4].name}</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
