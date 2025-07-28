import React from "react";

// Importing images
import best1 from "../assets/best1.png";
import best2 from "../assets/best2.png";
import best3 from "../assets/best3.png";
import best4 from "../assets/best4.jpg";
import best5 from "../assets/best5.png";
import best6 from "../assets/best6.png";
import best7 from "../assets/best7.png";
import best8 from "../assets/best8.png";

const bestSellers = [
  { img: best1, title: "round-diningtable veneer-munden" },
  { img: best2, title: "Kids Bedroom Set (White with Gold Highlighting)" },
  { img: best3, title: "2-Seater Garden Sofa Set – L47 X D28 X H46" },
  { img: best4, title: "Sold - Peter Hvidt and Orla Molgaard-Nielsen" },
  { img: best5, title: "Blue-Bed-1" },
  { img: best6, title: "Round-Wooden-Dining-Table-O120-Cm-Aura" },
  { img: best7, title: "rectangular-wall-mirror-in-handle-wood-47×68-cm-fearne" },
  { img: best8, title: "Luxury King Size Bed with Bed Bench" },
];

const BestSellers = () => {
  return (
    <section className="px-6 py-5 bg-amber-50 ">
      <h2 className="text-4xl font-bold mb-6 text-black">Best Sellers</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {bestSellers.map((item, idx) => (
          <div
            key={idx}
            className="overflow-hidden  shadow hover:scale-105 transform transition "
          >
            <img
              src={item.img}
              alt={`Best Seller ${idx + 1}`}
              className="w-screen h-[300px] object-cover  shadow-md"
            />
            <p className="mt-2 text-l text-gray-800">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
