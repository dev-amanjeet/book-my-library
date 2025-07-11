import React from 'react';
import { useParams, useLocation } from 'react-router';
import BookingModal from '../components/BookingModal';

const LibraryDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const library = location.state?.library;

  if (!library) {
    return (
      <div className="text-center text-gray-500 mt-20">
        <p>Library not found. Please go back and try again.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="mb-6">
        <img
          src={library.image}
          alt={library.name}
          className="w-full h-72 object-cover rounded-lg mb-4"
        />
        <h1 className="text-3xl font-bold">{library.name}</h1>
        <p className="text-gray-600">{library.location}</p>
        <p className="text-gray-500 mb-4">{library.hours}</p>
        <div className="flex flex-wrap gap-2">
          {library.amenities.map((a, i) => (
            <span key={i} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
              {a}
            </span>
          ))}
        </div>
      </div>

      {/* Show booking UI */}
      <BookingModal />
    </div>
  );
};

export default LibraryDetails;
