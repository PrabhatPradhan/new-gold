"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import InclusionExclusion from "../../Componentes/InclusionExclusion/InclusionExclusion";
import PackageHeaderdetail from "../../Componentes/PackageHeaderdetail/PackageHeaderdetail";
import Navbar from "../../Componentes/Navbar/Navbar";
import Footer from "../../Componentes/Footer/Footer";
import {
  FaMapMarkedAlt,
  FaListUl,
  FaBinoculars,
  FaSlidersH,
} from "react-icons/fa";

import Image from "next/image";

const galleryImages = [
  "/Images/ditls-1.jpeg",
  "/Images/ditls-2.jpeg",
  "/Images/ditls-3.jpeg",
  "/Images/ditls-4.jpeg",
  "/Images/ditls-5.jpeg",
];

const navTabs = [
  { icon: <FaMapMarkedAlt />, label: "Overview" },
  { icon: <FaListUl />, label: "Inclusion" },
  { icon: <FaBinoculars />, label: "Exclusion" },
  { icon: <FaSlidersH />, label: "Days" },
];

export default function TourUI() {
  const [currentImage, setCurrentImage] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const handlePrev = () => {
    setCurrentImage((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImage((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Inquiry form submitted!");
  };

  const fullItinerary = [
    {
      day: "Day 1",
      title: "Arrival - Johannesburg",
      description: `Arrive at Johannesburg International Airport and proceed for overnight stay at Johannesburg.`,
      note: `For any clients arriving other than the group arrival timings, the transfers will be charged as per the costs mentioned in the itinerary.`,
      meals: "Dinner",
    },
    {
      day: "Day 2",
      title: "Johannesburg – Lion Park - Sun City",
      description: `After breakfast, depart for the most memorable tour today. View the lions up close while inside a secure vehicle cage, visit the Cheetah & Wild-Dog viewing areas, then head to Sun City for an overnight stay.`,
      meals: "Breakfast, Lunch, Dinner",
    },
    {
      day: "Day 3",
      title: "Sun City – Leisure Day",
      description: `Enjoy a full day of leisure at Sun City. Explore the Valley of Waves, Water World, or try your luck at the casino. Relax or enjoy various optional adventure activities.`,
      meals: "Breakfast, Lunch, Dinner",
    },
    {
      day: "Day 4",
      title: "Sun City – Pretoria – Johannesburg – George",
      description: `Check out from Sun City and proceed to Pretoria for a panoramic city tour. Visit Union Buildings and other key landmarks. Later, transfer to the airport for your flight to George. On arrival, transfer to your hotel in Garden Route.`,
      meals: "Breakfast, Lunch, Dinner",
    },
    {
      day: "Day 5",
      title: "Garden Route – Oudtshoorn – Cango Caves & Wildlife Ranch",
      description: `Drive to Oudtshoorn and explore the fascinating Cango Caves with stunning limestone formations. Visit Cango Wildlife Ranch to see cheetahs, crocodiles, and more. Return to your hotel.`,
      meals: "Breakfast, Lunch, Dinner",
    },
    {
      day: "Day 6",
      title: "Garden Route – Mossel Bay",
      description: `Visit the Dias Museum Complex and enjoy breathtaking ocean views. Optionally try thrilling water sports. Spend time at the beach or take a stroll through the charming town.`,
      meals: "Breakfast, Lunch, Dinner",
    },
    {
      day: "Day 7",
      title: "Garden Route – Cape Town",
      description: `Transfer to Cape Town by scenic drive. On arrival, check in to the hotel. Enjoy the evening at leisure or explore V&A Waterfront.`,
      meals: "Breakfast, Lunch, Dinner",
    },
    {
      day: "Day 8",
      title: "Cape Town – Table Mountain – City Tour",
      description: `Ascend Table Mountain via cableway (weather permitting) and get a bird's eye view of the city. Later, proceed for a city tour including Company Gardens, Greenmarket Square, Signal Hill, and more.`,
      meals: "Breakfast, Lunch, Dinner",
    },
    {
      day: "Day 9",
      title: "Game Drive",
      description: `Depart for early morning game drive in Pilanesberg National Park. Free day at Sun City. Overnight at hotel.`,
      note: "No Lunch Today",
      meals: "Breakfast, Dinner",
    },
    {
      day: "Day 10",
      title: "Johannesburg – George (By Flight – 2hrs Approx)",
      description: `Take a flight to George and explore the scenic Garden Route. Overnight at George.`,
      meals: "Breakfast, Lunch, Dinner",
    },
  ];

  const visibleItinerary = showAll ? fullItinerary : fullItinerary.slice(0, 2);

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen relative mt-26 ">
        <div className="flex flex-col lg:flex-row w-full">
          <div className="flex-1 bg-white p-4 overflow-y-auto">
            <div className="relative w-full h-96 rounded overflow-hidden ">
              <Image
                src={galleryImages[currentImage]}
                alt="Gallery Image"
                fill
                className="object-cover rounded"
              />
              <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
                <button
                  onClick={handlePrev}
                  className="bg-black bg-opacity-50 p-2 rounded-full text-white"
                >
                  <FaChevronLeft />
                </button>
              </div>
              <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
                <button
                  onClick={handleNext}
                  className="bg-black bg-opacity-50 p-2 rounded-full text-white"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>

            <PackageHeaderdetail />

            <div className="flex gap-3 p-4 flex-wrap mt-6">
              {navTabs.map((tab, idx) => (
                <button
                  key={idx}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium shadow-md transition-all duration-300
        ${
          idx === 0
            ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
            : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
        } hover:scale-105`}
                >
                  <span className="text-lg">{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            <hr />
            <InclusionExclusion />

            <div className="border rounded-lg p-6 bg-white mt-12">
              <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
                <FaListUl className="text-blue-500 text-3xl" />
                Day wise travel itinerary
              </h2>
              <hr />
              <div className="space-y-6 text-sm leading-relaxed">
                {visibleItinerary.map((item, index) => (
                  <div key={index}>
                    <hr />
                    <p className="text-red-500 mt-2 font-semibold">
                      {item.day}:{" "}
                      <span className="text-black font-bold">{item.title}</span>
                    </p>
                    <p>{item.description}</p>
                    {item.note && (
                      <p className="text-xs font-semibold italic mt-1">
                        Note: {item.note}
                      </p>
                    )}
                    <p className="font-semibold">
                      Included Meals:{" "}
                      <span className="font-normal">{item.meals}</span>
                    </p>
                  </div>
                ))}
              </div>

              {!showAll && (
                <div className="text-center mt-6">
                  <button
                    onClick={() => setShowAll(true)}
                    className="px-5 py-2 bg-blue-600 text-white cursor-pointer rounded hover:bg-blue-700 transition"
                  >
                    Read More
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="w-full lg:w-1/3 bg-gray-100 p-6 flex flex-col gap-1 sticky top-20 self-start h-fit">
            <div className="md:static md:mt-0 fixed bottom-0 left-0 w-full bg-white shadow-md p-4 z-50 md:w-auto md:bg-transparent md:shadow-none">
              <h2 className="text-xl font-semibold">Starting Price</h2>
              <div className="text-2xl font-bold">
                ₹ 75,000-/{" "}
                <span className="text-sm font-normal">per person</span>
                <p className="text-xs text-yellow-600">* GST & TCS Extra</p>
              </div>
            </div>

            <div className="mt-2 bg-white p-4 rounded-2xl shadow-xl max-w-xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Inquiry Form
              </h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
                />
                <textarea
                  placeholder="Your Message"
                  rows="3"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
                >
                  Submit Inquiry Form
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
