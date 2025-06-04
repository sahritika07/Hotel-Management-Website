"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "../ui/button"


export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/main4.jpg" alt="Elite Stay Hotel" fill className="object-cover opacity-90" priority />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-center lg:text-left ml-4 lg:ml-8"
        >
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight font-serif">
  More Than a Stay 
  <br />
  <span className="text-white">  It’s a Destination !</span>
  <br />


</h1>
  {/* <Button className="bg-yellow-500 text-black hover:bg-yellow-600 text-sm px-4 py-2">Book Now</Button> */}
        </motion.div>

        {/* Right Side - Circular Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center text-white"
        >
          <div className="text-center lg:text-right mb-6 lg:mb-8">
            <p className="text-base lg:text-lg mb-4 px-4 lg:px-0">
              Get Ready for an Adventure! Reserve
              <br className="hidden sm:block" />
              Your Spot Now and Embark on Your
              <br className="hidden sm:block" />
              Elite Journey!
            </p>
          </div>

          {/* Circular Room Image with Labels */}
          <div className="relative">
            <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/20">
              <Image
                src="/images/luxury-room-1.jpg"
                alt="Luxury Room"
                width={320}
                height={320}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Floating Labels */}
            <div className="absolute -top-2 -left-6 sm:-top-4 sm:-left-2 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 sm:px-4 sm:py-2">
              <span className="text-white text-xs sm:text-sm">Enchanting</span>
            </div>
            <div className="absolute top-1/2 -left-8 sm:-left-16 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 sm:px-4 sm:py-2">
              <span className="text-white text-xs sm:text-sm">Unique</span>
            </div>
            <div className="absolute -bottom-2 -left-6 sm:-bottom-4 sm:-left-2 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 sm:px-4 sm:py-2">
              <span className="text-white text-xs sm:text-sm">Rejuvenate</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
