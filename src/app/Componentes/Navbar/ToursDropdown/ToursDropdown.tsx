"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

const tours = [
  { name: "Africa", slug: "africa" },
  { name: "Europe", slug: "europe" },
  { name: "Middle East", slug: "middle-east" },
  { name: "Asia", slug: "asia" },
  { name: "Oceania", slug: "oceania" },
];

export default function ToursDropdown({ isMobile = false }: { isMobile?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Mobile dropdown
  if (isMobile) {
    return (
      <div ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full text-base font-medium text-gray-800"
        >
          <span>Tours</span>
          <IoIosArrowDown
            className={`text-sm ml-2 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isOpen && (
          <div className="ml-4 mt-2 flex flex-col divide-y divide-gray-100 border-l border-gray-200">
            {tours.map((tour) => (
              <Link
                key={tour.slug}
                href={`/listing/${tour.slug}`}
                onClick={() => setIsOpen(false)}
                className="pl-2 py-2 text-sm text-gray-700 hover:text-blue-600 transition-colors"
              >
                {tour.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  // ✅ Desktop dropdown
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-gray-800 font-medium hover:text-black"
      >
        Tours
        <IoIosArrowDown
          className={`text-sm transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-3 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50 overflow-hidden">
          <ul className="divide-y divide-gray-100">
            {tours.map((tour) => (
              <li key={tour.slug}>
                <Link
                  href={`/listing/${tour.slug}`}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-all"
                >
                  {tour.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
