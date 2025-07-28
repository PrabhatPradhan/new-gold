import Footer from "../Componentes/Footer/Footer";
import Navbar from "../Componentes/Navbar/Navbar";
 

export default function Page() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        style={{
          backgroundImage: `url('https://nationalplastic.com/_next/image?url=https%3A%2F%2Fnationalplastic.com%2Fuploads%2Fuploads%2Fbanner%2FRefund%20policy%20banner.jpg&w=3840&q=75')`,
          backgroundSize: "cover",
          backgroundPosition: " ",
        }}
        className="py-18  px-[5%] mt-12 flex flex-col md:flex-row items-center justify-between"
      >
        
        <div>
          <h1 className="text-4xl md:text-5xl mt-10 font-bold text-black mb-2">
            Refund Policy
          </h1>
          <p className="text-[#666] text-base">
            Clear Refund Terms for Peaceful Travel Planning
          </p>
        </div>
      </section>

      {/* Content Section */}
      <div className="px-6 py-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between w-full px-6 py-12 bg-gradient-to-r from-red-50 to-white">
          <div className="md:w-1/2 space-y-4 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-black">Gold Travel's</span> Transparent Refund Policy
            </h2>
            <p className="text-gray-600">
              We understand that travel plans can change. Our refund policy is designed
              to offer flexibility and clarity for all our valued customers.
            </p>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5915/5915720.png"
              alt="Refund illustration"
              width={250}
              height={250}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white text-gray-500 px-4 py-12 sm:px-6 lg:px-1 max-w-6xl mx-auto">
          <p className="mb-4 text-sm sm:text-base">
            At <strong>Gold Travel</strong>, we strive to deliver exceptional travel experiences.
            However, if you need to cancel your trip or request a refund, please review the following policy carefully.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-black">
            1. Eligibility for Refunds
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
            <li>
              Refunds are applicable only for cancellations made within the allowed cancellation period.
            </li>
            <li>
              Customized tour packages may have specific refund clauses based on vendor agreements.
            </li>
            <li>
              Refund eligibility varies for international vs. domestic travel bookings.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-black">
            2. Cancellation & Refund Timeline
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
            <li>
              <strong>7+ days before departure:</strong> 80% refund (after deducting applicable charges).
            </li>
            <li>
              <strong>3–6 days before departure:</strong> 50% refund.
            </li>
            <li>
              <strong>Less than 72 hours:</strong> No refund.
            </li>
            <li>
              Refunds, if applicable, are processed within 7–10 working days.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-black">
            3. Non-Refundable Charges
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
            <li>Government taxes, visa charges, or permit fees.</li>
            <li>Bank charges or transaction fees during payment/refund.</li>
            <li>Advance paid to hotels, transport vendors, or experiences.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-black">
            4. Force Majeure Conditions
          </h2>
          <p className="text-sm sm:text-base">
            Refunds are not applicable in case of trip disruptions due to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base mt-2">
            <li>Natural disasters, pandemics, or political unrest.</li>
            <li>Airline or transport cancellations beyond our control.</li>
            <li>Government travel restrictions or visa rejections.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-black">
            5. Refund Process
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
            <li>
              All refund requests must be emailed to <strong>support@goldtravel.com</strong> with your booking ID.
            </li>
            <li>
              Refunds will be credited to the original payment method.
            </li>
            <li>
              Any third-party commission/fee will be deducted before refund.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-black">
            6. Contact for Assistance
          </h2>
          <p className="text-sm sm:text-base">
            Need to cancel or modify your travel booking? Reach out to our customer service team for help:
            <br />
            <strong>Email:</strong> support@goldtravel.com <br />
            <strong>Phone:</strong> +91-9876543210
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
