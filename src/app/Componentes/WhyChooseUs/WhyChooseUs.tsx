// components/WhyChooseUs.jsx
import {
    FaHeadset,
    FaMapMarkedAlt,
    FaHandshake,
    FaUserFriends,
    FaTags,
    FaGlobeAmericas,
  } from "react-icons/fa";
  
  export default function WhyChooseUs() {
    return (
      <section className="relative bg-white py-20 overflow-hidden hidden md:block">
        {/* Balloons */}
        <img
          src="https://demo.qzency.com/html/tripfy/preview/assets/image/banner-img/pngtree-big-ballon.png"
          className="absolute top-40 left-4 w-20 md:w-32"
          alt="Balloon"
        />
        <img
          src="https://demo.qzency.com/html/tripfy/preview/assets/image/banner-img/pngtree-small-ballon.png"
          className="absolute bottom-12 right-6 w-20 md:w-32"
          alt="Balloon"
        />
  
        {/* Heading */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center ">
          <h3 className="text-sm font-semibold text-green-700 bg-green-100 px-4 py-1 inline-block rounded-full mb-2">
            Why Choose Us
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Your Trusted Travel Partner
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Leading The Way In Small Group Adventures For Over 20 Years.
            Discover How Were Redefining The Future Of Travel.
          </p>
        </div>
  
        {/* Features + Traveler */}
        <div className="relative max-w-7xl mx-auto h-[850px] md:h-[600px] px-4">
          {/* Traveler */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
            <img
              src="https://demo.qzency.com/html/tripfy/preview/assets/image/banner-img/tourist-making-unimportant.png"
              alt="Traveler"
              className="w-[200px] md:w-[280px]"
            />
          </div>
  
          {/* Feature Cards */}
          {/* Top Left - 24/7 Support */}
          <div className="absolute flex gap-2 items-start w-[90%] sm:w-[18rem] p-4 rounded-lg bg-blue-100 shadow-md z-10
            top-[2rem] md:top-[5rem] left-[5%] md:left-[12rem]">
            <div className="text-2xl text-blue-600">
              <FaHeadset />
            </div>
            <div>
              <h4 className="font-semibold text-blue-600 mb-1">24/7 Support</h4>
              <p className="text-sm text-gray-600">
                Tailor-made itineraries to suit your preferences and needs.
              </p>
            </div>
          </div>
  
          {/* Left Mid - Trusted Service */}
          <div className="absolute flex gap-2 items-start w-[90%] sm:w-[18rem] p-4 rounded-lg bg-green-100 shadow-md z-10
            top-[8rem] md:top-[14rem] left-[5%] md:left-[10rem]">
            <div className="text-2xl text-green-600">
              <FaHandshake />
            </div>
            <div>
              <h4 className="font-semibold text-green-600 mb-1">Trusted Service</h4>
              <p className="text-sm text-gray-600">
                Tailor-made itineraries to suit your preferences and needs.
              </p>
            </div>
          </div>
  
          {/* Bottom Left - Easy Booking */}
          <div className="absolute flex gap-2 items-start w-[90%] sm:w-[18rem] p-4 rounded-lg bg-orange-100 shadow-md z-10
            bottom-[10rem] md:bottom-[6rem] left-[5%] md:left-[12rem]">
            <div className="text-2xl text-orange-600">
              <FaUserFriends />
            </div>
            <div>
              <h4 className="font-semibold text-orange-600 mb-1">Easy Booking</h4>
              <p className="text-sm text-gray-600">
                Tailor-made itineraries to suit your preferences and needs.
              </p>
            </div>
          </div>
  
          {/* Top Right - Tailored Itineraries */}
          <div className="absolute flex gap-2 items-start w-[90%] sm:w-[18rem] p-4 rounded-lg bg-green-100 shadow-md z-10
            top-[2rem] md:top-[5rem] right-[5%] md:right-[12rem]">
            <div className="text-2xl text-green-600">
              <FaGlobeAmericas />
            </div>
            <div>
              <h4 className="font-semibold text-green-600 mb-1">Tailored Itineraries</h4>
              <p className="text-sm text-gray-600">
                Tailor-made itineraries to suit your preferences and needs.
              </p>
            </div>
          </div>
  
          {/* Right Mid - Destination Experts */}
          <div className="absolute flex gap-2 items-start w-[90%] sm:w-[18rem] p-4 rounded-lg bg-orange-100 shadow-md z-10
            top-[8rem] md:top-[14rem] right-[5%] md:right-[9rem]">
            <div className="text-2xl text-orange-600">
              <FaMapMarkedAlt />
            </div>
            <div>
              <h4 className="font-semibold text-orange-600 mb-1">Destination Experts</h4>
              <p className="text-sm text-gray-600">
                Tailor-made itineraries to suit your preferences and needs.
              </p>
            </div>
          </div>
  
          {/* Bottom Right - Exclusive Offers */}
          <div className="absolute flex gap-2 items-start w-[90%] sm:w-[18rem] p-4 rounded-lg bg-purple-100 shadow-md z-10
            bottom-[10rem] md:bottom-[6rem] right-[5%] md:right-[13rem]">
            <div className="text-2xl text-purple-600">
              <FaTags />
            </div>
            <div>
              <h4 className="font-semibold text-purple-600 mb-1">Exclusive Offers</h4>
              <p className="text-sm text-gray-600">
                Tailor-made itineraries to suit your preferences and needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  