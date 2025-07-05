"use client";

import Image from "next/image";
import { useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
import 'aos/dist/aos.css';
const destinations = [
  {
    id: 1,
    name: "Bali",
    tours: "100+ Tours",
    image:
      "/Images/card-11.jpeg",
  },
  {
    id: 2,
    name: "Roma",
    tours: "100+ Tours",
    image:
      "/Images/card-22.jpeg",
  },
  {
    id: 3,
    name: "Phuket",
    tours: "100+ Tours",
    image:
      "/Images/card-33.jpeg",
  },
  {
    id: 4,
    name: "Paris",
    tours: "100+ Tours",
    image:
      "/Images/card-4.jpeg",
  },
  {
    id: 5,
    name: "Bangkok",
    tours: "100+ Tours",
    image:
      "/Images/card-5.jpeg",
  },
];

export default function TrendingDestinations() {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 120,
      });
    });
  }, []);
  return (
    <div className="py-12 ml-6 px-4 md:px-12 bg-white"  data-aos="fade-up">
    {/* Header */}
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl md:text-2xl font-bold text-[#131313]">
        International Trending Destinations
      </h2>
      <a
        href="#"
        className="text-[#131313] text-sm md:text-base font-medium flex items-center gap-2 mr-2"
      >
        See all <GoArrowUpRight className="text-xs mt-[2px]" />
      </a>
    </div>
  
    {/* Desktop Grid */}
    <div className="hidden md:grid grid-cols-2 lg:grid-cols-5 gap-4 mt-12">
      {destinations.map((item) => (
        <div
          key={item.id}
          className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer transition-shadow duration-500 hover:shadow-[0_0_20px_rgba(0,0,0,0.4)]"
        >
          <Image
            src={item.image}
            alt={item.name}
            width={300}
            height={304}
            className="w-full h-[17rem] object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent px-4 py-3 text-white text-center">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-sm">{item.tours}</p>
          </div>
        </div>
      ))}
    </div>
  
    {/* Mobile Slider */}
    <div className="md:hidden overflow-x-auto mt-12">
      <div className="flex gap-4 w-max px-1">
        {destinations.map((item) => (
          <div
            key={item.id}
            className="relative min-w-[250px] max-w-[250px] rounded-xl overflow-hidden shadow-md group cursor-pointer transition-shadow duration-500 hover:shadow-[0_0_20px_rgba(0,0,0,0.4)]"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={250}
              height={272}
              className="w-full h-[17rem] object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent px-4 py-3 text-white text-center">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm">{item.tours}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  
  );
}
