"use client";

import { FaArrowRight } from "react-icons/fa";
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
export default function PromoBanner() {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.default.init({
        duration: 1000,
        once: true,
        offset: 120,
      });
    });
    
  }, []);
  const [showForm, setShowForm] = useState(false);
  return (
  
    <> 
    <div className="mid"   data-aos="fade-up">
      <div className="bg-cover bg-center w-full" 
      style={{
        backgroundImage: "url('/Images/mid-bbg.png')",
      }} >
      <div className="max-w-7xl ml-8 mx-auto flex flex-col md:flex-row items-center justify-between py-12  md:px-12">
        {/* Left Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-[#131313] leading-tight">
            Grab up to <span className="text-orange-500">35% off</span> <br />
            on your favorite <br />
            <span>Destination</span>
          </h2>
          <p className="mt-4 text-[#4f4f4f]">
            Limited time offer , don t miss the opportunity
          </p>
          <button
        onClick={() => setShowForm(true)}
        className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-orange-700 transition"
      >
        Book Now <FaArrowRight />
      </button>
        </div>

        {/* Right Section (Image) */}
        {/* <div className="w-full md:w-1/2 relative">
          <img
            src="/Images/Screenshot.png"
            alt="Promo"
            className="rounded-xl object-cover w-full h-[300px] md:h-[400px]"
          />
        </div> */}
      </div>
    </div>
    </div>

    {showForm && (
        <div className="fixed inset-0   bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
            {/* Close Button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
            >
              &times;
            </button>

            <h2 className="text-xl font-semibold mb-4">Book Your Trip</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Travel Date</label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Number of People</label>
                <input
                  type="number"
                  min="1"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="e.g. 2"
                />
              </div>
              <button
                type="submit"
                className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600 transition"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
