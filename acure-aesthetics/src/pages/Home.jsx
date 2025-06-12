import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome To</h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Acure Aesthetics</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            "Acure Aesthetics" is widely recognized for its holistic approach and ace services towards Skin, Hair care and Aesthetics Solutions.
          </p>
          <Link to="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Book Appointment
          </Link>
        </div>
      </section>

      {/* Our Clinic Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Clinic</h2>
            <p className="text-gray-600">
              Acure Aesthetics Takes Care of all your Needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Skin Treatment */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Skin Treatment</h3>
                <p className="text-gray-600 mb-4">
                  We have experience in treatments and procedures to maintain the health, and appearance of skin
                </p>
                <Link to="/services" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Know more →
                </Link>
              </div>
            </div>

            {/* Hair Treatment */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Hair Treatment</h3>
                <p className="text-gray-600 mb-4">
                  A hair treatment is a rehydrating treatment that aids in replenishing your roots' essential oils and moisture.
                </p>
                <Link to="/services" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Know more →
                </Link>
              </div>
            </div>

            {/* Plastic Surgery */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Plastic Surgery</h3>
                <p className="text-gray-600 mb-4">
                  Plastic surgery's primary goal is to as closely mimic the natural function and look for tissue and skin as feasible.
                </p>
                <Link to="/services" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Know more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">About Acure Aesthetics</h2>
          </div>
          <div className="max-w-3xl mx-auto text-gray-600">
            <p className="mb-6">
              "Acure Aesthetics" is well-known for its holistic approach and exceptional services in skin and hair care and wellness solutions. Our primary goal is to assist people in overcoming challenges that threaten their health or cause them to compromise their physical beauty. We determine the root cause of the problem and then provide appropriate therapy for the individual issue.
            </p>
            <p>
              We want to help individuals live boldly with good health, bright skin, and lovely hair. Since its debut in 2017, the goal has been to assist people in overcoming health, skin, and hair concerns to achieve fantastic achievement. We are proud to say that we are one of the top Aesthetic Clinics in Pandav Nagar, Delhi.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">1000+</h3>
              <p className="text-gray-600">Successful Treatments</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">500+</h3>
              <p className="text-gray-600">Quality Customers</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">95%</h3>
              <p className="text-gray-600">Positive Feedbacks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Doctors</h2>
            <p className="text-gray-600">Our Specialists are Highly Qualified and Professional.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Dr. Jatin Mittal */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Dr. Jatin Mittal</h3>
                <p className="text-gray-600 mb-4">Expert in Dermatology, Skin Hair, Laser Treatment</p>
                <Link to="/about" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Know More →
                </Link>
              </div>
            </div>

            {/* Dr. Sahil Singla */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Dr. Sahil Singla</h3>
                <p className="text-gray-600 mb-4">Expert in Cosmetic, Plastic, & Reconstructive Surgery</p>
                <Link to="/about" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Know More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Look?</h2>
          <p className="text-xl mb-8">
            Book an appointment with us and experience world-class aesthetic treatments.
          </p>
          <a href="tel:+919781213638" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition duration-300">
            Call Now
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home
