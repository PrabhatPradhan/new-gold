"use client";
import { useEffect } from "react";
import {
  FaHotel,
  FaUtensils,
  FaBinoculars,
  FaCar,
  FaPhoneAlt,
  FaStar,
  FaHeart,
  FaCalendarAlt,
  FaCamera,
  FaVideo,
  FaWhatsapp,
} from "react-icons/fa";
import { MdOutlineNightlightRound } from "react-icons/md";
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
  featured,
  title,
  days,
  night,
  location,
  price,
}: TourCardProps) {
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
    <div
      className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-lg w-full max-w-3xl mx-auto"
      data-aos="fade-up"
    >
      {/* Image Section */}
      <div className="relative w-full md:w-64 h-52 md:h-auto flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-[14rem] object-cover"
        />
        {featured && (
          <span className="absolute top-2 left-2 text-white text-xs px-2 py-1 rounded-md font-semibold">
            {/* Featured tag if needed */}
          </span>
        )}
        {/* Top-right Icons */}
        <div className="absolute top-2 right-2 flex gap-2">
          <div className="flex items-center justify-center text-white bg-black/50 rounded-full w-6 h-6 text-xs">
            <FaCamera />
          </div>
          <div className="flex items-center justify-center text-white bg-black/50 rounded-full w-6 h-6 text-xs">
            <FaVideo />
          </div>
        </div>
        {/* Heart Icon */}
        <div className="absolute bottom-2 right-2 bg-white p-1 rounded-full shadow-md text-gray-600 cursor-pointer hover:text-red-500">
          <FaHeart />
        </div>
      </div>

      {/* Info Section */}
      <div className="p-4  flex flex-col justify-between w-full relative">
        {/* Rating and Services */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-gray-600 pt-2 text-lg">
            <FaHotel />
            <FaUtensils />
            <FaBinoculars />
            <FaCar />
          </div>
          <div className="flex items-center text-yellow-400 text-sm mt-2 sm:mt-0">
            <FaStar className="mr-1" />
            <span className="font-bold">5</span>
            <span className="ml-2 text-gray-500 text-xs">(1 Rating)</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold mt-2">{title}</h2>

        {/* Duration */}
        <div className="flex gap-4 mt-2 text-gray-600 text-sm">
          <div className="flex items-center gap-1">
            <FaCalendarAlt /> {days} Days
          </div>
          <div className="flex items-center gap-1">
            <MdOutlineNightlightRound /> {night} Nights
          </div>
        </div>

        {/* Location */}
        <div className="mt-2 text-sm text-gray-500">{location}</div>

        {/* Contact & Price */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-end mt-4 gap-3">
          <div className="flex gap-4 text-black text-xl">
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="hover:text-green-600 cursor-pointer" />
            </a>
            <a href="tel:+919999999999">
              <FaPhoneAlt className="hover:text-blue-500 cursor-pointer" />
            </a>
          </div>
          <div className="text-orange-500 font-bold text-lg">
            ${price.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}
