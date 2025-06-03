"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-xl">G</span>
              </div>
              <div>
                <div className="font-bold text-xl">ELITE STAY</div>
                <div className="text-xs text-gray-300">Hotel & Resort</div>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Experience luxury and elegance at Elite Stay Hotel & Resort. Where every stay is a memorable journey of
              comfort and sophistication.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Rooms
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Spa & Wellness
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Restaurant
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Conference Rooms
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Swimming Pool
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Gym & Fitness
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Wedding Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-500 mt-1" />
                <p className="text-gray-400">
                  123 Luxury Avenue
                  <br />
                  Glamour District, City 12345
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-500" />
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-500" />
                <p className="text-gray-400">info@elitestay.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 Elite Stay Hotel & Resort. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
