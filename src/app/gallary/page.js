"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaPlus, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Navbar from "../Componentes/Navbar/Navbar";
import Footer from "../Componentes/Footer/Footer";
import 'aos/dist/aos.css';
import Link from "next/link";
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
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.default.init({
        duration: 1000,
        once: true,
        offset: 120,
      });
    });
    
  }, []);
  return (
    <>
      <Navbar />
      <div
        className="relative w-full h-[300px] flex flex-col justify-center pt-6 pl-6  text-white"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1507643179773-3e975d7ac515?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <h1 className="relative text-4xl font-bold z-10 mt-6">Gallery</h1>

        <div className="relative z-10 mt-4 px-6 py-2 rounded-full flex   space-x-2 text-sm text-white  ">
          <Link href="/">Home</Link>
          <span className="mx-1">➜</span>
          <span className="font-semibold">Gallery</span>
        </div>
      </div>

      <section className=" bg-white"  data-aos="fade-up">
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

      <Footer />
    </>
  );
}
