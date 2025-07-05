"use client";
import { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function ToursDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-gray-700 hover:text-black font-medium"
      >
        Tours <IoIosArrowDown className={`text-xs transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-md z-50">
          <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Adventure</a>
          <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Cultural</a>
          <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Luxury</a>
        </div>
      )}
    </div>
  );
}
