"use client";
import { useEffect } from "react";
import {
  FaHotel,
  FaUtensils,
  FaBinoculars,
  FaCar,
  FaWhatsapp,
} from "react-icons/fa";
 
import "aos/dist/aos.css";
 

interface TourCardProps {
  image: string;
  featured?: boolean;
  title: string;
  days: number;
  night: number;
  location: string;
  price: number;
}

export default function TourCard({
  image,
  
  title,
  days,
  night,
  location,
  price,
}: TourCardProps) {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.default.init({ duration: 1000, once: true, offset: 120 });
    });
  }, []);

  return (
    <>
  
    <div
      className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-lg w-full max-w-4xl mx-auto border"
      data-aos="fade-up"
    >
      {/* Image Section */}
      <div className="relative w-full md:w-72 h-52 md:h-auto flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-[18rem] object-cover rounded-t-xl md:rounded-t-none md:rounded-l-xl"
        />
      </div>

      {/* Info Section */}
      <div className="p-4 flex flex-col justify-between w-full relative">
        {/* Nights - Days */}
        <div className="absolute top-2 left-2 bg-pink-200 text-pink-700 text-xs px-3 py-1 rounded-full font-semibold">
          {night.toString().padStart(2, "0")} Nights - {days.toString().padStart(2, "0")} Days
        </div>

        {/* Rating */}
        <div className="absolute top-2 right-2 text-sm text-gray-600">
          <span className="text-yellow-500 font-semibold">5 ★</span> (Rating)
        </div>

        {/* Title */}
        <h2 className="text-lg font-bold mt-6">{title}</h2>

        {/* Location / Itinerary */}
        <div className="text-sm mt-2">
          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
            {location}
          </span>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-3 mt-4 text-gray-700">
          {[FaHotel, FaUtensils, FaBinoculars, FaCar].map((Icon, index) => (
            <div key={index} className="p-2 border rounded-full text-lg">
              <Icon />
            </div>
          ))}
        </div>

        {/* Price */}
        <div className="mt-4 text-sm">
          <span className="text-gray-600">Starting From :</span>
          <span className="text-pink-600 font-bold text-lg ml-2">₹{price.toLocaleString("en-IN")}/-</span>{" "}
          <span className="text-gray-500">Per Person</span>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3">
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm"
          >
            <FaWhatsapp /> Call To Action
          </a>
          <a
            href="#"
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm"
          >
            More Details →
          </a>
        </div>
      </div>
    </div>
    </>
  );
}
