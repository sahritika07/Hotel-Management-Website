"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, ArrowRight, User } from "lucide-react"

const blogs = [
  {
    id: 1,
    title: "How to Book a Hotel: Tips for a Hassle-Free Experience",
    excerpt: "Discover the best practices for booking your perfect hotel stay and avoid common pitfalls.",
    image: "/images/blog-1.jpg",
    date: "Jan 10, 2025",
    author: "Hotel Expert",
    category: "Booking Tips",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "A Guide to Choosing the Perfect Room Type for Your Stay",
    excerpt: "Learn how to select the ideal room that matches your needs, preferences, and budget.",
    image: "/images/main4.jpg",
    date: "Jan 09, 2025",
    author: "Travel Advisor",
    category: "Luxury Room",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "How Hotel Amenities Can Transform Your Stay",
    excerpt: "Explore how premium amenities can elevate your hotel experience from good to extraordinary.",
    image: "/images/blog-3.jpg",
    date: "Jan 08, 2025",
    author: "Hospitality Manager",
    category: "Hotel Amenities",
    readTime: "6 min read",
  },
]

export default function Blogs() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="text-yellow-500 font-semibold mb-2 tracking-wider uppercase text-sm">NEWS & BLOGS</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-playfair">
            Our Latest News & Blogs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base lg:text-lg px-4">
            Stay updated with the latest hospitality trends, travel tips, and exclusive insights from our experts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src={blog.image || "/placeholder.svg"}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                  {blog.category}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-4 lg:p-6">
                <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-3 flex-wrap gap-2">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-yellow-600" />
                    <span>{blog.date}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center">
                    <User className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    <span>{blog.author}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 font-playfair group-hover:text-yellow-600 transition-colors line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{blog.excerpt}</p>

                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-gray-500">{blog.readTime}</span>
                  <button className="flex items-center text-yellow-600 font-semibold hover:text-yellow-700 transition-colors group text-sm">
                    Read More
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8 lg:mt-12"
        >
          <button className="bg-yellow-500 text-black px-6 lg:px-8 py-2 lg:py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors text-sm lg:text-base">
            View All Articles
          </button>
        </motion.div>
      </div>
    </section>
  )
}
