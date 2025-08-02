import React from "react";
import BannerBg from "../../assets/bannerbg.jpg";

const PageBanner = () => {
  return (
    <section className="max-w-[1450px] mx-auto mt-8 px mb-100 ">
      <div
        className="relative overflow-hidden rounded-[30px] flex items-center justify-center border border-gray-300 longinverted-radius1"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.5), rgba(0,0,0,0.2))",
        }}
      >
        <img
          alt="BannerBg"
          className="w-full h-[540px] object-cover rounded-[30px] relative z-0"
          src={BannerBg.src}
          width="1200"
          height="300"
        />
        <h1 className="absolute z-20 text-white text-3xl md:text-6xl font-semibold select-none">
          Web dev Service
        </h1>
      </div>
      <div className="mt-4 text-sm text-black font-normal select-none">
        <a className="underline" href="#">
          Home
        </a>{" "}
        / WebdevService
      </div>
      <style>
        {`
    .longinverted-radius1 {
  --r: 32px; /* corner radius */
  --s: 24px; /* size of inverted curve */
  --x: 40px; /* default x offset */
  --y: 150px; /* y offset */

   --r1: 32px; /* corner radius */
  --s1: 24px; /* size of inverted curve */
  --x1: 50px; /* default x offset */
  --y1: 10px; /* y offset */

  --_m: /calc(2 * var(--r)) calc(2 * var(--r)) radial-gradient(#000 70%, #0000
        70%);
  --_g: conic-gradient(
    from 90deg at calc(100% - var(--r)) calc(100% - var(--r)),
    #0000 25%,
    #000 0
  );
  --_d: (var(--s) + var(--r));

  mask: calc(100% - var(--_d) - var(--x)) 100% var(--_m),
    100% calc(100% - var(--_d) - var(--y)) var(--_m),
    radial-gradient(var(--s) at 100% 100%, #0000 99%, #000 calc(100% + 1px))
      calc(-1 * var(--r) - var(--x)) calc(-1 * var(--r) - var(--y)),
    var(--_g) calc(-1 * var(--_d) - var(--x)) 0,
    var(--_g) 0 calc(-1 * var(--_d) - var(--y));
  mask-repeat: no-repeat;

  --_g:conic-gradient(at var(--r1) var(--r1),#000 75%,#0000 0);
  --_d:(var(--s1) + var(--r1));
  mask:
    calc(var(--_d) + var(--x1)) 0 var(--_m),
    0 calc(var(--_d) + var(--y1)) var(--_m),
    radial-gradient(var(--s1) at 0 0,#0000 99%,#000 calc(100% + 1px)) 
     calc(var(--r1) + var(--x1)) calc(var(--r1) + var(--y1)),
    var(--_g) calc(var(--_d) + var(--x1)) 0,
    var(--_g) 0 calc(var(--_d) + var(--y1));
  mask-repeat: no-repeat;
}

  `}
      </style>
    </section>
  );
};

export default PageBanner;
