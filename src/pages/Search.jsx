import React, { useState } from 'react'

function Search() {
  const [filters, setFilters] = useState({
    specialty: '',
    location: '',
    hospitalLevel: '',
    language: ''
  })

  const [searchTerm, setSearchTerm] = useState('')

  const specialties = [
    'Cardiology', 'Oncology', 'Neurology', 'Orthopedics', 
    'Dentistry', 'Ophthalmology', 'Dermatology', 'Gynecology',
    'Pediatrics', 'General Surgery'
  ]

  const locations = [
    'Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 
    'Chengdu', 'Hangzhou', 'Wuhan', 'Nanjing'
  ]

  const hospitalLevels = ['Grade 3A', 'Grade 3B', 'Grade 2A', 'Grade 2B']

  const languages = ['English', 'Spanish', 'Arabic', 'Russian', 'French', 'German']

  const mockHospitals = [
    {
      id: 1,
      name: 'Beijing Union Medical College Hospital',
      location: 'Beijing',
      level: 'Grade 3A',
      specialties: ['Cardiology', 'Oncology', 'Neurology'],
      languages: ['English', 'French'],
      rating: 4.8,
      image: '🏥'
    },
    {
      id: 2,
      name: 'Shanghai Jiao Tong University Hospital',
      location: 'Shanghai',
      level: 'Grade 3A',
      specialties: ['Orthopedics', 'Cardiology', 'Dentistry'],
      languages: ['English', 'Spanish'],
      rating: 4.7,
      image: '🏥'
    },
    {
      id: 3,
      name: 'Guangzhou General Hospital',
      location: 'Guangzhou',
      level: 'Grade 3A',
      specialties: ['Oncology', 'General Surgery', 'Pediatrics'],
      languages: ['English', 'Arabic'],
      rating: 4.6,
      image: '🏥'
    },
    {
      id: 4,
      name: 'Shenzhen People\'s Hospital',
      location: 'Shenzhen',
      level: 'Grade 3A',
      specialties: ['Dermatology', 'Ophthalmology', 'Gynecology'],
      languages: ['English', 'Russian'],
      rating: 4.5,
      image: '🏥'
    }
  ]

  const mockDoctors = [
    {
      id: 1,
      name: 'Dr. Zhang Wei',
      specialty: 'Cardiology',
      hospital: 'Beijing Union Medical College Hospital',
      experience: '15 years',
      languages: ['English', 'Mandarin'],
      rating: 4.9,
      image: '👨‍⚕️'
    },
    {
      id: 2,
      name: 'Dr. Li Mei',
      specialty: 'Oncology',
      hospital: 'Shanghai Jiao Tong University Hospital',
      experience: '12 years',
      languages: ['English', 'Spanish'],
      rating: 4.8,
      image: '👩‍⚕️'
    },
    {
      id: 3,
      name: 'Dr. Wang Chen',
      specialty: 'Orthopedics',
      hospital: 'Guangzhou General Hospital',
      experience: '18 years',
      languages: ['English', 'Arabic'],
      rating: 4.7,
      image: '👨‍⚕️'
    },
    {
      id: 4,
      name: 'Dr. Liu Yang',
      specialty: 'Neurology',
      hospital: 'Beijing Union Medical College Hospital',
      experience: '10 years',
      languages: ['English', 'French'],
      rating: 4.8,
      image: '👩‍⚕️'
    }
  ]

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const handleSearch = () => {
    console.log('Searching with filters:', filters, 'and term:', searchTerm)
  }

  const handleBookAppointment = (item, type) => {
    alert(`Booking appointment with ${type === 'hospital' ? item.name : item.name}`)
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Find Hospitals & Doctors</h1>
          <p className="text-xl text-blue-100">
            Search for the best medical care in China
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
              <h2 className="text-xl font-bold mb-6 text-gray-800">Filters</h2>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search
                </label>
                <input
                  type="text"
                  placeholder="Hospital or doctor name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Specialty
                </label>
                <select
                  value={filters.specialty}
                  onChange={(e) => handleFilterChange('specialty', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">All Specialties</option>
                  {specialties.map(spec => (
                    <option key={spec} value={spec}>{spec}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <select
                  value={filters.location}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">All Locations</option>
                  {locations.map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hospital Level
                </label>
                <select
                  value={filters.hospitalLevel}
                  onChange={(e) => handleFilterChange('hospitalLevel', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">All Levels</option>
                  {hospitalLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Language
                </label>
                <select
                  value={filters.language}
                  onChange={(e) => handleFilterChange('language', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">All Languages</option>
                  {languages.map(lang => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleSearch}
                className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
              >
                Search
              </button>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Hospitals</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mockHospitals.map(hospital => (
                  <div key={hospital.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{hospital.image}</div>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">★</span>
                        <span className="font-semibold text-gray-800">{hospital.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{hospital.name}</h3>
                    <p className="text-gray-600 mb-2 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {hospital.location}
                    </p>
                    <div className="mb-3">
                      <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded">
                        {hospital.level}
                      </span>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-1">Specialties:</p>
                      <div className="flex flex-wrap gap-1">
                        {hospital.specialties.map(spec => (
                          <span key={spec} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-1">Languages:</p>
                      <div className="flex flex-wrap gap-1">
                        {hospital.languages.map(lang => (
                          <span key={lang} className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={() => handleBookAppointment(hospital, 'hospital')}
                      className="w-full bg-primary-600 text-white py-2 rounded-lg font-semibold hover:bg-primary-700 transition"
                    >
                      Book Appointment
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Doctors</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mockDoctors.map(doctor => (
                  <div key={doctor.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{doctor.image}</div>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">★</span>
                        <span className="font-semibold text-gray-800">{doctor.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{doctor.name}</h3>
                    <p className="text-primary-600 font-semibold mb-2">{doctor.specialty}</p>
                    <p className="text-gray-600 mb-2 text-sm">{doctor.hospital}</p>
                    <p className="text-gray-600 mb-3 text-sm">
                      Experience: {doctor.experience}
                    </p>
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-1">Languages:</p>
                      <div className="flex flex-wrap gap-1">
                        {doctor.languages.map(lang => (
                          <span key={lang} className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={() => handleBookAppointment(doctor, 'doctor')}
                      className="w-full bg-primary-600 text-white py-2 rounded-lg font-semibold hover:bg-primary-700 transition"
                    >
                      Book Appointment
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
