 
import Footer from "../Componentes/Footer/Footer";
import Navbar from "../Componentes/Navbar/Navbar";
import Link from "next/link";

export default function  Page() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: `url('https://www.aarti-industries.com/Upload/Images/masthead/privacy-policy-lead.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="py-18 px-[5%] mt-12 flex flex-col md:flex-row items-center justify-between"
      >
        <div>
          <h1 className="text-4xl md:text-5xl mt-10 font-bold text-[#0f172a] mb-2">
            Privacy Policy
          </h1>
          <p className="text-[#666] text-base">Your Privacy Matters to Us</p>
        </div>
      </section>

      {/* Intro Section */}
      <div className="px-6 py-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between w-full px-6 py-12 bg-gradient-to-r from-blue-50 to-white">
          <div className="md:w-1/2 space-y-4 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold">
              <span className="text-black">Privacy Policies</span> for Safe &
              Secure Travel Planning
            </h1>
            <p className="text-gray-600">
              Gold Travel is committed to protecting your personal information
              when you explore, book, or inquire about your dream vacations with
              us.
            </p>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img
              src="https://goldtravels.net/public/front/assets/images/logo.png"
              alt="Travel illustration"
              width={500}
              height={700}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white text-gray-500 px-4 py-12 sm:px-6 lg:px-1 max-w-6xl mx-auto">
          <p className="mb-4 text-sm sm:text-base">
            At <strong>Gold Travel</strong>, your trust is our top priority. This
            Privacy Policy explains how we collect, use, and protect your personal
            data when you browse our website, book packages, or contact us for
            assistance.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-black">
            1. Information We Collect
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
            <li>
              <strong>Personal Details:</strong> Full name, phone number, email,
              travel preferences, and destination interests.
            </li>
            <li>
              <strong>Booking Data:</strong> Trip dates, number of travelers,
              accommodation choices, etc.
            </li>
            <li>
              <strong>Device & Usage Info:</strong> IP address, browser type,
              visited pages, interaction patterns.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-black">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
            <li>To process your tour inquiries and bookings efficiently.</li>
            <li>
              To send updates on your travel packages, payment status, or itinerary.
            </li>
            <li>
              To personalize destination recommendations based on your interests.
            </li>
            <li>
              To improve the user experience on our website and digital platforms.
            </li>
            <li>
              To comply with legal obligations and travel regulations where required.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-black">
            3. Sharing Your Information
          </h2>
          <p className="text-sm sm:text-base">
            We only share your data with:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base mt-2">
            <li>Partnered hotels, transport providers, or local tour operators.</li>
            <li>
              Technology vendors (payment gateways, customer service tools) under
              strict data agreements.
            </li>
            <li>Government agencies when required for visas or compliance.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-black">
            4. Data Security
          </h2>
          <p className="text-sm sm:text-base">
            Gold Travel uses industry-level encryption and secure servers to
            protect your data. Although we strive for full security, no system is
            completely immune to risks.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-black">
            5. Your Rights
          </h2>
          <p className="text-sm sm:text-base mb-2">You can:</p>
          <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
            <li>Request a copy of your data held by us.</li>
            <li>Update or correct your personal details.</li>
            <li>
              Ask for deletion of your data (except when legally required to keep).
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-black">
            6. Cookies & Tracking
          </h2>
          <p className="text-sm sm:text-base">
            We use cookies to enhance your travel planning experience, such as:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base mt-2">
            <li>Remembering your destination searches and preferences.</li>
            <li>Analyzing traffic sources and improving page content.</li>
          </ul>
          <p className="text-sm sm:text-base mt-2">
            You can control cookies via your browser settings anytime.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-black">
            7. Policy Updates
          </h2>
          <p className="text-sm sm:text-base">
            This Privacy Policy may be revised from time to time. Changes will be
            reflected on this page with an updated date. Please check back
            periodically for the latest terms.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-black">
            8. Contact Us
          </h2>
          <p className="text-sm sm:text-base">
            If you have any concerns about how your data is handled, contact us at:
            <br />
            <strong>Email:</strong> info@goldtravel.com <br />
             
          </p>

          <p className="text-sm text-right mt-10 text-gray-400">
            Last Updated: July 25, 2025
          </p>
        </div>
      </div>

       <Footer/>
    </>
  );
}
