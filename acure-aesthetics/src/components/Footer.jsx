import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p>
                <a href="tel:+919781213638" className="hover:text-blue-400">
                  +91 9781213638
                </a>
              </p>
              <p>
                <a href="tel:+919599832893" className="hover:text-blue-400">
                  +91 9599832893
                </a>
              </p>
              <p>
                <a href="mailto:jatinmittal1210@gmail.com" className="hover:text-blue-400">
                  jatinmittal1210@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <p><Link to="/" className="hover:text-blue-400">Home</Link></p>
              <p><Link to="/about" className="hover:text-blue-400">About Us</Link></p>
              <p><Link to="/services" className="hover:text-blue-400">Services</Link></p>
              <p><Link to="/contact" className="hover:text-blue-400">Contact</Link></p>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Clinic</h3>
            <p className="text-gray-300">
              D-88, Block D, Pandav Nagar,<br />
              New Delhi, Delhi 110092
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Acure Aesthetics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
