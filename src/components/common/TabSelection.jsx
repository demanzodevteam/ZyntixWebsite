import { useState } from "react";

const tabs = [
  { id: "startups", label: "Startups", icon: "fas fa-envelope" },
  { id: "enterprises", label: "Enterprises", icon: "fas fa-building" },
  { id: "agencies", label: "Agencies", icon: "fas fa-briefcase" },
];

const tabContent = {
  startups: {
    title: "Startups",
    description:
      "Helping startups achieve and exceed their business objectives while streamlining operational costs.",
    features: [
      "MVP Development",
      "SaaS Development",
      "UI/UX Design",
      "Product Development",
    ],
    image:
      "https://www.pixelcrayons.com/wp-content/uploads/2025/02/agencies.webp",
  },
  enterprises: {
    title: "Enterprises",
    description:
      "Modernizing legacy systems, streamlining operations, and integrating AI for impact.",
    features: [
      "Portals",
      "Custom Integrations",
      "Internal Apps",
      "AI Dashboards",
    ],
    image:
      "https://www.pixelcrayons.com/wp-content/uploads/2025/02/enterprises.webp",
  },
  agencies: {
    title: "Agencies",
    description:
      "White-label partners for code execution, product launches, and staff augmentation.",
    features: [
      "Remote Teams",
      "Branded Dev Support",
      "UI/UX Builds",
      "Scale on Demand",
    ],
    image:
      "https://www.pixelcrayons.com/wp-content/uploads/2025/02/startups.webp",
  },
};

const TabSelection = ({ onImageChange }) => {
  const [activeTab, setActiveTab] = useState("startups");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    if (onImageChange) onImageChange(tabContent[tabId].image);
  };

  const active = tabContent[activeTab];

  return (
    <div className="flex flex-col gap-6 w-full max-w-md">
      {/* Tab Buttons */}
      <div className="flex gap-2 bg-white rounded-md shadow-md border border-gray-200 w-full p-2 sm:p-3 overflow-x-auto whitespace-nowrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex-shrink-0 flex items-center gap-2 text-xs md:text-sm font-semibold px-4 md:px-6 py-2 md:py-2.5 rounded-md transition-all hover:cursor-pointer ${
              activeTab === tab.id
                ? "bg-gradient-to-r from-[#0b147c] to-[#4b1bac] text-white"
                : "text-[#130f26] hover:bg-gradient-to-r from-[#0b147c] to-[#4b1bac] hover:text-white"
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            <i className={`${tab.icon} text-sm`} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-5">
        <h3 className="font-semibold text-h6 text-xl text-[#130f26] mb-3">
          {active.title}
        </h3>
        <p className="!text-[#4b5563] zyntics-p leading-relaxed mb-6">
          {active.description}
        </p>
        <div className="grid grid-cols-2 gap-y-4 zyntics-p !text-[#4b5563]">
          {active.features.map((feature) => (
            <div key={feature} className="flex items-center gap-2">
              <i className="fas fa-check-circle text-[#6c63ff] text-base" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-2 mt-6 zyntics-p !text-[#1e40af] font-semibold underline"
        >
          Get Details <i className="fas fa-arrow-right" />
        </a>
      </div>
    </div>
  );
};

export default TabSelection;
