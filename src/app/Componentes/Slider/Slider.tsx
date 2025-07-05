"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight, FaHeart } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { PiClockLight } from "react-icons/pi";
import { GoArrowUpRight } from "react-icons/go";
 
import AOS from "aos";
import "aos/dist/aos.css";

 
const data = [
  {
    id: 1,
    image: "/Images/slider-card.jpeg",
    location: "Paris, France",
    title: "Centipede Tour – Guided Arizona Desert Tour by ATV",
    rating: "4.8 (243)",
    price: "$189.25",
  },
  {
    id: 2,
    image: "/Images/slider-card-2.jpeg",
    location: "New York, USA",
    title: "Molokini and Turtle Town Snorkeling Adventure Aboard",
    rating: "4.8 (243)",
    price: "$225",
  },
  {
    id: 3,
    image: "/Images/slider-card-3.jpeg",
    location: "London, UK",
    title: "Westminster Walking Tour & Westminster Abbey Entry",
    rating: "4.8 (243)",
    price: "$943",
  },
  {
    id: 4,
    image: "/Images/slider-card-2.jpeg",
    location: "New York, USA",
    title: "All Inclusive Ultimate Circle Island Day Tour with Lunch",
    rating: "4.8 (243)",
    price: "$771",
  },
  {
    id: 5,
    image: "/Images/slider-card.jpeg",
    location: "Paris, France",
    title: "Centipede Tour – Guided Arizona Desert Tour by ATV",
    rating: "4.8 (243)",
    price: "$189.25",
  },
  {
    id: 6,
    image: "/Images/slider-card-2.jpeg",
    location: "New York, USA",
    title: "Molokini and Turtle Town Snorkeling Adventure Aboard",
    rating: "4.8 (243)",
    price: "$225",
  },
  {
    id: 7,
    image: "/Images/slider-card-3.jpeg",
    location: "London, UK",
    title: "Westminster Walking Tour & Westminster Abbey Entry",
    rating: "4.8 (243)",
    price: "$943",
  },
  {
    id: 8,
    image: "/Images/slider-card.jpeg",
    location: "New York, USA",
    title: "All Inclusive Ultimate Circle Island Day Tour with Lunch",
    rating: "4.8 (243)",
    price: "$771",
  },
];

export default function TopTrending() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (container) {
      const cardWidth = 260 + 24; // 260px card + 24px gap (gap-6 = 1.5rem)
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // only animate once
      offset: 120,    // offset (in px) before triggering animation
    });
  }, []);
  return (
    <>
   
  {/* Your content here */}
   
    <div className="bg-[#f5f5f5] p-4 md:p-8 overflow-hidden relative" data-aos="fade-up">
      <div className="mx-4 md:mx-10">
        <div className="flex flex-row justify-between items-center mb-4">
          <h2 className="text-xl md:text-2xl font-bold text-[#131313]">
            Top Trending
          </h2>
          <a
          href="#"
          className="text-slate-700   flex items-center gap-1 font-medium hover:underline text-sm"
        >
          See all
          <GoArrowUpRight />
        </a>
        </div>

        <div className="relative">
          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-2 no-scrollbar"
          >
            {data.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md p-2 min-w-[260px] max-w-[260px] flex-shrink-0  "
              >
                <div className="relative w-full h-[180px] rounded-md overflow-hidden group">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                  />
                  <button className="absolute bottom-2 right-2 bg-white p-1 rounded-full shadow">
                    <FaHeart className="text-gray-500 text-sm" />
                  </button>
                </div>

                <div className="mt-3 text-sm text-gray-600 flex items-center gap-1">
                  <MdLocationOn className="text-sm" /> {item.location}
                </div>
                <h3 className="mt-2 font-medium text-[14px] leading-snug">
                  {item.title}
                </h3>
                <div className="mt-1 text-yellow-500 text-sm">
                  ★★★★★ <span className="text-gray-600">{item.rating}</span>
                </div>
                <div className="flex justify-between items-center mt-2 text-sm">
                  <div className="flex items-center gap-1">
                    <PiClockLight className="text-sm" /> 4 days
                  </div>
                  <div>
                    From <span className="font-semibold">{item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Buttons — Visible on all screens now */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute left-[-50px] top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow z-10"
          >
            <FaArrowLeft />
          </button>

          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute right-[-50px] top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow z-10"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
     
    </>
  );
}
