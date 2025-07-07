// components/StatsSection.jsx
"use client"
import { FaUsers, FaProjectDiagram, FaHourglassHalf, FaTrophy } from 'react-icons/fa';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
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
      icon: <FaUsers size={32} />,
      value: '26k+',
      label: 'Happy Customers',
    },
    {
      icon: <FaProjectDiagram size={32} />,
      value: '700+',
      label: 'Projects Completed',
    },
    {
      icon: <FaHourglassHalf size={32} />,
      value: '15+',
      label: 'Years of Experience',
    },
    {
      icon: <FaTrophy size={32} />,
      value: '5+',
      label: 'Award Winner',
    },
  ];

  return (
    <section className="bg-[#111] text-white py-12"  data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <div className="text-white">{stat.icon}</div>
            <div className="text-3xl font-bold">{stat.value}</div>
            <div className="text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
