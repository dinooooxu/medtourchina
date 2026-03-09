import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

const Hospitals = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [department, setDepartment] = useState('');
  const [city, setCity] = useState('');
  const [hospitals, setHospitals] = useState([
    {
      id: 1,
      name: 'Peking Union Medical College Hospital',
      city: 'Beijing',
      rating: 4.8,
      departments: ['Cardiology', 'Neurology', 'Orthopedics'],
      description: 'A top-tier hospital in China with international recognition for its medical expertise.',
      image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=modern%20hospital%20exterior%20building&size=1024x1024'
    },
    {
      id: 2,
      name: 'Shanghai General Hospital',
      city: 'Shanghai',
      rating: 4.7,
      departments: ['Oncology', 'Cardiology', 'Dermatology'],
      description: 'A leading hospital in Shanghai with advanced medical technology and facilities.',
      image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=modern%20hospital%20exterior%20building%20in%20city&size=1024x1024'
    },
    {
      id: 3,
      name: 'Guangzhou First People\'s Hospital',
      city: 'Guangzhou',
      rating: 4.6,
      departments: ['Orthopedics', 'Neurology', 'Pediatrics'],
      description: 'A comprehensive hospital with excellent medical services and international patient support.',
      image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=modern%20hospital%20building%20with%20glass%20facade&size=1024x1024'
    }
  ]);

  const handleSearch = (e) => {
    e.preventDefault();
    // In a real application, this would fetch data from an API
    console.log('Searching for:', searchTerm, department, city);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Section */}
      <section className="bg-primary-600 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-8 text-center">Find Hospitals & Doctors</h1>
          <form onSubmit={handleSearch} className="bg-white p-6 rounded-lg shadow-lg text-gray-900">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Search Term</label>
                <Input
                  type="text"
                  placeholder="Hospital name, doctor, or specialty"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Department</label>
                <select
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                >
                  <option value="">All Departments</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Neurology">Neurology</option>
                  <option value="Orthopedics">Orthopedics</option>
                  <option value="Oncology">Oncology</option>
                  <option value="Dermatology">Dermatology</option>
                  <option value="Pediatrics">Pediatrics</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">City</label>
                <select
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  <option value="">All Cities</option>
                  <option value="Beijing">Beijing</option>
                  <option value="Shanghai">Shanghai</option>
                  <option value="Guangzhou">Guangzhou</option>
                  <option value="Shenzhen">Shenzhen</option>
                  <option value="Hangzhou">Hangzhou</option>
                </select>
              </div>
            </div>
            <div className="mt-6 flex justify-center">
              <Button type="submit" size="lg">
                Search
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Search Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hospitals.map((hospital) => (
              <div key={hospital.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img
                  src={hospital.image}
                  alt={hospital.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{hospital.name}</h3>
                    <div className="bg-primary-100 text-primary-600 px-2 py-1 rounded text-sm font-medium">
                      {hospital.rating} ★
                    </div>
                  </div>
                  <p className="text-gray-500 mb-4">{hospital.city}</p>
                  <p className="text-gray-600 mb-4">{hospital.description}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Departments:</h4>
                    <div className="flex flex-wrap gap-2">
                      {hospital.departments.map((dept, index) => (
                        <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          {dept}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full">View Details</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hospitals;