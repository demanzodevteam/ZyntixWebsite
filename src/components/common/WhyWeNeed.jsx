import React from "react";
import logo from '../../assets/zyn-blured-logo.webp'

const WhyWeNeed = ({data}) => {
  return (
    <div className="zyntics-section  bg-gradient-to-br from-white to-[#f3f1ff]">
      <div className="relative flex items-center justify-center py-12 px-6">
        <div className="zyntics-container-auto grid grid-rows-[auto_auto] gap-6 md:gap-10 lg:gap-20">
          {/* Top Row */}
          <div class="w-full flex flex-col md:flex-row justify-between md:items-center ">
            <div className="">
              <h1 class="text-h2 leading-tight font-semibold text-black max-w-5xl">
                {data?.title}
              </h1>
            </div>
            <div className="">
              <img
                src={logo.src}
                alt="xxx"
                className="w-[150px] h-[150px] object-contain "
              />
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1fr] items-start gap-12 md:gap-10 lg:gap-30">
            <h2
              aria-hidden="true"
              className="text-[100px] lg:text-[180px]  leading-[1] text-transparent vertical-text-outline font-sans"
            >
              {data?.heading}
            </h2>

            <div className="flex flex-col !text-[#1a1a1a] zyntics-p">
              <p className="font-semibold mb-3 leading-tight">
                {data?.para1}
              </p>
              <p className="mb-3 leading-relaxed">
                {data?.para2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWeNeed;
