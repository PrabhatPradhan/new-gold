// components/ImpactSection.jsx
import { FaGift, FaUsers } from 'react-icons/fa';

export default function ImpactSection() {
  return (
    <section className="flex flex-col md:flex-row bg-white text-gray-800">
      {/* Left: Image */}
      <div className="md:w-1/2 w-full">
        <img
          src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Volunteers"
          className="w-full h-full object-cover transition-shadow duration-500 hover:shadow-[0_0_20px_rgba(0,0,0,0.4)]     "
        />
      </div>

      {/* Right: Content */}
      <div className="md:w-1/2 w-full p-8 md:p-12 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          We’ve funded 120,00 charity projects for 20M people around the world.
        </h2>
        <p className="text-gray-600 mb-8">
          Contented attending smallness it oh ye unwilling. Turned favour man two but lovers.
          Suffer should if waited common person little oh. Improved civility graceful sex few smallest screened settling.
          Likely active her warmly has.
        </p>

        {/* Donation Card */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6 flex">
          <div className="text-white bg-rose-600 h-[4rem] p-4 rounded-full mr-4">
            <FaGift size={24} />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Make Donation</h3>
            <p className="text-sm text-gray-600 mb-1">
              Shall there whose those stand she end. So unaffected partiality indulgence.
            </p>
            <a href="#" className="text-rose-600 font-semibold text-sm">
              READ MORE
            </a>
          </div>
        </div>

        {/* Volunteer Card */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md flex">
          <div className="text-white bg-rose-600 p-4 h-[4rem] rounded-full mr-4">
            <FaUsers size={24} />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Become a Volunteer</h3>
            <p className="text-sm text-gray-600 mb-1">
              Shall there whose those stand she end. So unaffected partiality indulgence.
            </p>
            <a href="#" className="text-rose-600 font-semibold text-sm">
              READ MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
