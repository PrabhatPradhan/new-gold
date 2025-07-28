"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import {
  FaStar,
  FaCity,
  FaUtensils,
  FaMapMarkedAlt,
  FaCar,
} from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { MdCall } from "react-icons/md";

// Dummy Navbar & Footer
import Navbar from "../../Componentes/Navbar/Navbar";
import Footer from "../../Componentes/Footer/Footer";
import Link from "next/link";
// Data
const tourPackages = [
  {
    id: 1,
    title: "Royal Rajasthan Tour Package",
    duration: "04 Nights - 05 Days",
    rating: 5,
    locations: "1N Manali - 2N Shimla - 1N Dharamshala - 1N Dalhousie",
    price: 5999,
    image: "https://images.unsplash.com/photo-1751013781844-fa6a78089e49?w=600",
    icons: ["city", "meals", "sightseeing", "transfer"],
    stars: 5,
    city: "Manali",
    theme: "Adventure",
    type: "Group Package",
    premium: true,
  },
  {
    id: 2,
    title: "Desert Delight Tour Package",
    duration: "03 Nights - 04 Days",
    rating: 4,
    locations: "1N Jaisalmer - 2N Jodhpur",
    price: 4999,
    image: "https://images.unsplash.com/photo-1751670346016-bda0dc756da9?q=80",
    icons: ["city", "meals", "sightseeing", "transfer"],
    stars: 4,
    city: "Jaisalmer",
    theme: "Relaxation",
    type: "Customizable",
    premium: false,
  },
  {
    id: 3,
    title: "Royal Rajasthan Tour Package",
    duration: "04 Nights - 05 Days",
    rating: 2,
    locations: "1N Manali - 2N Shimla - 1N Dharamshala - 1N Dalhousie",
    price: 5999,
    image: "https://images.unsplash.com/photo-1751013781844-fa6a78089e49?w=600",
    icons: ["city", "meals", "sightseeing", "transfer"],
    stars: 2,
    city: "Manali",
    theme: "Adventure",
    type: "Group Package",
    premium: true,
  },
  {
    id: 4,
    title: "Desert Delight Tour Package",
    duration: "03 Nights - 04 Days",
    rating: 3,
    locations: "1N Jaisalmer - 2N Jodhpur",
    price: 4999,
    image: "https://images.unsplash.com/photo-1751670346016-bda0dc756da9?q=80",
    icons: ["city", "meals", "sightseeing", "transfer"],
    stars: 3,
    city: "Jaisalmer",
    theme: "Relaxation",
    type: "Customizable",
    premium: false,
  },
];

const iconMap = {
  city: <FaCity title="City" />,
  meals: <FaUtensils title="Meals" />,
  sightseeing: <FaMapMarkedAlt title="Sightseeing" />,
  transfer: <FaCar title="Transfer" />,
};

export default function PackagesPage() {
  const [budget, setBudget] = useState([2500, 100000]);
  const [starFilter, setStarFilter] = useState([]);
  const [cityFilter, setCityFilter] = useState([]);
  const [themeFilter, setThemeFilter] = useState(false);
  const [typeFilter, setTypeFilter] = useState("");
  const [premiumOnly, setPremiumOnly] = useState(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const formatPrice = (price) =>
    price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "0";

  const filteredPackages = tourPackages.filter((pkg) => {
    return (
      pkg.price >= budget[0] &&
      pkg.price <= budget[1] &&
      (starFilter.length === 0 || starFilter.includes(pkg.stars)) &&
      (cityFilter.length === 0 || cityFilter.includes(pkg.city)) &&
      (!themeFilter || pkg.theme === "Adventure") &&
      (!typeFilter || pkg.type === typeFilter) &&
      (!premiumOnly || pkg.premium)
    );
  });

  const handleToggle = (filter, setFilter, value) => {
    setFilter((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  return (
    <>
      <Navbar />
      <div
        className="relative w-full h-[300px] flex flex-col justify-center pt-6 pl-6  text-white"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1510917181191-85abe24b5300?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <h1 className="relative text-4xl font-bold z-10 mt-6">Listing</h1>

        <div className="relative z-10 mt-4 px-6 py-2 rounded-full flex   space-x-2 text-sm text-white  ">
          <Link href="/">Home</Link>
          <span className="mx-1">➜</span>
          <span className="font-semibold">Listing</span>
        </div>
      </div>

      <div className="md:flex   px-4 md:px-12 border   ">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 md:sticky top-24 border-r bg-white  md:max-h-screen overflow-y-auto">
          <div className="md:hidden flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">Filters</h2>
            <button onClick={() => setMobileFilterOpen(!mobileFilterOpen)}>
              <Menu size={24} />
            </button>
          </div>

          <div
            className={`${
              mobileFilterOpen ? "block" : "hidden"
            } md:block p-4 space-y-6`}
          >
            {/* Budget */}
            <div>
              <h2 className="font-semibold mb-2">Budget (per person)</h2>
              <input
                type="range"
                min="2500"
                max="100000"
                value={budget[0]}
                onChange={(e) => setBudget([Number(e.target.value), budget[1]])}
                className="w-full"
              />
               
              <p className="text-sm mt-2 text-gray-600">
                ₹{formatPrice(budget[0])} - ₹{formatPrice(budget[1])}
              </p>
            </div>

            {/* Stars */}
            <div>
              <h2 className="font-semibold mb-2">Hotel Category</h2>
              {[2,3,4, 5].map((star) => (
                <div key={star} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={starFilter.includes(star)}
                    onChange={() =>
                      handleToggle(starFilter, setStarFilter, star)
                    }
                  />
                  <label>{star}★</label>
                </div>
              ))}
            </div>

            {/* Cities */}
            <div>
              <h2 className="font-semibold mb-2">Cities</h2>
              {["Manali", "Jaisalmer"].map((city) => (
                <div key={city} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={cityFilter.includes(city)}
                    onChange={() =>
                      handleToggle(cityFilter, setCityFilter, city)
                    }
                  />
                  <label>{city}</label>
                </div>
              ))}
            </div>

            {/* Theme */}
            <div>
              <h2 className="font-semibold mb-2">Themes</h2>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={themeFilter}
                  onChange={(e) => setThemeFilter(e.target.checked)}
                />
                <label>Adventure</label>
              </div>
            </div>

            {/* Type */}
             

            {/* Premium */}
            <div>
              <h2 className="font-semibold mb-2">Premium Packages</h2>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={premiumOnly}
                  onChange={(e) => setPremiumOnly(e.target.checked)}
                />
                <label>Only show premium</label>
              </div>
            </div>
          </div>
        </div>

        {/* Packages */}
        <div className="w-full bg-gray-100 p-4 md:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPackages.map((data) => (
              <div
                key={data.id}
                className="flex flex-col bg-white shadow-md rounded-xl overflow-hidden border"
              >
                {/* Image with overlay info */}
                <div className="w-full h-[12rem] relative">
                  <img
                    src={data.image}
                    alt={data.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                    <span className="text-xs bg-pink-200 text-pink-700 px-2 py-0.5 rounded-full font-medium">
                      {data.duration}
                    </span>
                    <span className="text-xs text-white flex items-center gap-1 bg-black/40 px-2 py-0.5 rounded-full">
                      {data.rating}{" "}
                      <FaStar className="text-yellow-400 text-sm" />
                    </span>
                  </div>
                </div>

                {/* Text content */}
                <div className="p-3 pt-2 flex flex-col gap-1.5">
                  <h3 className="text-sm font-semibold text-gray-800">
                    {data.title}
                  </h3>

                  <p className="text-xs text-gray-600 border border-gray-300 rounded px-2 py-0.5 w-fit">
                    {data.locations}
                  </p>

                  <div className="flex gap-2 text-lg text-gray-600">
                    {data.icons.map((key, idx) => (
                      <span key={idx}>{iconMap[key]}</span>
                    ))}
                  </div>

                  <div>
                    <p className="text-xs text-gray-600">Starting From :</p>
                    <p className="text-base font-bold text-red-600">
                      ₹{data.price.toLocaleString()}
                      <span className="text-xs text-gray-500">
                        {" "}
                        / Per Person
                      </span>
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-2">
                    <a
                       
                      href="https://wa.me/+919990447799"
                      className="flex items-center gap-1 bg-green-500 text-white text-xs px-3 py-1 rounded-full"
                    >
                      <BsWhatsapp />
                    </a>
                    <a
                      href="tel:+919990447799">
                    <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-full text-xs cursor-pointer">
                      <MdCall />
                    </button>
                    </a>
                  <Link href="/details-page/slug">

                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded-full text-xs ml-6 cursor-pointer">
                      More Details →
                    </button>
                  </Link>
                  </div>
                </div>
              </div>
            ))}
            {filteredPackages.length === 0 && (
              <p className="text-gray-500 text-center col-span-full">
                No packages match your filter.
              </p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
