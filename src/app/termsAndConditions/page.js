"use client";

import React from "react";
import Navbar from "../Componentes/Navbar/Navbar";
import Footer from "../Componentes/Footer/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <section
        style={{
          backgroundImage: `url('https://www.icertis.com/contentassets/a813f9ea8be04005b7ea2c3678c08e2f/terms-and-conditions-blog-graphics-header-inset.png?width=660')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="py-18 px-[5%] mt-12 flex flex-col md:flex-row items-center justify-between"
      >
        <div>
          <h1 className="text-4xl md:text-5xl mt-10 font-bold text-white mb-2">
          Terms and Conditions
          </h1>
          <p className="text-[#666] text-base">
             
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto  px-4 py-10 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Terms and Conditions
      </h1>

      <p className="mb-4">
        Welcome to Gold Travels! These Terms and Conditions outline the rules
        and regulations for the use of our website and services. By accessing
        this website, we assume you accept these terms in full. Do not continue
        to use Gold Travels' website if you do not accept all of the terms and
        conditions stated on this page.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        1. Acceptance of Terms
      </h2>
      <p className="mb-4">
        By accessing our site or booking any of our travel services, you agree
        to be bound by these Terms and Conditions, all applicable laws and
        regulations, and agree that you are responsible for compliance with any
        applicable local laws. If you do not agree, you are prohibited from
        using or accessing this site.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">2. Services Provided</h2>
      <p className="mb-4">
        Gold Travels offers domestic and international travel packages,
        visa-free destinations, group tours, and custom travel itineraries. We
        work with a network of trusted partners, guides, and transport services
        to deliver seamless travel experiences.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        3. Booking & Confirmation
      </h2>
      <p className="mb-4">
        All bookings made through our website or partner agents are subject to
        availability. A booking is considered confirmed only after the payment
        has been processed and a confirmation email has been sent. Prices listed
        are dynamic and may change without notice.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">4. Payment Terms</h2>
      <p className="mb-4">
        Full payment or an advance is required to secure your booking. Payment
        can be made via credit card, debit card, net banking, or our partnered
        payment gateways such as Visa, Stripe, or PayPal. All transactions are
        processed securely.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        5. Cancellation & Refund Policy
      </h2>
      <p className="mb-4">
        Cancellations must be made in writing via email or through your booking
        account. Cancellation charges may apply based on the time of
        cancellation before the trip date. Some bookings may be non-refundable.
        Refunds will be processed within 7-10 business days, subject to payment
        method and partner policies.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        6. Changes to Itinerary
      </h2>
      <p className="mb-4">
        We reserve the right to alter itineraries, hotels, or transport
        arrangements due to unforeseen circumstances such as weather conditions,
        political unrest, or operational issues. We will make reasonable efforts
        to inform affected travelers in advance.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        7. Traveler Responsibilities
      </h2>
      <p className="mb-4">
        Travelers are responsible for ensuring they possess valid passports,
        visas, and other travel documents. It is the traveler’s duty to arrive
        on time at departure points and follow the instructions of the tour
        guides. Any form of misconduct or violation of local laws is not
        tolerated.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">8. Travel Insurance</h2>
      <p className="mb-4">
        We strongly recommend all travelers purchase travel insurance that
        covers trip cancellation, medical emergencies, baggage loss, and other
        travel-related risks. Gold Travels shall not be held liable for any
        losses arising due to the absence of such insurance.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        9. Liability Disclaimer
      </h2>
      <p className="mb-4">
        Gold Travels acts only as an intermediary between you and service
        providers. We are not liable for any loss, injury, or damages caused by
        force majeure events, delays, negligence of third-party providers, or
        any unforeseen incidents during your trip.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        10. Intellectual Property
      </h2>
      <p className="mb-4">
        All content, images, and branding used on our website are the
        intellectual property of Gold Travels. Unauthorized use or reproduction
        is strictly prohibited.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">11. Privacy Policy</h2>
      <p className="mb-4">
        Your privacy is important to us. All personal data provided during
        bookings is stored securely and used only for the purpose of trip
        planning, marketing communication, or regulatory compliance. For full
        details, refer to our Privacy Policy page.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">12. Governing Law</h2>
      <p className="mb-4">
        These Terms and Conditions are governed by the laws of India. Any
        disputes will be resolved in the jurisdiction of Delhi courts.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        13. Contact Information
      </h2>
      <p className="mb-4">
        If you have any questions about these Terms and Conditions, please
        contact us at:
        <br />
        📧 Email: support@goldtravels.com
        <br />
        📞 Phone: +91 9990447799
        <br />
        🏢 Address: 608-609, Aggarwal Millenium Tower, Netaji Subhash Place,
        Pitampura, Delhi-110034
      </p>

      <p className="mt-10 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Gold Travels. All rights reserved.
      </p>
    </div>
      <Footer />
    </>
  );
}
