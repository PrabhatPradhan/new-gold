"use client";
import Image from "next/image";
import "./Footer.css";
import React, { useEffect } from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa6";
import 'aos/dist/aos.css';
export default function Footer() {
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
    <div  data-aos="fade-up" className="footer">
      <footer className="bg-[url('/Images/footer-back.png')] text-white   px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-4  pb-10">
          {/* Subscribe Card */}
          <div
          id="footrt-form"
            className="bg-green-100 rounded-b-2xl  w-[23rem]  p-12 lg:col-span-1 "
            style={{
              backgroundImage: "url('/Images/footer-two-contact-bg.png')",
            }}
          >
            <div className="flex justify-center mb-4">
              <Image
                src="/Images/nav-logo.png"
                alt="Logo"
                width={150}
                height={60}
                className="object-contain"
              />
            </div>
            <h2 className="text-center text-lg md:text-xl lg:text-2xl font-bold text-black mb-2">
              Sign up for exclusive deals and see price drops!
            </h2>
            <p className="text-center text-gray-600 mb-4">
              Get our latest deals and updates
            </p>
            <div className="flex items-center rounded-full border border-gray-300 bg-white overflow-hidden">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 px-4 py-2 outline-none text-black"
              />
            </div>
            <button className="mt-4 w-full py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full">
              Subscribe
            </button>
          </div>

          {/* Quick Links */}
          <div className="ml-42 mt-19">
            <h3 className="text-lg font-bold mb-3">Quick Link</h3>
            <ul className="space-y-2 text-gray-300">
              <li>About us</li>
              <li>Destinations</li>
              <li>Tour Package</li>
              <li>Tour Guide</li>
              <li>Article</li>
            </ul>
          </div>

          {/* Destinations */}
          <div className=" ml-26 mt-19">
            <h3 className="text-lg font-bold mb-3">Destination</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Egypt Tour</li>
              <li>New York Tour</li>
              <li>Indonesia Tour</li>
              <li>Nepal Tour</li>
              <li>Saudi Arab Tour</li>
            </ul>
          </div>

          {/* Address & Payments */}
          <div className="mt-19 ml-12">
            <h3 className="text-lg font-bold mb-3">📍 Address</h3>
            <p className="text-gray-300 mb-2">House 177, Avenue 01, Mirpur</p>
            <p className="text-gray-300 mb-4">DOHS, Dhaka Bangladesh</p>

            <h4 className="text-white font-semibold mb-2">Payment Partner</h4>
            <div className="flex flex-wrap gap-2">
              <Image
                src="/Images/footer-ic-1.jpg"
                alt="Visa"
                width={50} // ✅ set to appropriate size
                height={50}
                className=" rounded-2xl h-6 w-12 "
              />
              <Image
                src="/Images/footer-ic-2.png"
                alt="Stripe"
                width={50} // ✅ set to appropriate size
                height={50}
                className=" rounded-2xl h-6 w-12 "
              />
              <Image
                src="/Images/footer-ic-3.jpg"
                alt="PayPal"
                width={50} // ✅ set to appropriate size
                height={50}
                className=" rounded-2xl h-6 w-12"
              />
              <Image
                src="/Images/footer-ic-4.png"
                alt="wow"
                width={50} // ✅ set to appropriate size
                height={50}
                className=" rounded-2xl h-6 w-12 "
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>
            &copy;Copyright 2025 Tourpeak | Design by{" "}
            <span className="text-white font-semibold">Qzency</span>
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <FaFacebookF className="hover:text-white" />
            <FaXTwitter className="hover:text-white" />
            <FaLinkedinIn className="hover:text-white" />
            <FaPinterestP className="hover:text-white" />
          </div>
        </div>
      </footer>
    </div>
  );
}
