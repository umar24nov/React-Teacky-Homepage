import React from 'react';
import new1 from '../assets/new1.png';
import new2 from '../assets/new2.png';
import new3 from '../assets/new3.png';
import new4 from '../assets/new4.png';
import new5 from '../assets/new5.png';
import new6 from '../assets/new6.png';
import new7 from '../assets/new7.png';
import new8 from '../assets/new8.png';

const newImages = [
  { img: new1, title: "Round-Wooden-Dining-Table-O120-Cm-Aura" },
  { img: new2, title: "mango-wooden-console-ukurla" },
  { img: new3, title: "Chesterfield Arm Chair" },
  { img: new4, title: "Round-Wooden-Dining-Table-O120-Cm-Aura" },
  { img: new5, title: "Wood-High-Stool-Narel" },
  { img: new6, title: "round-diningtable veneer-munden" },
  { img: new7, title: "Extendable-Table-Set" },
  { img: new8, title: "wiluna-mango-wood-chest-of-drawers" },
];

const NewArrival = () => {
  return (
    <section className="px-6 py-5 bg-amber-50">
      <h2 className="text-3xl font-semibold mb-4">New Arrival</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {newImages.map((item, idx) => (
          <div
            key={idx}
            className="overflow-hidden shadow hover:scale-105 transform transition"
          >
            <img
              src={item.img}
              alt={`New Arrival ${idx + 1}`}
              className="w-full h-[300px]  shadow-md bg-cover "
            />
            <p className="mt-2 text-xl text-gray-800">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrival;
