"use client";
import React, { useState } from "react";
import { FaWhatsapp, FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import ToursDropdown from "./ToursDropdown/ToursDropdown";
import DestinationDropdown from "./DestinationDropdown/DestinationDropdown";
import Link from "next/link";
 
export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
       
   

      <div className="fixed top-0 left-0 w-full px-4 md:px-10 py-4 flex justify-between items-center bg-white z-50 shadow">
        {/* Left logo + nav */}
        <div className="flex items-center gap-[7rem]">
          <Image
            src="/Images/nav-logo.png"
            alt="Gold Travels Logo"
            width={112}
            height={40}
            className="w-[9rem]"
          />

          {/* Desktop nav */}
          <nav className="hidden lg:flex gap-8 text-[1rem] font-medium">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <ToursDropdown />
            <DestinationDropdown />
            <Link href="/gallary">Gallary</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>

        {/* Right buttons */}
        <div className="hidden lg:flex items-center gap-5">
          <FaUserCircle className="text-xl" />
          <div className="flex items-center gap-2">
            <FaWhatsapp className="text-green-800 text-xl" />
            <div className="text-xs leading-4">
              <p className="text-gray-500">Whatsapp</p>
              <p className="text-green-600 font-semibold">
                +990-737 621 432
              </p>
            </div>
          </div>
          <button className="bg-green-600 text-white py-2 px-5 rounded-full font-semibold">
            Book A Trip
          </button>
        </div>

        {/* Hamburger Menu */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <RxCross2 size={24} />
            ) : (
              <GiHamburgerMenu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] max-w-[300px] bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden shadow-lg ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 pt-6 flex flex-col gap-4 text-sm font-medium">
          {/* Logo */}
          <div className="mb-6">
            <Image
              src="/Images/nav-logo.png"
              alt="Gold Travels Logo"
              width={112}
              height={40}
              className="w-[9rem]"
            />
          </div>

          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <a href="#" className="flex items-center gap-1">
            Tours <IoIosArrowDown className="text-xs" />
          </a>
          <a href="#" className="flex items-center gap-1">
            Destination <IoIosArrowDown className="text-xs" />
          </a>
          <Link href="/gallary">Gallary</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

          <div className="flex items-center gap-3 mt-4">
            <FaUserCircle className="text-xl" />
            <FaWhatsapp className="text-green-600 text-xl" />
            <div className="text-xs leading-4">
              <p className="text-gray-500">Whatsapp</p>
              <p className="text-green-400 font-semibold">
                +990-737 621 432
              </p>
            </div>
          </div>

          <button className="bg-green-400 text-white py-2 px-5 rounded-full font-semibold mt-2">
            Book A Trip
          </button>
        </div>
      </div>

      {/* Background overlay (optional smud effect) */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
        />
      )}
 
    </>
  );
}
