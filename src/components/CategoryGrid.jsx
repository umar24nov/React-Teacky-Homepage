import React from 'react';

// ⚠️ Corrected filenames – double check them
import livingroom from '../assets/livingroom.jpg';
import bedroom from '../assets/Bedroom.jpg';
import diningroom from '../assets/dinningroom.jpg'; // ✅ fixed typo
import office from '../assets/office.jpg';
import outdoor from '../assets/outdoor.jpg';
import homedecor from '../assets/HomeDecor.jpg'; // ✅ fixed casing

const categories = [
  { title: 'LIVING ROOM', img: livingroom },
  { title: 'BEDROOM', img: bedroom },
  { title: 'DINING ROOM', img: diningroom },
  { title: 'RATTAN COLLECTION', img: office },
  { title: 'OUTDOOR', img: outdoor },
  { title: 'HOME DECOR', img: homedecor },
];

export default function CategoryGrid() {
  return (
    <section className="py-10 px-4 bg-amber-50">
      <h3 className="text-2xl font-bold text-center mb-6">
        What are you looking for?
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden rounded-md shadow-lg group"
          >
            <img
              src={cat.img}
              alt={cat.title}
              className="w-screen h-[240px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 hover:bg-opacity-50 flex items-center justify-center text-white text-lg font-semibold transition-opacity duration-300">
              {cat.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
