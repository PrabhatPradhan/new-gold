"use client";

import { FaArrowRight } from "react-icons/fa";
import 'aos/dist/aos.css';
import { useEffect } from "react";
export default function PromoBanner() {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 120,
      });
    });
  }, []);
  return (
    <div className="mid"   data-aos="fade-up">
      <div className="bg-cover bg-center w-full" 
      style={{
        backgroundImage: "url('/Images/mid-bbg.png')",
      }} >
      <div className="max-w-7xl ml-8 mx-auto flex flex-col md:flex-row items-center justify-between py-12 px-6 md:px-12">
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
          <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-orange-700 transition">
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
  );
}
