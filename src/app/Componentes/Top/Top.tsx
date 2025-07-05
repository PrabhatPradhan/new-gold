"use client";
 
import React, { useEffect } from "react";
import 'aos/dist/aos.css';

 
 
export default function Top() {
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
    <>
      
        <div className="relative w-full h-[35rem] overflow-hidden" data-aos="fade-up">
          {/* Background YouTube Video */}
          <div className="absolute top-0 left-0 w-full h-full z-0 bg-[('')]">
            <video
              className="w-[100%] h-[auto]  absolute top-16 left-0 object-cover pointer-events-none"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/Video/bannervideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Optional Overlay Content */}
          {/* <div className="absolute bottom-20 left-6 md:left-10 text-white z-10 max-w-[90%] md:max-w-[600px]">
      <h3 className="text-xl">Starting at $978</h3>
      <h1 className="text-3xl md:text-5xl font-bold mt-2">
        Iceland’s legendary Golden Circle
      </h1>
      <p className="mt-4">
        Enjoy a full-day bus tour of Iceland’s legendary Golden Circle. Soak
        in the warm thermal waters of the Secret Lagoon.
      </p>
      <button className="mt-6 py-2 px-6 bg-white text-black rounded">
        View Tour
      </button>
    </div> */}
        </div>
      
    </>
  );
}
