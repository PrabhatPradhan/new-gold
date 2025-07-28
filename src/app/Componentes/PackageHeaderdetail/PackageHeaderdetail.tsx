"use client";

import { FaStar, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdHotel, MdFastfood, MdDirectionsCar } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import { BiMap } from "react-icons/bi";

export default function PackageHeader() {
  return (
    <div className="p-4 sm:p-6 bg-white rounded-md shadow-md w-full max-w-6xl mx-auto">
      {/* Package Title */}
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
        Exotic Manali Volvo Package{" "}
        <span className="text-sm text-gray-500">(Himachal-101) </span>
      </h2>

      {/* Duration and Reviews */}
      <div className="flex flex-wrap items-center gap-3 mt-2">
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-md font-semibold text-sm">
          04 Nights / 05 Days
        </span>

        <div className="flex items-center gap-1 text-yellow-500 text-sm">
          {[...Array(4)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <FaStar className="text-yellow-400" />
        </div>

        <span className="text-sm text-blue-600 underline cursor-pointer">
          4.5 * Reviews
        </span>
        <span className="text-sm text-red-500">(189 reviews)</span>
      </div>

      {/* Route Info */}
      <div className="flex items-center mt-4 text-gray-600 text-sm">
        <BiMap className="text-lg mr-2 text-green-600" />
        Delhi - Manali - Kullu Naggar Castle - Delhi
      </div>

      {/* Icons */}
      <div className="flex flex-wrap justify-start sm:justify-normal gap-6 mt-6">
        <div className="flex flex-col items-center text-sm text-gray-700">
          <MdHotel className="text-3xl text-orange-400" />
          Hotel
        </div>
        <div className="flex flex-col items-center text-sm text-gray-700">
          <MdFastfood className="text-3xl text-orange-400" />
          Meals
        </div>
        <div className="flex flex-col items-center text-sm text-gray-700">
          <IoEyeSharp className="text-3xl text-orange-400" />
          Sightseeing
        </div>
        <div className="flex flex-col items-center text-sm text-gray-700">
          <MdDirectionsCar className="text-3xl text-orange-400" />
          Transfer
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mt-6">
        {/* Call Button */}
        <a href="tel:+9990447799" target="_blank" rel="noopener noreferrer">
          <button className="flex items-center gap-2 border border-green-600 text-green-600 font-medium px-4 py-2 rounded-md hover:bg-green-50 transition text-sm cursor-pointer">
            <FaPhoneAlt />
            Call
          </button>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/9990447799"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex items-center gap-2 border border-green-600 text-green-600 font-medium px-4 py-2 rounded-md hover:bg-green-50 transition text-sm cursor-pointer">
            <FaWhatsapp />
            WhatsApp
          </button>
        </a>

        {/* Enquiry Button */}
         
      </div>
    </div>
  );
}
