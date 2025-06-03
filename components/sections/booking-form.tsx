"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Crown, Calendar, Bed, Car, Coffee, Dumbbell, UtensilsCrossed, MapPin } from "lucide-react"
import Image from "next/image"

export default function BookingForm() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/hero-luxury.jpg" alt="Hotel Background" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 lg:mb-12"
        >
          <p className="text-yellow-500 font-semibold mb-2 tracking-wider uppercase text-sm">HOTEL RESERVATION</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-playfair">Booking Form</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base lg:text-lg px-4">
            Reserve your perfect stay at the Elite Stay. Experience luxury and comfort like never before.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Transparent Form Container */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 lg:p-8 border border-white/20">
            <form className="space-y-6 lg:space-y-8">
              {/* Guest Information Section */}
              <div>
                <div className="flex items-center mb-4 lg:mb-6">
                  <Crown className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-500 mr-2" />
                  <h3 className="text-lg lg:text-xl font-semibold text-white">Guest Information</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name <span className="text-yellow-500">*</span>
                    </label>
                    <Input
                      type="text"
                      placeholder="Enter first name"
                      className="bg-white/20 border-white/30 text-white placeholder:text-gray-400 focus:border-yellow-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name <span className="text-yellow-500">*</span>
                    </label>
                    <Input
                      type="text"
                      placeholder="Enter last name"
                      className="bg-white/20 border-white/30 text-white placeholder:text-gray-400 focus:border-yellow-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address <span className="text-yellow-500">*</span>
                    </label>
                    <Input
                      type="email"
                      placeholder="Enter email"
                      className="bg-white/20 border-white/30 text-white placeholder:text-gray-400 focus:border-yellow-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number <span className="text-yellow-500">*</span>
                    </label>
                    <Input
                      type="tel"
                      placeholder="Enter phone"
                      className="bg-white/20 border-white/30 text-white placeholder:text-gray-400 focus:border-yellow-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Country</label>
                    <Select>
                      <SelectTrigger className="bg-white/20 border-white/30 text-white">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Booking Details Section */}
              <div>
                <div className="flex items-center mb-4 lg:mb-6">
                  <Calendar className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-500 mr-2" />
                  <h3 className="text-lg lg:text-xl font-semibold text-white">Booking Details</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Check In Date <span className="text-yellow-500">*</span>
                    </label>
                    <Input type="date" className="bg-white/20 border-white/30 text-white focus:border-yellow-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Check Out Date <span className="text-yellow-500">*</span>
                    </label>
                    <Input type="date" className="bg-white/20 border-white/30 text-white focus:border-yellow-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Adults <span className="text-yellow-500">*</span>
                    </label>
                    <Select>
                      <SelectTrigger className="bg-white/20 border-white/30 text-white">
                        <SelectValue placeholder="Select adults" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Adult</SelectItem>
                        <SelectItem value="2">2 Adults</SelectItem>
                        <SelectItem value="3">3 Adults</SelectItem>
                        <SelectItem value="4">4+ Adults</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Children</label>
                    <Select>
                      <SelectTrigger className="bg-white/20 border-white/30 text-white">
                        <SelectValue placeholder="Select children" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">No Children</SelectItem>
                        <SelectItem value="1">1 Child</SelectItem>
                        <SelectItem value="2">2 Children</SelectItem>
                        <SelectItem value="3">3+ Children</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Room Preferences Section */}
              <div>
                <div className="flex items-center mb-4 lg:mb-6">
                  <Bed className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-500 mr-2" />
                  <h3 className="text-lg lg:text-xl font-semibold text-white">Room Preferences</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Room Type <span className="text-yellow-500">*</span>
                    </label>
                    <Select>
                      <SelectTrigger className="bg-white/20 border-white/30 text-white">
                        <SelectValue placeholder="Select room type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standard Room</SelectItem>
                        <SelectItem value="deluxe">Deluxe Room</SelectItem>
                        <SelectItem value="suite">Executive Suite</SelectItem>
                        <SelectItem value="presidential">Presidential Suite</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Bed Type</label>
                    <Select>
                      <SelectTrigger className="bg-white/20 border-white/30 text-white">
                        <SelectValue placeholder="Select bed type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single">Single Bed</SelectItem>
                        <SelectItem value="double">Double Bed</SelectItem>
                        <SelectItem value="queen">Queen Bed</SelectItem>
                        <SelectItem value="king">King Bed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Number of Rooms</label>
                    <Select>
                      <SelectTrigger className="bg-white/20 border-white/30 text-white">
                        <SelectValue placeholder="Select rooms" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Room</SelectItem>
                        <SelectItem value="2">2 Rooms</SelectItem>
                        <SelectItem value="3">3 Rooms</SelectItem>
                        <SelectItem value="4">4+ Rooms</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Special Requests</label>
                <textarea
                  className="w-full bg-white/20 border border-white/30 rounded-lg p-3 h-24 resize-none text-white placeholder:text-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Any special requests or requirements..."
                />
              </div>

              {/* Additional Services */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Additional Services</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                  {[
                    { icon: Car, label: "Airport Transfer" },
                    { icon: UtensilsCrossed, label: "Laundry Service" },
                    { icon: Dumbbell, label: "Spa Services" },
                    { icon: Car, label: "Car Rental" },
                    { icon: Coffee, label: "Room Service" },
                    { icon: MapPin, label: "Tour Guide" },
                  ].map((service, index) => (
                    <label key={index} className="flex items-center space-x-2 text-white cursor-pointer">
                      <input
                        type="checkbox"
                        className="rounded border-white/30 text-yellow-500 focus:ring-yellow-500"
                      />
                      <service.icon className="w-4 h-4" />
                      <span className="text-sm">{service.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <Button className="bg-yellow-500 text-black hover:bg-yellow-600 px-8 lg:px-12 py-3 text-lg font-semibold w-full sm:w-auto">
                  Complete Booking
                </Button>
                <p className="text-gray-400 text-xs mt-3">By booking, you agree to our terms and conditions</p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
