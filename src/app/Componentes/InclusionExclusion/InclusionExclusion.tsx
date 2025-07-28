'use client';
import React from 'react';

export default function InclusionExclusion() {
    const inclusionItems = [
        'Luxury Volvo Coach travel from Delhi to Manali and return',
        '03 Nights premium hotel stay in Manali with mountain view',
        'Daily breakfast and dinner during the stay',
        'Welcome drink on arrival (non-alcoholic)',
        'Complimentary tea/coffee maker in room',
        'Pickup & drop from Manali Volvo Bus Stand to Hotel by private cab',
        'Manali local sightseeing including Hadimba Temple, Mall Road, and Vashisht Kund by private car',
        'One full-day tour to Solang Valley by private cab',
        'Professional tour guide and assistance throughout the trip',
      ];
      

      const exclusionItems = [
        'Airfare, train tickets, or airport transfers',
        'Lunch and personal snacks not included in the meal plan',
        'Room heater or additional heater charges',
        'Adventure activities such as paragliding, skiing, river rafting, etc.',
        'Entry tickets to monuments, parks, or attractions',
        'Personal expenses like laundry, tips, phone calls, and shopping',
        'Travel insurance or medical emergency coverage',
        'Anything not specifically mentioned in the inclusion list',
      ];
      

  return (
    <>
      <section className="max-w-4xl mx-auto mt-2 px-4 py-6 bg-white rounded-xl shadow-md space-y-4">
  <h2 className="text-2xl font-bold text-center text-yellow-700">
    Our Tour Details
  </h2>

  <p className="text-gray-700 leading-relaxed">
    <strong>Scenic Manali Volvo Tour by Gold Tour Travel</strong> <br />
    Discover the beauty of Manali with our all-inclusive Volvo package from Delhi. Travel in comfort with Volvo coaches,
    stay in premium hotels, and explore breathtaking spots like <strong>Solang Valley</strong>, <strong>Hadimba Temple</strong>,
    and the famous <strong>Mall Road</strong>. A perfect getaway for couples, families, and friends seeking mountain bliss.
  </p>

  <p className="text-gray-700 leading-relaxed">
    Enjoy well-planned itineraries, seamless transfers, and top-notch services. Your comfort and satisfaction are
    our top priorities. Trust Gold Tour Travel to turn your holidays into unforgettable memories.
  </p>

  <p className="text-gray-700 leading-relaxed">
    From snow adventures to cozy mountain evenings, experience Manali like never before. Contact Gold Tour Travel
    today to reserve your dream trip and enjoy a relaxing and adventurous escape in the Himalayas.
  </p>

   
</section>


      <div className="max-w-4xl mx-auto mt-10 p-4 space-y-8">
        {/* Inclusion Section */}
        <div>
          <div className="bg-green-600 text-white px-4 py-2 font-bold rounded-md inline-block mb-4">
            Package Inclusion
          </div>
          <ul className="space-y-3 list-none text-gray-800 font-medium  list-inside">
            {inclusionItems.map((item, index) => (
              <li key={index}>✔ {item}</li>
            ))}
          </ul>
        </div>

        {/* Exclusion Section */}
        <div>
          <div className="bg-red-600 text-white px-4 py-2 font-bold rounded-md inline-block mb-4">
            Package Exclusion
          </div>
          <ul className="space-y-3 list-none text-gray-800 font-medium   list-inside">
            {exclusionItems.map((item, index) => (
              <li key={index}>❌ {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
