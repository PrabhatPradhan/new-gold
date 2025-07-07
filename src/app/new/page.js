'use client';

import Image from 'next/image';
import { FaHotel, FaUtensils, FaBinoculars, FaCar } from 'react-icons/fa';
import { MdStar } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';

export default function page() {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {[1, 2].map((_, i) => (
        <div
          key={i}
          className="flex max-w-xl rounded-2xl shadow-lg border overflow-hidden"
        >
          {/* Image */}
          <div className="w-1/2 relative">
            <Image
              src="/rajasthan.jpg" // <-- Replace with your actual image path
              alt="Rajasthan Desert"
              layout="fill"
              objectFit="cover"
              className="rounded-l-2xl"
            />
          </div>

          {/* Content */}
          <div className="w-1/2 p-4 flex flex-col justify-between">
            {/* Duration and Rating */}
            <div className="flex justify-between items-center text-sm text-gray-600">
              <span className="bg-pink-200 px-3 py-1 rounded-full text-xs font-semibold">
                04 Nights - 05 Days
              </span>
              <span className="flex items-center gap-1 text-yellow-500">
                5 <MdStar />
              </span>
            </div>

            {/* Title */}
            <h2 className="text-lg font-bold text-gray-800 mt-2">
              Royal Rajasthan Tour Package
            </h2>

            {/* Itinerary */}
            <p className="text-xs text-gray-600 mt-1 mb-2 bg-gray-100 px-2 py-1 rounded-lg w-fit">
              1N Manali - 2N Shimla - 1N Dharamshala - 1N Dalhousie
            </p>

            {/* Icons */}
            <div className="flex items-center gap-3 text-gray-600 text-lg mb-3">
              <FaHotel />
              <FaUtensils />
              <FaBinoculars />
              <FaCar />
            </div>

            {/* Price */}
            <div className="text-sm text-gray-700 font-semibold">
              Starting From:
              <span className="text-pink-600 text-xl ml-2 font-bold">
                ₹5,999/-
              </span>
              <span className="text-xs text-gray-500"> Per Person</span>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-2 mt-3">
              <button className="flex items-center gap-2 text-white bg-green-500 hover:bg-green-600 px-3 py-1 rounded-full text-sm">
                <BsWhatsapp /> Call To Action
              </button>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded-full text-sm">
                More Details →
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
