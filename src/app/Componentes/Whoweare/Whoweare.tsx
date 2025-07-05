"use client";
import Image from "next/image";
import { FaShieldAlt, FaUserTie, FaClock } from "react-icons/fa";
import 'aos/dist/aos.css';
import { useEffect } from "react";
export default function WhoWeAre() {
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
    <section
    data-aos="fade-up"
      className="py-12 bg-cover bg-center"
      style={{
        backgroundImage: "url('/Images/who-we-area-three-bg.png')",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Left Content */}
          <div className="lg:w-7/12 w-full">
            <h2
              style={{
                fontFamily: "'Pacifico', cursive",
                position: "relative",
                fontSize: "25px",
                color: "#22c55e",
                marginBottom: "8px",
              }}
            >
              Who We Are
              <span
                style={{
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: -6,
                  width: "25%",
                  height: "2px",
                  backgroundColor: "#22c55e",
                  borderRadius: "9999px",
                  display: "block",
                  marginBottom: "4px",
                }}
              ></span>
            </h2>

            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-snug">
              Our Main Goal To Provide <br />
              Best Travel Solutions
            </h2>
            <p className="text-slate-600 mb-8 text-base">
              Odyzaa’s mission is to bring travel enthusiasts together through
              our Organized Adventure Platform, connecting them with expert
              operators who design unforgettable and sustainable multi-day
              experiences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center text-center px-2">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xl mb-2">
                  <FaShieldAlt />
                </div>
                <h4 className="font-semibold text-lg text-slate-900">
                  Safety First
                </h4>
                <p className="text-sm text-slate-500">
                  Safety First Ensuring Toward Secure Adventure
                </p>
              </div>

              <div className="flex flex-col items-center text-center px-2">
                <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-xl mb-2">
                  <FaUserTie />
                </div>
                <h4 className="font-semibold text-lg text-slate-900">
                  Trusted Guide
                </h4>
                <p className="text-sm text-slate-500">
                  Trusted Guides Leading the Way to Safe Adventures
                </p>
              </div>

              <div className="flex flex-col items-center text-center px-2">
                <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 text-xl mb-2">
                  <FaClock />
                </div>
                <h4 className="font-semibold text-lg text-slate-900">
                  Time Saving
                </h4>
                <p className="text-sm text-slate-500">
                  Time Saving Strategies for Effortless Adventures
                </p>
              </div>
            </div>

            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md text-sm shadow">
              Discover More
            </button>
          </div>

          {/* Right Images */}
          {/* Right Images */}
          <div className="relative w-full lg:w-5/12 hidden md:block">
            {/* Experience Box */}
            <div className="absolute top-6 sm:top-12 bg-green-600 text-white rounded-full px-4 py-2 shadow-lg flex items-center gap-3 z-10 border-2 border-white">
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 border-white flex items-center justify-center font-bold text-base sm:text-lg">
                15
              </div>
              <div className="leading-tight text-xs sm:text-sm font-medium">
                Years Of <br />
                Experience
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 relative">
              {/* Main Large Image on Top Right */}
              <div className="col-span-2 relative w-[26rem] ml-16 h-60 sm:h-72 md:h-80 lg:h-82 overflow-hidden group">
                <Image
                  src="/Images/who-1.jpeg"
                  alt="Main Image"
                  fill
                  className="rounded-lg object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 focus:scale-110"
                />
              </div>

              {/* Two Smaller Images in Bottom Row */}
              <div className="absolute h-[29.5rem] w-[50%] overflow-hidden group">
                <Image
                  src="/Images/wh0-2.jpeg"
                  alt="Image 2"
                  fill
                  className="border-4 mt-39 border-white rounded-lg object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 focus:scale-110"
                />
              </div>

              <div className="relative block ml-[15.5rem] h-32 w-full overflow-hidden group">
                <Image
                  src="/Images/who-3.jpeg"
                  alt="Image 3"
                  fill
                  className="rounded-lg object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 focus:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
