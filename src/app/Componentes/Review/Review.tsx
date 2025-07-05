"use client"
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    image:
      "https://demo.qzency.com/html/tripfy/preview/assets/image/team-img/testimonial-image-three-3.png",
    text:
      "Thanks to this travel agency, our vacation was stress-free and unforgettable. The booking process was seamless, and the hotel   ",
    name: "Alex Murphy",
    role: "Photographer",
  },
  {
    image:
      "https://demo.qzency.com/html/tripfy/preview/assets/image/team-img/testimonial-image-three-1.png",
    text:
      "TourPeak made our honeymoon perfect! Every detail was taken care of, and we felt so special throughout the trip. Highly recommend their services.",
    name: "Sophie Lee",
    role: "Content Creator",
  },
  {
    image:
      "https://demo.qzency.com/html/tripfy/preview/assets/image/team-img/testimonial-image-three-2.png",
    text:
      "An incredible experience from start to finish. TourPeak’s team is extremely professional and made sure we had the best trip possible.",
    name: "Raj Malhotra",
    role: "Travel Blogger",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[index];

  return (
    <section
      className="relative py-20 bg-white text-center overflow-hidden"
      style={{
        backgroundImage: "url('/Images/Review-bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mb-10 z-10 relative">
        <h3 className="text-sm font-semibold text-white bg-green-600 px-4 py-1 inline-block rounded-full mb-3">
          Testimonials
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Our Tourists View On TourPeak
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Our customers love the seamless travel experiences we provide.
        </p>
      </div>

      <div className="relative w-24 h-24 mx-auto rounded-full border-4 border-green-500 overflow-hidden mb-6">
        <img
          src={current.image}
          alt={current.name}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-1/2 left-0 w-2 h-2 bg-orange-500 rounded-full transform -translate-y-1/2"></span>
        <span className="absolute top-1/2 right-0 w-2 h-2 bg-orange-500 rounded-full transform -translate-y-1/2"></span>
      </div>

      <p className="w-[50%] h-[3rem]  mx-auto text-lg text-gray-700 mb-6 px-4">
        {current.text}
      </p>

      <h4 className="text-xl font-bold text-green-600">{current.name}</h4>
      <span className="text-gray-500 text-sm">{current.role}</span>

      {/* Arrows */}
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
        <button
          onClick={prevSlide}
          className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center"
        >
          <FaArrowLeft />
        </button>
      </div>

      <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
        <button
          onClick={nextSlide}
          className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}
