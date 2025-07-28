"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

const destinations = [
  { name: "Leh Ladakh", slug: "leh-ladakh" },
  { name: "Kashmir", slug: "kashmir" },
  { name: "Himachal", slug: "himachal" },
  { name: "Kathmandu", slug: "kathmandu" },
  { name: "Amarnath", slug: "amarnath" },
  { name: "Char Dham", slug: "char-dham" },
  { name: "North East", slug: "north-east" },
  { name: "Kerala", slug: "kerala" },
  { name: "Rajasthan", slug: "rajasthan" },
  { name: "Bhutan", slug: "bhutan" },
  { name: "Andman Nikobar", slug: "andman-nikobar" },
];

export default function DestinationDropdown({ isMobile = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={`relative ${isMobile ? "" : "hover:cursor-pointer"} group`}
      ref={dropdownRef}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-gray-800 font-semibold text-base"
      >
        Destination
        <IoIosArrowDown
          className={`text-sm mt-[1px] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          className={`${
            isMobile
              ? "pl-4 mt-1"
              : "absolute left-0 top-full mt-3 w-56 shadow-lg z-50"
          } bg-white border border-gray-200 rounded-md overflow-hidden`}
        >
          <ul className="divide-y divide-gray-100">
            {destinations.map((destination) => (
              <li key={destination.slug}>
                <Link
                  href={`/listing/${destination.slug}`}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-all duration-150"
                  onClick={() => setIsOpen(false)}
                >
                  {destination.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
