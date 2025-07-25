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

  if (isMobile) {
    return (
      <div ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full"
        >
          <span>Tours</span>
          <IoIosArrowDown
            className={`text-sm ml-2 transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
        {isOpen && (
          <div className="ml-4 mt-2 flex flex-col gap-2">
            {tours.map((tour) => (
              <Link
                key={tour.slug}
                href={`/listing/${tour.slug}`}
                onClick={() => setIsOpen(false)}
                className="text-sm text-gray-700 hover:text-black"
              >
                <hr/>
                {tour.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Desktop dropdown
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-gray-800 font-medium hover:text-black"
      >
        Tours
        <IoIosArrowDown
          className={`text-xs transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-44 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          {tours.map((tour) => (
            <Link
              key={tour.slug}
              href={`/listing/${tour.slug}`}
              className="block px-2 py-1 text-sm hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            > <hr/>
              {tour.name}
             
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
