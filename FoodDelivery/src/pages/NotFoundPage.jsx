import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
      
      {/* Big 404 */}
      <h1 className="text-[120px] font-extrabold text-[#606e03] leading-none">
        404
      </h1>

      {/* Message */}
      <h2 className="text-2xl font-semibold mt-4 text-gray-800">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-2 max-w-md">
        The page you’re looking for doesn’t exist or has been moved somewhere else.
      </p>

      {/* CTA */}
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-[#606e03] text-white rounded-lg font-medium hover:opacity-90 transition"
      >
        Go Back Home
      </Link>

      {/* Optional fun line */}
      <p className="text-sm text-gray-400 mt-6">
        Even our delivery guy couldn’t find this page.
      </p>

    </div>
  );
};

export default NotFoundPage;