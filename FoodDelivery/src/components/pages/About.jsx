import React from "react";

const About = () => {
  return (
    <div className="bg-[#606e03] text-white min-h-screen px-6 py-12">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">About Our Food Delivery</h1>
        <p className="text-white/80 text-lg">
          Bringing your favorite meals from trusted restaurants straight to your
          doorstep. Fast, reliable, and always delicious.
        </p>
      </div>

      {/* Cards Section */}
      <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-3 gap-6">
        <div className="bg-white text-[#606e03] p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">🚀 Fast Delivery</h2>
          <p className="text-sm text-gray-600">
            We ensure your food reaches you hot and fresh with our optimized
            delivery network.
          </p>
        </div>

        <div className="bg-white text-[#606e03] p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">🍴 Trusted Restaurants</h2>
          <p className="text-sm text-gray-600">
            Partnered with top-rated restaurants to bring you quality meals
            every time.
          </p>
        </div>

        <div className="bg-white text-[#606e03] p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">💳 Easy Payments</h2>
          <p className="text-sm text-gray-600">
            Multiple secure payment options for a smooth and hassle-free
            experience.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-3">Why Choose Us?</h2>
        <p className="text-white/80">
          We combine technology, logistics, and customer-first thinking to make
          food ordering effortless. Whether you're craving fast food, sweets, or
          a full meal — we’ve got you covered.
        </p>
      </div>
    </div>
  );
};

export default About;
