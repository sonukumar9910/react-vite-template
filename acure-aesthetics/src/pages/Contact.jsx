import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:5000/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (data.success) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        })
        navigate('/thankyou')
      } else {
        alert('Error sending message. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Error sending message. Please try again.')
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Appointment</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Contact us today to schedule your consultation
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Call Us</h3>
                  <div className="space-y-2">
                    <p>
                      <a href="tel:+919781213638" className="text-blue-600 hover:text-blue-700">
                        +91 9781213638
                      </a>
                    </p>
                    <p>
                      <a href="tel:+919599832893" className="text-blue-600 hover:text-blue-700">
                        +91 9599832893
                      </a>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Email Us</h3>
                  <p>
                    <a href="mailto:jatinmittal1210@gmail.com" className="text-blue-600 hover:text-blue-700">
                      jatinmittal1210@gmail.com
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Visit Us</h3>
                  <p className="text-gray-600">
                    D-88, Block D, Pandav Nagar,<br />
                    New Delhi, Delhi 110092
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
