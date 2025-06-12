import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  const services = [
    {
      title: "Skin Treatment",
      description: "We have experience in treatments and procedures to maintain the health, and appearance of skin",
      treatments: [
        "Anti Aging Treatment",
        "Acne Scar Treatment",
        "Bridal Skin Treatment",
        "Chemical Peeling",
        "UV Light Treatment For Vitiligo",
        "Pigmentation"
      ]
    },
    {
      title: "Hair Treatment",
      description: "A hair treatment is a rehydrating treatment that aids in replenishing your roots' essential oils and moisture",
      treatments: [
        "Non Surgical Hair Replacement",
        "Hair Management",
        "Anti Dandruff Treatment",
        "Hair Fall Treatment",
        "Hair Growth Treatment",
        "Scalp Treatment"
      ]
    },
    {
      title: "Plastic Surgery",
      description: "Plastic surgery's primary goal is to as closely mimic the natural function and look for tissue and skin as feasible",
      treatments: [
        "Reconstructive Surgery",
        "Cosmetic Surgery",
        "Hand Surgery",
        "Microsurgery",
        "Burn Treatment",
        "Scar Revision"
      ]
    },
    {
      title: "Laser Treatment",
      description: "Advanced laser treatments for various skin and hair conditions using state-of-the-art technology",
      treatments: [
        "Laser Hair Removal Treatment",
        "Laser Moles & Warts Removal Treatment",
        "Laser Tattoo Removal",
        "Laser Skin Tightening Treatment",
        "Birth Marks Treatment",
        "Scar Removal"
      ]
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Choose The Best Treatment According to your Needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.treatments.map((treatment, idx) => (
                      <div key={idx} className="flex items-center">
                        <svg 
                          className="h-5 w-5 text-blue-600 mr-2" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M5 13l4 4L19 7" 
                          />
                        </svg>
                        <span className="text-gray-700">{treatment}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Expert Doctors</h3>
              <p className="text-gray-600">
                Our team consists of highly qualified and experienced specialists in various fields of aesthetic medicine.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Latest Technology</h3>
              <p className="text-gray-600">
                We use state-of-the-art equipment and advanced techniques to ensure the best possible results.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Personalized Care</h3>
              <p className="text-gray-600">
                Each treatment plan is tailored to meet your specific needs and desired outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Contact us today to schedule your consultation and begin your transformation journey.
          </p>
          <div className="space-x-4">
            <a 
              href="tel:+919781213638" 
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Call Now
            </a>
            <Link 
              to="/contact" 
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
