import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-gray-800">Acure Aesthetics</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center">
            <Link to="/" className="px-3 py-2 text-gray-700 hover:text-gray-900">Home</Link>
            <Link to="/about" className="px-3 py-2 text-gray-700 hover:text-gray-900">About Us</Link>
            <Link to="/services" className="px-3 py-2 text-gray-700 hover:text-gray-900">Services</Link>
            <Link to="/blog" className="px-3 py-2 text-gray-700 hover:text-gray-900">Blog</Link>
            <Link to="/contact" className="px-3 py-2 text-gray-700 hover:text-gray-900">Contact</Link>
            <a href="tel:+919781213638" className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/blog"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <a
                href="tel:+919781213638"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900"
              >
                Call Now: +91 9781213638
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
