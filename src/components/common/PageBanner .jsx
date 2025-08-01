import React from "react";
import BannerBg from "../../assets/bannerbg.jpg"

const PageBanner = () => {
  return (
    <section className="max-w-[1400px] mx-auto mt-8 px mb-100">
      <div
        className="relative overflow-hidden rounded-[30px] flex items-center justify-center"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.5), rgba(0,0,0,0.2))",
        }}
      >
        <img
          alt="BannerBg"
          className="w-full h-[400px] object-cover rounded-[30px] relative z-0"
          src={BannerBg.src}
          width="1200"
          height="300"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#4a5a8a] via-[#5a7db3] to-[#7db0d6] opacity-0 rounded-[30px] z-10"
          style={{ mixBlendMode: "multiply" }}
        />
        <h1 className="absolute z-20 text-white text-3xl sm:text-4xl font-semibold select-none">
          Web dev Service
        </h1>
      </div>

      {/* Breadcrumb below */}
      <div className="mt-4 text-sm text-black font-normal select-none">
        <a className="underline" href="#">
          Home
        </a>{" "}
        / WebdevService
      </div>
    </section>
  );
};

export default PageBanner;
