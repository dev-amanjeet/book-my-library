import React from 'react';
import LibraryCard from './LibraryCard';
import { mockLibraries } from '../data/mockData';

const LibraryGrid = () => {
  if (mockLibraries.length === 0) {
    return (
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No libraries found</h3>
            <p className="text-gray-600">Try adjusting your search filters</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Available Libraries</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockLibraries.map(library => (
            <LibraryCard
              key={library.id}
              library={library}
             
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LibraryGrid;