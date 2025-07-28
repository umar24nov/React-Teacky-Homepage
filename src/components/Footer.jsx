import React from "react";

export default function Footer() {
  return (
    <footer className="bg-amber-50 px-6 py-10 text-gray-700 ">
      <div className="grid grid-cols-1 md:grid-cols-7  mr-2">
        <div className="md:col-span-2 w-80">
          <h2 className="text-2xl font-semibold text-black mb-2">Teacky</h2>
          <p className="text-l text-gray-900 gap-5">Discover modern furniture built on tradition, trust, and top-notch design.</p>
        </div>

        <div>
          <h4 className="font-semibold text-black mb-2">SHOP</h4>
          <ul>
            <li>Dining</li>
            <li>Bedroom</li>
            <li>Living</li>
            <li>Home Decor</li>
            <li>Office</li>
            <li>Outdoor</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-black mb-2">PAGES</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Gallery</li>
            <li>Faqs</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-black mb-2">TERMS</h4>
          <ul>
            <li>Terms & Condition</li>
            <li>Cookie Policy</li>
            <li>Shipping Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-black mb-2">FOLLOW US</h4>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>X</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-black mb-2">CONTACT US</h4>
          <ul>
            <li>+91 8273306126</li>
            <li>umar24nov@gmail.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
