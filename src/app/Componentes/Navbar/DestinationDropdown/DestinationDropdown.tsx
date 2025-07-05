"use client";
import { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function DestinationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
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
    <div className="relative" ref={dropdownRef}>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        className="flex items-center gap-1 text-gray-800 font-medium hover:text-black"
      >
        Destination <IoIosArrowDown className={`text-xs transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </a>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-44 bg-white border border-gray-200 rounded-md shadow-md z-50">
          <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">India</a>
          <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Europe</a>
          <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Asia</a>
        </div>
      )}
    </div>
  );
}
