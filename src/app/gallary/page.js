"use client";
import { useState } from "react";
import Image from "next/image";
import { FaPlus, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Navbar from "../Componentes/Navbar/Navbar";
import Footer from "../Componentes/Footer/Footer";

const galleryImages = [
  "/Images/gellary-1.avif",
  "/Images/gellary-2.avif",
  "/Images/gellary-3.avif",
  "/Images/gellary-4.avif",
  "/Images/gellary-1.avif",
  "/Images/gellary-2.avif",
  "/Images/gellary-3.avif",
  "/Images/gellary-4.avif",
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const showNext = () => {
    setSelectedIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const showPrev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  return (
    <>
      <Navbar />
      <section className="py-16 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="group relative cursor-pointer overflow-hidden"
              onClick={() => handleImageClick(index)}
            >
              <Image
                src={src}
                alt={`Gallery ${index + 1}`}
                width={500}
                height={500}
                className="w-full h-full object-cover transition-all duration-500 "
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaPlus className="text-white text-4xl mb-2 drop-shadow-lg" />
                <span className="text-white text-lg font-semibold drop-shadow-lg">
                  Explore Now
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      
      {/* Fullscreen Modal */}
      {selectedIndex !== null && (
  <div className="fixed inset-0  bg-gray-600 bg-opacity-90 flex items-center justify-center z-50">
    <button
      className="absolute top-4 right-4 text-white text-3xl z-50"
      onClick={closeModal}
    >
      <FaTimes />
    </button>

    <button
      className="absolute left-4 text-white text-3xl z-50"
      onClick={showPrev}
    >
      <FaChevronLeft />
    </button>

    <div className="relative w-screen h-screen flex items-center justify-center">
      <Image
        src={galleryImages[selectedIndex]}
        alt="Full View"
        fill
        className="object-contain pointer-events-none"
      />
    </div>

    <button
      className="absolute right-4 text-white text-3xl z-50"
      onClick={showNext}
    >
      <FaChevronRight />
    </button>
  </div>
)}

     <Footer/>
    </>
  );
}
