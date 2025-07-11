import React from 'react'


const BookingModal = () => {
   const studySpaces = [
  {
    id: 1,
    name: "Quiet Study Room A",
    capacity: 4,
    amenities: ["Power outlets", "Wi-Fi", "Natural light"],
    available: true,
    image:
      "https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    name: "Group Study Room B",
    capacity: 8,
    amenities: ["Whiteboard", "TV Screen", "Conference table"],
    available: true,
    image:
      "https://images.pexels.com/photos/159711/library-la-trobe-study-students-159711.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    name: "Individual Study Pods",
    capacity: 1,
    amenities: ["Privacy dividers", "Desk lamp", "Ergonomic chair"],
    available: false,
    image:
      "https://images.pexels.com/photos/374746/pexels-photo-374746.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

  return (
    <div className="mb-12">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Study Spaces</h2>
                  <a
                    href="#all-spaces"
                    className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center cursor-pointer"
                  >
                    View All <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/2">
                      <h3 className="text-lg font-semibold mb-4">
                        Select Date & Time
                      </h3>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Date
                        </label>
                        <input
                          type="date"
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          
                          
                         
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Time Slot
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {[
                            "9:00 AM",
                            "11:00 AM",
                            "1:00 PM",
                            "3:00 PM",
                            "5:00 PM",
                            "7:00 PM",
                          ].map((time, index) => (
                            <button
                              key={index}
                              className={`py-2 px-3 text-sm font-medium rounded-md border ${index % 2 === 0 ? "bg-green-50 border-green-200 text-green-700 hover:bg-green-100" : "bg-gray-100 border-gray-200 text-gray-500"} !rounded-button whitespace-nowrap cursor-pointer`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Duration
                        </label>
                        <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm">
                          <option>1 hour</option>
                          <option>2 hours</option>
                          <option>3 hours</option>
                          <option>4 hours</option>
                        </select>
                      </div>
                    </div>
                    <div className="md:w-1/2">
                      <h3 className="text-lg font-semibold mb-4">
                        Library Floor Plan
                      </h3>
                      <div className="bg-gray-100 rounded-lg p-4 h-64 flex items-center justify-center">
                        <div className="text-center">
                          <i className="fas fa-map text-gray-400 text-5xl mb-3"></i>
                          <p className="text-gray-500">
                            Select a date and time to view available spaces
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {studySpaces.map((space) => (
                    <div
                      key={space.id}
                      className="bg-white rounded-lg shadow-sm overflow-hidden"
                    >
                      <div className="h-40 overflow-hidden">
                        <img
                          src={space.image}
                          alt={space.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold">{space.name}</h3>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${space.available ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                          >
                            {space.available ? "Available" : "Booked"}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">
                          <i className="fas fa-users mr-1"></i> Capacity:{" "}
                          {space.capacity}{" "}
                          {space.capacity === 1 ? "person" : "people"}
                        </p>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {space.amenities.map((amenity, index) => (
                            <span
                              key={index}
                              className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                            >
                              {amenity}
                            </span>
                          ))}
                        </div>
                        <button
                          className={`w-full py-2 rounded-full text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer ${space.available ? "bg-indigo-600 text-white hover:bg-indigo-700" : "bg-gray-200 text-gray-500 cursor-not-allowed"}`}
                          disabled={!space.available}
                        >
                          {space.available ? "Book Now" : "Unavailable"}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
  )
}

export default BookingModal