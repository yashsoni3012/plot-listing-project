// ContactFormWithMap.jsx
import React, { useState } from 'react';

const ContactFormWithMap = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    message: '',
    interests: {
      cars: false,
      apartments: false,
      shopping: false,
      food: false,
      traveling: false
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      interests: {
        ...prev.interests,
        [name]: checked
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    // Reset form
    setFormData({
      name: '',
      surname: '',
      email: '',
      message: '',
      interests: {
        cars: false,
        apartments: false,
        shopping: false,
        food: false,
        traveling: false
      }
    });
  };

  const interests = [
    { id: 'cars', label: 'Cars' },
    { id: 'apartments', label: 'Apartments' },
    { id: 'shopping', label: 'Shopping' },
    { id: 'food', label: 'Food & Life' },
    { id: 'traveling', label: 'Traveling' }
  ];

  return (
    <div className="min-h-screen bg-white py-4 sm:py-8 px-3 sm:px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6 sm:mb-8">
          Contact Us
        </h1>
        <div className='bg-gray-50 rounded-xl p-4 sm:p-6 shadow-lg h-full'>
             <div className="flex flex-col xl:flex-row gap-4 sm:gap-6 lg:gap-8">
          {/* Left Column - Map */}
          <div className="xl:w-1/2 w-full order-2 xl:order-1">

            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Our Location</h2>
            <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-full min-h-[300px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14687.734743642492!2d72.55596305!3d23.026206950000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84ac54a18239%3A0x558f4eb0ff0df853!2sMaxgen%20Technologies%20Pvt.Ltd!5e0!3m2!1sen!2sin!4v1763205976640!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
                className="map-iframe h-[566px]"
              ></iframe>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="xl:w-1/2 w-full order-1 xl:order-2">

            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 pb-2 border-b border-gray-200">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8D99AF] focus:border-blue-500 transition-colors duration-200 text-sm sm:text-base"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="surname" className="block text-sm font-medium text-gray-700 mb-2">
                    Surname
                  </label>
                  <input
                    type="text"
                    id="surname"
                    name="surname"
                    value={formData.surname}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8D99AF] focus:border-blue-500 transition-colors duration-200 text-sm sm:text-base"
                    placeholder="Your Surname"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8D99AF] focus:border-[#8D99AF] transition-colors duration-200 text-sm sm:text-base"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              {/* Checkbox Group */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Interests
                </label>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {interests.map((interest) => (
                    <div key={interest.id} className="flex items-center">
                      <input
                        type="checkbox"
                        id={interest.id}
                        name={interest.id}
                        checked={formData.interests[interest.id]}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor={interest.id} className="ml-2 sm:ml-3 text-sm font-medium text-gray-700">
                        {interest.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8D99AF] focus:border-[#8D99AF] transition-colors duration-200 resize-vertical text-sm sm:text-base"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#8D99AF] hover:bg-gray-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#8D99AF] focus:ring-offset-2 hover:scale-[1.0] active:scale-[0.98] text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        </div>
       
      </div>

      {/* Additional CSS for better map responsiveness */}
      <style jsx>{`
        .map-iframe {
          min-height: 300px;
        }
        
        @media (max-width: 640px) {
          .map-iframe {
            min-height: 250px;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactFormWithMap;