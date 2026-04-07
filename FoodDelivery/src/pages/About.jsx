import React from "react";

const About = () => {
  return (
    <div className="bg-white min-h-screen px-6 py-12 text-gray-800">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-[#606e03]">About Us</h1>
        <p className="text-gray-500 text-lg">
          We bring your favorite meals from trusted restaurants straight to your
          doorstep. Fast, reliable, and always satisfying.
        </p>
      </div>

      {/* Cards Section */}
      <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-3 gap-6">
        <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-[#606e03] mb-2">
            🚀 Fast Delivery
          </h2>
          <p className="text-gray-500 text-sm">
            Our optimized delivery system ensures your food arrives hot and
            fresh every time.
          </p>
        </div>

        <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-[#606e03] mb-2">
            🍴 Trusted Restaurants
          </h2>
          <p className="text-gray-500 text-sm">
            We partner with top-rated restaurants to guarantee quality and
            taste.
          </p>
        </div>

        <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-[#606e03] mb-2">
            💳 Easy Payments
          </h2>
          <p className="text-gray-500 text-sm">
            Multiple secure payment options for a smooth and hassle-free
            experience.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <h2 className="text-2xl font-semibold text-[#606e03] mb-3">
          Why Choose Us?
        </h2>
        <p className="text-gray-500">
          We combine smart technology, reliable logistics, and customer-first
          thinking to make food ordering effortless. Whether it’s fast food,
          sweets, or full meals — we’ve got you covered.
        </p>
      </div>
    </div>
  );
};

export default About;
