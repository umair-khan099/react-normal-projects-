import React from "react";

const Contact = () => {
  return (
    <div className="bg-white min-h-screen px-6 py-12 text-gray-800">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-3 text-[#606e03]">Contact Us</h1>
        <p className="text-gray-500">
          Got questions, feedback, or just hungry and confused? Reach out to us.
        </p>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto mt-10 bg-white border border-gray-200 rounded-2xl shadow-md p-8">
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 border border-gray-200 rounded-lg outline-none 
            focus:ring-2 focus:ring-[#606e03]"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 border border-gray-200 rounded-lg outline-none 
            focus:ring-2 focus:ring-[#606e03]"
          />
        </div>

        <textarea
          placeholder="Your Message..."
          rows="5"
          className="w-full mt-6 px-4 py-3 border border-gray-200 rounded-lg outline-none 
          focus:ring-2 focus:ring-[#606e03]"
        ></textarea>

        <button
          className="mt-6 w-full bg-[#606e03] text-white py-3 rounded-lg font-semibold 
          hover:opacity-90 transition"
        >
          Send Message
        </button>
      </div>

      {/* Info Cards */}
      <div className="max-w-4xl mx-auto mt-12 grid md:grid-cols-2 gap-6">
        <div className="border border-gray-200 rounded-xl p-5 shadow-sm">
          <h3 className="text-[#606e03] font-semibold mb-1">Email</h3>
          <p className="text-gray-500 text-sm">support@foodapp.com</p>
        </div>

        <div className="border border-gray-200 rounded-xl p-5 shadow-sm">
          <h3 className="text-[#606e03] font-semibold mb-1">Phone</h3>
          <p className="text-gray-500 text-sm">+91 98765 43210</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
