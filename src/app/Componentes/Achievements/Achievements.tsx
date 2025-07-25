"use client";
import { FaUsers, FaProjectDiagram, FaHourglassHalf, FaTrophy } from "react-icons/fa";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function StatsSection() {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.default.init({
        duration: 1000,
        once: true,
        offset: 120,
      });
    });
  }, []);

  const stats = [
    {
      icon: <FaUsers size={28} />,
      value: "26k+",
      label: "Happy Customers",
    },
    {
      icon: <FaProjectDiagram size={28} />,
      value: "700+",
      label: "Projects Completed",
    },
    {
      icon: <FaHourglassHalf size={28} />,
      value: "15+",
      label: "Years of Experience",
    },
    {
      icon: <FaTrophy size={28} />,
      value: "5+",
      label: "Award Winner",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] text-white py-16" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-[#1e1e1e] hover:shadow-lg hover:shadow-cyan-500/30 rounded-2xl py-8 px-6 text-center transition-transform duration-300 hover:scale-105"
          >
            <div className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-4">
              {stat.icon}
            </div>
            <div className="text-3xl font-extrabold text-white">{stat.value}</div>
            <div className="text-sm text-gray-300 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
