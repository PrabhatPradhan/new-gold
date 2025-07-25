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
    <div className={`relative ${isMobile ? "" : "hover:cursor-pointer"}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full gap-1 text-gray-800 font-medium"
      >
        Destination{" "}
        <IoIosArrowDown className={`text-xs transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div
          className={`${
            isMobile
              ? "pl-4 mt-1"
              : "absolute left-0 top-full mt-2 w-44 z-50"
          } bg-white border border-gray-100 rounded-md  `}
        >
          {destinations.map((destination) => (
            <Link
              key={destination.slug}
              href={`/listing/${destination.slug}`}
              className="block px-2 py-1 text-sm hover:bg-gray-100 text-gray-800"
              onClick={() => setIsOpen(false)}
            >
              <hr/>
              {destination.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
