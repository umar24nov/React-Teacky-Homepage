import heroBg from '../assets/wallpaperfigma.jpg'; // Correct import path
export default function Hero() {
  return (
    <section className="bg-gray-100 py-30 px-2 text-center bg-cover bg-center w-screen h-[950px]   md:h:full" style={{ backgroundImage: `url(${heroBg})` }}>
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center mt-40 text-white">
        Transform Your Space with <br />
        Timeless Elegance
      </h2>
      <p className="max-w-xl mx-auto text-white mb-6  text-xl">
        Discover handcrafted, modern furniture designed to elevate your home.
        Built with precision. Styled for luxury. Made to last.
      </p>
      <button className="bg-amber-900 text-white px-6 py-2 rounded">
        Explore Collection
      </button>
    </section>
  );
}