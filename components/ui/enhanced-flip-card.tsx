"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

interface Room {
  id: number
  name: string
  price: number
  image: string
  features: string[]
  description: string
}

interface EnhancedFlipCardProps {
  room: Room
}

export default function EnhancedFlipCard({ room }: EnhancedFlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative h-96 w-full perspective-1000"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="relative w-full h-full preserve-3d cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-lg">
          <div className="relative h-full">
            <Image src={room.image || "/placeholder.svg"} alt={room.name} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

            {/* Hover Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/50 flex items-center justify-center"
            >
              <div className="text-center text-white">
                <p className="text-lg font-semibold mb-2">Click to view details</p>
                <div className="flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-amber-400 text-lg font-semibold">${room.price}/ Night</p>
              <h3 className="text-2xl font-bold font-playfair">{room.name}</h3>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-white shadow-lg p-6 flex flex-col justify-between rotate-y-180">
          <div>
            <div className="text-center mb-4">
              <p className="text-amber-600 text-lg font-semibold">${room.price}/Night</p>
              <h3 className="text-xl font-bold text-gray-900 font-playfair">{room.name}</h3>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">{room.description}</p>
            <ul className="space-y-2">
              {room.features.map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <Button className="w-full bg-amber-500 text-black hover:bg-amber-600 mt-4">Book Now</Button>
        </div>
      </motion.div>
    </motion.div>
  )
}
