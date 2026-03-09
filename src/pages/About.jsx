import React from 'react'

function About() {
  const team = [
    {
      name: 'Dr. Chen Wei',
      role: 'Medical Director',
      description: '20+ years of experience in international healthcare and medical tourism',
      image: '👨‍⚕️'
    },
    {
      name: 'Sarah Johnson',
      role: 'Operations Manager',
      description: 'Expert in patient coordination and cross-cultural healthcare management',
      image: '👩'
    },
    {
      name: 'Michael Zhang',
      role: 'Business Development',
      description: 'Specialist in healthcare partnerships and international relations',
      image: '👨'
    },
    {
      name: 'Emily Liu',
      role: 'Patient Services',
      description: 'Dedicated to providing exceptional patient experiences and support',
      image: '👩'
    }
  ]

  const values = [
    {
      icon: '💙',
      title: 'Patient-Centered Care',
      description: 'We prioritize patient needs and ensure personalized care throughout medical journey'
    },
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'We maintain the highest standards in healthcare quality and service delivery'
    },
    {
      icon: '🤝',
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and ethical practices in all our dealings'
    },
    {
      icon: '🌍',
      title: 'Global Perspective',
      description: 'We understand diverse cultural needs and provide services tailored to international patients'
    }
  ]

  const stats = [
    { number: '500+', label: 'Partner Hospitals' },
    { number: '2000+', label: 'Partner Doctors' },
    { number: '50+', label: 'Countries Served' },
    { number: '10,000+', label: 'Patients Helped' }
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-blue-100">
            Your trusted partner for medical tourism in China
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Our Mission
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              At MedTour China, we are dedicated to making world-class healthcare accessible to international patients. We bridge the gap between patients in need and China's exceptional medical resources, providing a seamless, safe, and cost-effective medical tourism experience.
            </p>
            <p className="text-gray-600 text-lg mb-6">
              Our mission is to help patients overcome barriers to quality healthcare by offering comprehensive support services, from hospital selection and doctor booking to travel arrangements and post-treatment care.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Our Story
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="prose max-w-none">
              <p className="text-gray-600 text-lg mb-4">
                MedTour China was founded by a team of healthcare professionals and international business experts who recognized a critical need: millions of people around the world struggle to access affordable, high-quality medical care in their home countries.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                China has emerged as a global leader in healthcare, with world-class hospitals, cutting-edge technology, and highly skilled medical professionals. However, navigating the Chinese healthcare system can be challenging for international patients due to language barriers, cultural differences, and logistical complexities.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                We established MedTour China to solve these challenges. Our team brings together decades of combined experience in healthcare, international relations, and patient services. We have built strong partnerships with China's top hospitals and medical institutions, ensuring our patients receive the best possible care.
              </p>
              <p className="text-gray-600 text-lg">
                Today, we have helped thousands of patients from over 50 countries access life-changing medical treatments in China, saving them millions of dollars while providing exceptional care outcomes.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{member.name}</h3>
                <p className="text-primary-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-primary-600">Comprehensive Services</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Hospital and doctor matching based on your specific needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Appointment booking and scheduling assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Visa application support and guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Travel arrangements and accommodation booking</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Professional interpretation and translation services</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-primary-600">Trusted Partnerships</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Access to 500+ top-tier hospitals across China</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Partnerships with 2000+ experienced specialists</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Direct relationships with hospital administrators</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Preferential pricing and priority scheduling</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Continuous quality monitoring and feedback</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-primary-600 text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-6 text-primary-100">
            Contact us today for a free consultation and personalized medical tourism plan
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
