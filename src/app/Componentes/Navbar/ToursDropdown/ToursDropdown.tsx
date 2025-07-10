"use client";
import Link from "next/link";
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
          <Link href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Africa</Link>
<Link href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Europe</Link>
<Link href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Middle East</Link>
<Link href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Asia</Link>
<Link href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Oceania</Link>

        </div>
      )}
    </div>
  );
}
