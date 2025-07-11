import React from 'react';
import { useNavigate } from 'react-router';
import { MapPin, Star, Clock, Wifi, Printer, Users } from 'lucide-react';

const LibraryCard = ({ library }) => {
  const navigate = useNavigate();

  const getAmenityIcon = (amenity) => {
    switch (amenity) {
      case 'WiFi': return <Wifi className="h-4 w-4" />;
      case 'Printing': return <Printer className="h-4 w-4" />;
      case 'Meeting Rooms': return <Users className="h-4 w-4" />;
      default: return null;
    }
  };

  const handleClick = () => {
    navigate(`/library/${library.id}`, { state: { library } });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative">
        <img
          src={library.image}
          alt={library.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium">{library.rating}</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{library.name}</h3>
        
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{library.location}</span>
        </div>
        
        <div className="flex items-center text-gray-600 mb-4">
          <Clock className="h-4 w-4 mr-1" />
          <span className="text-sm">{library.hours}</span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {library.amenities.slice(0, 3).map(amenity => (
            <div key={amenity} className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded-full">
              {getAmenityIcon(amenity)}
              <span className="text-xs text-gray-600">{amenity}</span>
            </div>
          ))}
          {library.amenities.length > 3 && (
            <div className="bg-gray-100 px-2 py-1 rounded-full">
              <span className="text-xs text-gray-600">+{library.amenities.length - 3} more</span>
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-gray-500">Starting from</span>
            <div className="text-lg font-bold text-gray-900">₹{library.price}/month</div>
          </div>
          <button
            onClick={handleClick}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LibraryCard;
