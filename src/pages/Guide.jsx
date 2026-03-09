import React from 'react'

function Guide() {
  const sections = [
    {
      id: 'visa',
      title: 'Visa Information',
      icon: '🛂',
      content: [
        'Medical Visa (M Visa): Required for medical treatment in China',
        'Apply at Chinese embassy/consulate with medical invitation letter',
        'Processing time: 5-7 working days',
        'Valid for up to 6 months with multiple entries',
        'Required documents: Passport, photos, medical documents, invitation letter'
      ]
    },
    {
      id: 'transport',
      title: 'Transportation',
      icon: '✈️',
      content: [
        'International airports: Beijing (PEK/PKX), Shanghai (PVG), Guangzhou (CAN)',
        'High-speed rail connects major cities (up to 350 km/h)',
        'Metro systems in all major cities',
        'Taxi and ride-hailing apps (Didi) widely available',
        'Airport pickup service available upon request'
      ]
    },
    {
      id: 'accommodation',
      title: 'Accommodation',
      icon: '🏨',
      content: [
        'Wide range of hotels from budget to luxury',
        'Hospital-affiliated hotels for patients and families',
        'Serviced apartments for longer stays',
        'English-speaking staff at international hotels',
        'Booking assistance available'
      ]
    },
    {
      id: 'translation',
      title: 'Translation Services',
      icon: '🗣️',
      content: [
        'Professional medical interpreters available',
        'Hospital translation services',
        'Document translation for medical records',
        '24/7 interpretation support for emergencies',
        'Multi-language support: English, Spanish, Arabic, Russian, etc.'
      ]
    },
    {
      id: 'insurance',
      title: 'Insurance',
      icon: '🛡️',
      content: [
        'International health insurance accepted at many hospitals',
        'Medical tourism insurance available',
        'Direct billing arrangements with select insurers',
        'Payment plans for major procedures',
        'Currency exchange services at hospitals'
      ]
    },
    {
      id: 'preparation',
      title: 'Before You Go',
      icon: '📋',
      content: [
        'Consult with your local doctor first',
        'Gather all medical records and test results',
        'Get necessary vaccinations',
        'Research your chosen hospital and doctor',
        'Book accommodation near the hospital',
        'Arrange airport pickup and local transportation'
      ]
    }
  ]

  const faqs = [
    {
      question: 'How much can I save on medical procedures in China?',
      answer: 'Patients typically save 50-70% compared to Western countries while receiving world-class care. For example, heart surgery that costs $100,000+ in the US may cost $30,000-40,000 in China.'
    },
    {
      question: 'Are Chinese hospitals internationally accredited?',
      answer: 'Yes, many top Chinese hospitals are accredited by JCI (Joint Commission International) and other international organizations, ensuring they meet global healthcare standards.'
    },
    {
      question: 'Do doctors speak English?',
      answer: 'Most doctors at major international hospitals speak English. We also provide professional interpreters for other languages to ensure clear communication.'
    },
    {
      question: 'How long should I plan to stay in China?',
      answer: 'The duration depends on your procedure. Minor procedures may require 1-2 weeks, while major surgeries may need 4-6 weeks including recovery time.'
    },
    {
      question: 'Can family members accompany me?',
      answer: 'Absolutely! We encourage family members to accompany patients. We can help arrange accommodation and support for family members.'
    },
    {
      question: 'What if there are complications after I return home?',
      answer: 'We maintain communication with your local doctors and can facilitate follow-up consultations with your Chinese medical team.'
    }
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Medical Tourism Guide</h1>
          <p className="text-xl text-blue-100">
            Everything you need to know about medical tourism in China
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Why Choose China for Medical Treatment?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Advanced Technology</h3>
              <p className="text-gray-600">
                State-of-the-art medical equipment and cutting-edge technology comparable to leading Western hospitals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">👨‍⚕️</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Expert Specialists</h3>
              <p className="text-gray-600">
                Highly trained doctors with international experience and expertise in various medical fields.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Cost-Effective</h3>
              <p className="text-gray-600">
                Significant savings without compromising on quality. Get world-class care at a fraction of the cost.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Essential Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map(section => (
              <div key={section.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <div className="text-4xl mb-4">{section.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{section.title}</h3>
                <ul className="space-y-2">
                  {section.content.map((item, index) => (
                    <li key={index} className="text-gray-600 text-sm flex items-start gap-2">
                      <span className="text-primary-600 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3 text-primary-600">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary-50 p-8 rounded-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Need More Information?
            </h2>
            <p className="text-gray-600 text-lg">
              Our team is here to help you with any questions about medical tourism in China
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">📧</div>
              <h3 className="font-semibold mb-2 text-gray-800">Email Us</h3>
              <p className="text-gray-600">info@medtourchina.com</p>
            </div>
            <div>
              <div className="text-3xl mb-2">📞</div>
              <h3 className="font-semibold mb-2 text-gray-800">Call Us</h3>
              <p className="text-gray-600">+86 123 4567 8900</p>
            </div>
            <div>
              <div className="text-3xl mb-2">💬</div>
              <h3 className="font-semibold mb-2 text-gray-800">Live Chat</h3>
              <p className="text-gray-600">Available 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Guide
