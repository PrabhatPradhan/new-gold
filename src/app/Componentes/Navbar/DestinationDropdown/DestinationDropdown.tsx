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

export default function DestinationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        className="flex items-center gap-1 text-gray-800 font-medium hover:text-black"
      >
        Destination{" "}
        <IoIosArrowDown
          className={`text-xs transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </a>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-44 bg-white border border-gray-200 rounded-md shadow-md z-50">
          {destinations.map((destination) => (
            <Link
              key={destination.slug}
              href={`/listing/${destination.slug}`}
              className="block px-4 py-2 text-sm hover:bg-gray-100"
            >
              {destination.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
