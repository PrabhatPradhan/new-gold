'use client';

import { useEffect, useState } from 'react';
import {
  FaCity,
  FaLandmark,
  FaShip,
  FaBus,
  FaUmbrellaBeach,
  FaUtensils,
} from 'react-icons/fa';
import 'aos/dist/aos.css';
const activities = [
  { title: 'City Tours', icon: <FaCity />, tours: '100+ Tours' },
  { title: 'Cultural Tours', icon: <FaLandmark />, tours: '100+ Tours' },
  { title: 'Day Cruises', icon: <FaShip />, tours: '100+ Tours' },
  { title: 'Bus Tours', icon: <FaBus />, tours: '100+ Tours' },
  { title: 'Beach Tours', icon: <FaUmbrellaBeach />, tours: '100+ Tours' },
  { title: 'Food Tours', icon: <FaUtensils />, tours: '100+ Tours' },
];

export default function PopularThingsToDo() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
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
    <section className="max-w-7xl mx-auto px-4 py-16 ml-14 mr-4  "  data-aos="fade-up"
    
    >
      {/* Heading */}
      <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
        <h2 className="text-xl md:text-2xl font-bold text-[#131313]">
          Popular things to do
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 ">
        {activities.map(({ title, icon, tours }, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={title}
              onClick={() => setActiveIndex(index)}
              className={`group cursor-pointer rounded-2xl px-4 py-5 sm:px-6 sm:py-8 flex flex-col items-center text-center transition duration-700 ease-in-out
                ${
                  isActive
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-slate-900 border border-gray-200 hover:bg-indigo-600 hover:text-white hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)]'
                }`}
            >
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full mb-4 sm:mb-5 text-xl transition duration-300 ease-in-out
                  ${
                    isActive
                      ? 'bg-white text-indigo-600'
                      : 'bg-indigo-100 text-indigo-600 group-hover:bg-white group-hover:text-indigo-600'
                  }`}
              >
                {icon}
              </div>
              <h3 className="text-sm sm:text-base font-semibold">{title}</h3>
              <p
                className={`text-xs sm:text-sm mt-1 transition ${
                  isActive ? 'text-indigo-100' : 'text-white group-hover:text-indigo-100'
                }`}
              >
                {tours}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
