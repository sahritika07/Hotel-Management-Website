"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Linkedin, Twitter, Mail } from "lucide-react"

const employees = [
  {
    id: 1,
    name: "James Wilson",
    position: "General Manager",
    image: "/images/employee-1.jpg",
    description: "With over 15 years in luxury hospitality, James ensures every guest receives exceptional service.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "james@royalhotel.com",
    },
  },
  {
    id: 2,
    name: "Sarah Martinez",
    position: "Head Chef",
    image: "/images/employee-2.jpg",
    description: "Award-winning chef with expertise in international cuisine and innovative culinary experiences.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sarah@royalhotel.com",
    },
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "Concierge Director",
    image: "/images/employee-3.jpg",
    description: "Dedicated to creating personalized experiences and ensuring every guest's needs are exceeded.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "michael@royalhotel.com",
    },
  },
]

export default function Employees() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-amber-600 font-semibold mb-2 tracking-wider uppercase">OUR TEAM</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-playfair">Meet Our Experts</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our dedicated team of professionals is committed to providing you with an unforgettable luxury experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {employees.map((employee, index) => (
            <motion.div
              key={employee.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={employee.image || "/placeholder.svg"}
                  alt={employee.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Social Links Overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute bottom-4 left-4 right-4 flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <a
                    href={employee.social.linkedin}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-amber-600 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={employee.social.twitter}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-amber-600 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${employee.social.email}`}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-amber-600 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1 font-playfair">{employee.name}</h3>
                <p className="text-amber-600 font-semibold mb-3">{employee.position}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{employee.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
