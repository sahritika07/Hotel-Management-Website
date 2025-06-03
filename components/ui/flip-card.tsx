"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface Room {
  id: number
  name: string
  price: number
  image: string
  features: string[]
  description: string
}

interface FlipCardProps {
  room: Room
}

export default function FlipCard({ room }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className="relative h-96 w-full perspective-1000">
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
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-rose-400 text-lg">${room.price}/ Night</p>
              <h3 className="text-2xl font-bold">{room.name}</h3>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-white shadow-lg p-6 flex flex-col justify-between rotate-y-180">
          <div>
            <div className="text-center mb-4">
              <p className="text-rose-500 text-lg font-semibold">${room.price}/Night</p>
              <h3 className="text-xl font-bold text-gray-900">{room.name}</h3>
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
          <Button className="w-full bg-rose-400 text-white hover:bg-rose-500 mt-4">Book Now</Button>
        </div>
      </motion.div>
    </div>
  )
}
