import React from "react";

const Profile = ({ data, setdata }) => {
  const { name, email, password } = data;

  const handleChange = (e, item) => {
    setdata((prevState) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  };
  console.log(data);
  return (
    <div className="space-y-5">
      {/* Name */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-600">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => handleChange(e, "name")}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-600">Email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => handleChange(e, "email")}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
      </div>

      {/* Password */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-600">Password</label>
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => handleChange(e, "password")}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
      </div>
    </div>
  );
};

export default Profile;
