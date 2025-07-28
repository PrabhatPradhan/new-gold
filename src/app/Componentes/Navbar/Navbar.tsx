"use client";
import React, { useState } from "react";
import { FaWhatsapp  } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";
import ToursDropdown from "./ToursDropdown/ToursDropdown";
import DestinationDropdown from "./DestinationDropdown/DestinationDropdown";

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const bookButtonClass =
    "bg-green-600 text-white py-2 px-5 rounded-full font-semibold hover:bg-green-700 transition cursor-pointer";

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full px-4 md:px-10 py-4 flex justify-between items-center bg-white z-50 shadow">
        <div className="flex items-center gap-[7rem]">
          <Link href="/">
            <Image
              src="/Images/nav-logo.png"
              alt="Gold Travels Logo"
              width={112}
              height={40}
              className="w-[8rem]"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-8 text-[1rem] font-medium cursor-pointer">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <ToursDropdown   />
            <DestinationDropdown />
            <Link href="/gallary">Gallary</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>

        {/* Right desktop */}
        <div className="hidden lg:flex items-center gap-5 cursor-pointer">
           
          <div className="flex items-center gap-2">
            <FaWhatsapp className="text-green-800 text-xl" />
            <div className="text-xs leading-4">
              <a href="tel:9990447799">
                <p className="text-gray-500">Whatsapp</p>
                <p className="text-green-600 font-semibold">+9990447799</p>
              </a>
            </div>
          </div>
          <button onClick={() => setShowForm(true)} className={bookButtonClass}>
            Book A Trip
          </button>
        </div>

        {/* Hamburger Mobile */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <RxCross2 size={24} /> : <GiHamburgerMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] max-w-[300px] bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden shadow-lg ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 pt-6 flex flex-col gap-4 text-sm font-medium cursor-pointer">
          <div className="mb-6">
            <Image
              src="/Images/nav-logo.png"
              alt="Gold Travels Logo"
              width={112}
              height={40}
              className="w-[9rem]"
              priority
            />
          </div>

          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <ToursDropdown isMobile />
          <DestinationDropdown isMobile />
          <Link href="/gallary" onClick={() => setMenuOpen(false)}>Gallary</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

          <div className="flex items-center gap-3 mt-4">
            
            <FaWhatsapp className="text-green-600 text-xl" />
            <a
              href="https://wa.me/919907376214"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs leading-4 cursor-pointer text-right"
            >
              <p className="text-gray-500">WhatsApp</p>
              <p className="text-green-500 font-semibold">+91 99073 76214</p>
            </a>
          </div>

          <button
          
            onClick={() => {
              setMenuOpen(false);
              setShowForm(true);
            }}
            className={bookButtonClass}
          >
            Book A Trip
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* Booking Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-40 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6 relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-4 text-2xl text-gray-500 hover:text-black"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4 text-center">Book Your Trip</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Full Name</label>
                <input type="text" placeholder="Your Name" className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input type="email" placeholder="you@example.com" className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium">Travel Date</label>
                <input type="date" className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium">Number of People</label>
                <input type="number" min="1" placeholder="e.g. 2" className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>
              <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition">
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
