import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Book Your Perfect
            <span className="text-blue-300"> Study Space</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Discover and reserve quiet study spaces, meeting rooms, and resources at libraries across the city
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <div className="flex items-center space-x-2 text-blue-200">
              <Calendar className="h-5 w-5" />
              <span>Real-time availability</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-200">
              <MapPin className="h-5 w-5" />
              <span>50+ locations</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-200">
              <Clock className="h-5 w-5" />
              <span>24/7 booking</span>
            </div>
          </div>

          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Start Booking Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
