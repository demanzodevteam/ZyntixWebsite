import React from "react";

const WhatWeOffer = ({ content }) => {
  return (
    <div className="bg-white text-gray-900 zyntics-section">
      <div className="zyntics-container-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-20 gap-y-8">
          {/* Left Section (mobile: normal, desktop: sticky) */}
          <div className="lg:col-span-6 lg:sticky lg:top-10 h-auto lg:h-screen flex flex-col gap-4">
            {/* Top block with heading and image (mobile stacked) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-100 ">
              <div className="bg-[#4F57E3] text-white p-6 flex items-center justify-center">
                <div>
                  <p className="zyntics-small-p uppercase font-normal mb-3">
                    {content.blockLabel}
                  </p>
                  <h2 className="font-extrabold text-p leading-tight whitespace-pre-line">
                    {content.blockHeading}
                  </h2>
                </div>
              </div>
              <div>
                <img
                  src={content.topImage}
                  alt="Top visual"
                  className="w-full h-100 object-cover"
                />
              </div>
            </div>

            {/* Full-width image (stacked) */}
            <div>
              <img
                src={content.bottomImage}
                alt="Bottom visual"
                className="w-full h-100 object-cover"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
            <div className="mt-10 lg:mt-[250px]">
              <p className="text-small-p uppercase text-gray-500 font-semibold mb-2">
                {content.label}
              </p>
              <h1 className="text-h2 font-extrabold leading-tight text-gray-900">
                {content.title}
              </h1>
              {content.description.map((text, i) => (
                <p key={i} className="mt-4 zyntics-small-p text-gray-600 max-w-xl">
                  {text}
                </p>
              ))}
            </div>

            <div className="space-y-10 max-w-xl">
              {content.features.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start space-x-4 space-y-2 max-w-md"
                >
                  <div className="flex-shrink-0 mt-1 text-[#4F57E3]">
                    <i className={`${item.icon} fa-lg`} />
                  </div>
                  <h3 className="font-semibold text-gray-900 zyntics-h6">
                    {item.title}
                  </h3>
                  <p className="zyntics-small-p text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
