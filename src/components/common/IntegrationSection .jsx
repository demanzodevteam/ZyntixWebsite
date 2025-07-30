import React from "react";

// Import your icons here
import Slack from "../../assets/react.png";
import Wordpress from "../../assets/wordpress.png";
import Nestjs from "../../assets/nestjs.png";
// import Nestjs from "../../assets/Symbol Alternative.svg";
import Typescript from "../../assets/typescript.png";
import Shopify from "../../assets/shopify.png";

const services = [
  { name: "React", icon: Slack },
  { name: "Nest.js", icon: Nestjs },
  { name: "Typescript", icon: Typescript },
  { name: "Wordpress", icon: Wordpress },
  { name: "Shopify", icon: Shopify },
];

const IntegrationSection = () => {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-start bg-[#1F1F1F] text-white px-6 sm:px-10 py-8 rounded-xl mb-8">
      {/* Heading */}
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal leading-tight">
          End-to-End Stack for Agile
          <br className="hidden sm:block" />
          Product Delivery
        </h2>
      </div>

      {/* Service Icons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center text-center">
        {services.map((service) => (
          <div
            className="transform transition-transform duration-500 ease-in-out hover:translate-y-6"
            key={service.name}
          >
            <img
              src={service.icon.src}
              alt={service.name}
              className="mx-auto w-11 h-11 object-cover "
            />
            <h4 className="text-sm mt-2 font-medium">{service.name}</h4>
          </div>
        ))}
      </div>

      {/* Chevron Icon */}
      <div className="absolute -bottom-2 -right-2 bg-[#45D0BD] text-black p-2 rounded-md shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-up"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </div>
    </div>
  );
};

export default IntegrationSection;
