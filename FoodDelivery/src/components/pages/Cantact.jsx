import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#606e03] min-h-screen px-6 py-12 text-white">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
        <p className="text-white/80">
          Got questions, feedback, or just hungry and confused? Reach out to us.
        </p>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto mt-10 bg-white rounded-2xl shadow-lg p-8 text-[#606e03]">
        
        <div className="grid md:grid-cols-2 gap-6">
          
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#606e03]"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#606e03]"
          />
        </div>

        <textarea
          placeholder="Your Message..."
          rows="5"
          className="w-full mt-6 px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#606e03]"
        ></textarea>

        <button
          className="mt-6 w-full bg-[#606e03] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Send Message
        </button>
      </div>

      {/* Extra Info */}
      <div className="max-w-4xl mx-auto mt-12 text-center text-white/80">
        <p>Email: support@foodapp.com</p>
        <p>Phone: +91 98765 43210</p>
      </div>

    </div>
  );
};

export default Contact;