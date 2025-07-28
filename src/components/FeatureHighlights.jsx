import React from "react";

// Import your local image assets
import deliveryImg from "../assets/delivery.jpg";
import serviceImg from "../assets/service.png";
import refundImg from "../assets/refund.png";
import paymentImg from "../assets/payment.png";

const features = [
  {
    img: deliveryImg,
    title: "Fast Delivery",
    description: "We will ship the goods to you within 1 ~3 working days after you place the order",
  },
  {
    img: serviceImg,
    title: "Customer Service",
    description: "Your happiness is our greatest honor and we hope to provide 100% satisfactory service",
  },
  {
    img: refundImg,
    title: "Return and Refund",
    description: "10-Year Warranty Free Returns within 30 Days for Quality Issues.",
  },
  {
    img: paymentImg,
    title: "Secure Payment",
    description: "Pay securely with credit card and PayPal",
  },
];

export default function FeatureHighlights() {
  return (
    <section className="bg-amber-50 px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-screen">
      {features.map((feature, index) => (
        <div key={index} className="text-center w-full">
          <img src={feature.img} alt={feature.title} className="mx-auto mb-3 w-12 h-12 object-contain" />
          <h3 className="text-2xl font-bold mb-1">{feature.title}</h3>
          <p className="text-black-900 text-xl text-start font-semibold">{feature.description}</p>
        </div>
      ))}
    </section>
  );
}
