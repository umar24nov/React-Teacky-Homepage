import React from 'react';
import gallery1 from '../assets/gallery.jpg';
import gallery2 from '../assets/gallery2.png';
import gallery3 from '../assets/gallery3.jpg';
import gallery4 from '../assets/gallery4.jpg';
import gallery5 from '../assets/gallery5.jpg';
import gallery6 from '../assets/gallery6.jpg';
import gallery7 from '../assets/gallery7.jpg';
import gallery8 from '../assets/gallery8.jpg';


const Gallery = () => {
  const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8];

  return (
    <section className="px-6 py-10 bg-amber-50">
      <h2 className="text-3xl font-semibold mb-4 flex items-center justify-center">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((img, idx) => (
          <img key={idx} src={img} alt={`Gallery ${idx + 1}`} className="w-full h-[500px] shadow-md bg-cover " />
        ))}
        
      </div>
    </section>
  );
};

export default Gallery;
