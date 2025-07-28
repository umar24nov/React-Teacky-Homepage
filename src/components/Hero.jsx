import heroBg from '../assets/wallpaperfigma.jpg';

export default function Hero() {
  return (
    <section
      className="w-screen h-screen md:h-[950px] bg-cover bg-center bg-no-repeat bg-gray-100 px-2 py-10 text-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white mt-40">
        Transform Your Space with <br />
        Timeless Elegance
      </h2>
      <p className="max-w-xl mx-auto text-white mb-6 text-xl">
        Discover handcrafted, modern furniture designed to elevate your home.
        Built with precision. Styled for luxury. Made to last.
      </p>
      <button className="bg-amber-900 text-white px-6 py-2 rounded">
        Explore Collection
      </button>
    </section>
  );
}
