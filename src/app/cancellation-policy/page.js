import Footer from "../Componentes/Footer/Footer";
import Navbar from "../Componentes/Navbar/Navbar";

export default function CancellationPolicy() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        style={{
          backgroundImage: `url('https://ditacademy.in/wp-content/uploads/2025/06/Refund-Policy.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="py-18 px-[5%] mt-12 flex flex-col md:flex-row items-center justify-between"
      >
        <div>
          <h1 className="text-4xl md:text-5xl mt-10 font-bold text-white mb-2">
            Cancellation Policy
          </h1>
          <p className="text-[#666] text-base">Plan Changes? We’ve Got You Covered</p>
        </div>
      </section>

      {/* Intro */}
      <div className="px-6 py-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between w-full px-6 py-12 bg-gradient-to-r from-red-50 to-white">
          <div className="md:w-1/2 space-y-4 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold">
              Flexible <span className="text-black">Cancellation Policies</span> for Your Peace of Mind
            </h2>
            <p className="text-gray-600">
              Gold Travel understands that plans can change. Our cancellation policies are transparent and traveler-friendly.
            </p>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
              alt="Cancellation icon"
              width={300}
              height={300}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white text-gray-500 px-4 py-12 sm:px-6 lg:px-1 max-w-6xl mx-auto">
          <p className="mb-4 text-sm sm:text-base">
            Our cancellation policy outlines the conditions under which you may cancel a booking and the applicable refund amounts, depending on the timing and services booked.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-black">
            1. General Cancellation Terms
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
            <li>
              Cancellations must be submitted in writing via email or requested through your booking portal.
            </li>
            <li>
              All cancellation charges are calculated from the date of receipt of your written request.
            </li>
            <li>
              No cancellation is confirmed until acknowledged by our team.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-black">
            2. Cancellation Charges
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
            <li>
              <strong>More than 30 days before departure:</strong> 10% of total package cost or ₹1,000 (whichever is higher).
            </li>
            <li>
              <strong>15 to 30 days before departure:</strong> 25% of total package cost.
            </li>
            <li>
              <strong>7 to 14 days before departure:</strong> 50% of total package cost.
            </li>
            <li>
              <strong>Less than 7 days before departure:</strong> No refund applicable.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-black">
            3. Non-Refundable Services
          </h2>
          <p className="text-sm sm:text-base">
            Certain services like flight tickets, visa fees, and government taxes may be non-refundable regardless of the time of cancellation. These will be deducted before processing any refund.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-black">
            4. Force Majeure & Natural Disruptions
          </h2>
          <p className="text-sm sm:text-base">
            Gold Travel will not be liable for cancellations caused due to events beyond our control (natural disasters, pandemics, strikes, government restrictions, etc.). In such cases, we will assist in securing refunds or credits from third-party vendors wherever possible.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-black">
            5. Group Tour Cancellations
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
            <li>For fixed-departure tours, cancellation is not allowed within 10 days of travel.</li>
            <li>If a minimum number of participants is not met, Gold Travel reserves the right to cancel the tour with full refund to all guests.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-black">
            6. Modification or Postponement
          </h2>
          <p className="text-sm sm:text-base">
            If you want to postpone or change dates, rebooking charges may apply depending on supplier terms.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-black">
            7. Contact for Cancellation
          </h2>
          <p className="text-sm sm:text-base">
            To initiate a cancellation, please contact us at:
            <br />
            <strong>Email:</strong> info@goldtravel.com<br />
            <strong>Phone:</strong> +91-99999-99999
          </p>

          <p className="text-sm text-right mt-10 text-gray-400">
            Last Updated: July 25, 2025
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
