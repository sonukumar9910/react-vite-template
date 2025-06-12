import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Leading the way in advanced aesthetic treatments and personalized care
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Acure Aesthetics</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="mb-6">
                "Acure Aesthetics" is well-known for its holistic approach and exceptional services in skin and hair care and wellness solutions. Our primary goal is to assist people in overcoming challenges that threaten their health or cause them to compromise their physical beauty. We determine the root cause of the problem and then provide appropriate therapy for the individual issue.
              </p>
              <p className="mb-6">
                We want to help individuals live boldly with good health, bright skin, and lovely hair. Since its debut in 2017, the goal has been to assist people in overcoming health, skin, and hair concerns to achieve fantastic achievement. We are proud to say that we are one of the top Aesthetic Clinics in Pandav Nagar, Delhi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Specialists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Dr. Jatin Mittal */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Dr. Jatin Mittal</h3>
                <p className="text-gray-600 mb-4">Expert in Dermatology, Skin Hair, Laser Treatment</p>
                <div className="text-gray-600 space-y-4">
                  <p>
                    Specializing in advanced dermatological procedures and laser treatments, Dr. Jatin Mittal brings extensive experience in treating various skin and hair conditions.
                  </p>
                  <p>
                    With a commitment to providing personalized care, he ensures each patient receives the most effective treatment plan tailored to their specific needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Dr. Sahil Singla */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Dr. Sahil Singla</h3>
                <p className="text-gray-600 mb-4">Expert in Cosmetic, Plastic, & Reconstructive Surgery</p>
                <div className="text-gray-600 space-y-4">
                  <p>
                    Dr. Sahil Singla is a highly skilled plastic and reconstructive surgeon with expertise in both aesthetic and functional procedures.
                  </p>
                  <p>
                    His approach combines artistic vision with surgical precision to achieve natural-looking results that enhance both appearance and confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                The mission is to deliver genuine and inexpensive medical care for clients and transform their lives by providing them with instant solutions and giving them the right advice.
              </p>
            </div>

            {/* Goal */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Our Goal</h3>
              <p className="text-gray-600">
                The use of the latest technologies and the finest skin products and treatments at Acure Aesthetics makes it the best Dermatologist clinic in Pandav Nagar.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                Acure Aesthetics constantly strives to provide world-class skin, hair & body treatments that are created to treat concerns and enhance one's beauty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8">
            Schedule a consultation with our expert team today.
          </p>
          <a href="tel:+919781213638" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition duration-300">
            Call Now
          </a>
        </div>
      </section>
    </div>
  )
}

export default About
