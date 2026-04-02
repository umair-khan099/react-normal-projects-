import React, { useState } from "react";
import Profile from "./Profile";
import Intrest from "./Intrest";
import Settings from "./Settings";

const TabsForm = () => {
  const [data, setdata] = useState({
    name: "umair",
    email: "ukkhan5476@gmail.com",
    password: "123456",
    intrests: ["coding", "gaming", "swiming"],
    theme: ["dark", "light"],
  });

  const [ActiveTab, setActiveTab] = useState(0);

  const Tabs = [
    { name: "Profile", Component: Profile },
    { name: "Intrest", Component: Intrest },
    { name: "Settings", Component: Settings },
  ];

  const ActiveTabComponent = Tabs[ActiveTab].Component;

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      {/* Tabs Header */}
      <div className="flex gap-4 border-b mb-6">
        {Tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 font-medium transition-all duration-200 rounded-t-lg
              ${
                ActiveTab === index
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-blue-500"
              }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-4 bg-gray-50 rounded-xl shadow-inner">
        <ActiveTabComponent data={data} setdata={setdata} />
      </div>
    </div>
  );
};

export default TabsForm;
