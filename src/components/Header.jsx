import { useState } from "react";
import { FaSearch, FaHeart, FaShoppingCart, FaUser, FaBars } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-amber-50 shadow-md p-4 flex justify-between items-center z-50">

      <h1 className="text-2xl font-bold">Teacky</h1>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-12 text-gray-700 text-xl">
        {["Dining", "Bedroom", "Living", "Office", "Outdoor"].map((item) => (
          <a href="#" key={item} className="hover:text-black">
            {item}
          </a>
        ))}
      </nav>

      {/* Icons & Mobile Menu Toggle */}
      <div className="flex gap-5 items-center text-xl text-gray-700">
        <button title="Search"><FaSearch /></button>
        <button title="Wishlist"><FaHeart /></button>
        <button title="Cart"><FaShoppingCart /></button>
        <button title="Profile"><FaUser /></button>
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          title="Menu"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-amber-50 shadow-md flex flex-col gap-2 p-4 md:hidden z-10">
          {["Dining", "Bedroom", "Living", "Office", "Outdoor"].map((item) => (
            <a key={item} href="#" className="text-gray-900">
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
