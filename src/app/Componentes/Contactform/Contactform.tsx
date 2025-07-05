'use client'; // if using app directory

import { FaPhoneAlt, FaMapMarkerAlt, FaRegClock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { PiPaperPlaneRightFill } from 'react-icons/pi';

export default function ContactPage() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-10 px-6 md:px-16 py-16 bg-white">
      {/* Contact Form */}
      <div className="bg-gray-100 rounded-lg p-8 w-full md:w-1/2 shadow-md">
        <h2 className="text-xl font-semibold mb-2">Drop us a Line</h2>
        <p className="text-sm text-gray-500 mb-6">
          Drop us an email and we’ll get back to you within 24hrs...
        </p>

        <form className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="👤 Donald"
              className="w-1/2 px-4 py-2 rounded border border-gray-300 focus:outline-none"
            />
            <input
              type="text"
              placeholder="📞 +990-737 621 432"
              className="w-1/2 px-4 py-2 rounded border border-gray-300 focus:outline-none"
            />
          </div>
          <input
            type="email"
            placeholder="✉️ hello@example.com"
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none"
          />
          <textarea
            
            placeholder="📝 Leave your message..."
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none"
          ></textarea>

          <div className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            <label>
              Agree to our{' '}
              <span className="text-red-500">Terms of service</span> and{' '}
              <span className="text-red-500">Privacy Policy</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded font-medium flex justify-center items-center gap-2"
          >
            Submit <PiPaperPlaneRightFill />
          </button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Have Any Question? <br /> Contact Us!
        </h2>
        <p className="text-gray-600 mb-8 max-w-md">
          A bold and innovative startup agency, we empower emerging businesses by creating
          compelling digital identities that drive success.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <FaPhoneAlt className="text-green-600" />
              <h4 className="font-semibold">Call Us On</h4>
            </div>
            <p className="text-sm text-gray-700">+990-737 621 432</p>
            <p className="text-sm text-gray-700">+990-737 621 500</p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-2">
              <MdEmail className="text-green-600" />
              <h4 className="font-semibold">Send Mail</h4>
            </div>
            <p className="text-sm text-gray-700">info@example.com</p>
            <p className="text-sm text-gray-700">hello@example.com</p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-2">
              <FaMapMarkerAlt className="text-green-600" />
              <h4 className="font-semibold">Address</h4>
            </div>
            <p className="text-sm text-gray-700">
              House 177, Avenue 01, Mirpur DOHS, Dhaka, Bangladesh
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-2">
              <FaRegClock className="text-green-600" />
              <h4 className="font-semibold">Opening Hours</h4>
            </div>
            <p className="text-sm text-gray-700">Mon – Fri 8.00 am to 5.00 pm</p>
            <p className="text-sm text-gray-700">Weekend Closed</p>
          </div>
        </div>
      </div>
    </section>
  );
}
