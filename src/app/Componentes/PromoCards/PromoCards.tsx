// components/PromoCards.tsx
"use client"
import { useEffect } from "react";
import 'aos/dist/aos.css';
export default function PromoCards() {
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
     
<div className="flex justify-center px-4 py-10"   data-aos="fade-up">
  <div className="grid md:grid-cols-2 gap-12 max-w-7xl w-full">
    {/* Card 1 - Maldives */}
    <div className="group relative rounded-2xl overflow-hidden h-72">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 scale-100 group-hover:scale-110"
        style={{
          backgroundImage:
            "url('https://demo.qzency.com/html/tripfy/preview/assets/image/card-img/home3-offer-card-1.png')",
        }}
      ></div>
      <div className="relative z-10 text-white p-6 flex flex-col justify-between h-full">
        {/* Add your content here */}
      </div>
      <div className="absolute inset-0  bg-opacity-20 z-0" />
    </div>

    {/* Card 2 - Summer Sale */}
    <div className="group relative rounded-2xl overflow-hidden h-72">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 scale-100 group-hover:scale-110"
        style={{
          backgroundImage:
            "url('https://demo.qzency.com/html/tripfy/preview/assets/image/card-img/home3-offer-card-2.png')",
        }}
      ></div>
      <div className="relative z-10 text-white p-6 flex flex-col justify-between h-full">
        {/* Add your content here */}
      </div>
      <div className="absolute inset-0   bg-opacity-20 z-0" />
    </div>
  </div>
</div>

 
  );
}
