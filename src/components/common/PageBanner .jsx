import React from "react";
import BannerBg from "../../assets/bannerbg.jpg";

const PageBanner = ({sectionData}) => {
  return (
    <section className="zyntics-container-auto relative">
      <div
        className="relative overflow-hidden rounded-[30px] flex items-center justify-center border border-gray-300 longinverted-radius1"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.5), rgba(0,0,0,0.2))",
        }}
      >
        <img
          alt="BannerBg"
          className="w-full h-[350px] md:h-[550px] object-cover rounded-[30px] relative z-0"
          src={BannerBg.src}
          width="1200"
          height="300"
        />
        <h1 className="absolute z-20 text-white text-3xl md:text-6xl font-semibold select-none">
          {sectionData?.title}
        </h1>
      </div>

      {/* Breadcrumb moved outside but absolutely positioned over masked area */}
      <div className="absolute bottom-10 left-8 z-50 text-md text-gray-700 font-semibold select-none">
        <a className="border-b-2 border-gray-700 pb-[2px]  transition" href="#">
          Home
        </a>{" "}
        / {sectionData?.breadcrumb}
      </div>

      <style>
        {`
    .longinverted-radius1 {
      --r: 32px;
      --s: 24px;
      --x: 180px;
      --y: 20px;

      --_m: /calc(2 * var(--r)) calc(2 * var(--r)) radial-gradient(#000 70%, #0000 70%);
      --_g: conic-gradient(from 180deg at var(--r) calc(100% - var(--r)), #0000 25%, #000 0);
      --_d: (var(--s) + var(--r));

      mask:
        calc(var(--_d) + var(--x)) 100% var(--_m),
        0 calc(100% - var(--_d) - var(--y)) var(--_m),
        radial-gradient(var(--s) at 0 100%, #0000 99%, #000 calc(100% + 1px))
          calc(var(--r) + var(--x)) calc(-1 * var(--r) - var(--y)),
        var(--_g) calc(var(--_d) + var(--x)) 0,
        var(--_g) 0 calc(-1 * var(--_d) - var(--y));
      mask-repeat: no-repeat;
    }
        `}
      </style>
    </section>
  );
};

export default PageBanner;
