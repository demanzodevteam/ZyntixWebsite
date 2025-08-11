// components/PartnerLogoSlider.jsx

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const logos = [
  {
    src: "https://storage.googleapis.com/a1aa/image/337a22e6-f876-420c-1525-65b187663315.jpg",
    alt: "M N MIZE INTERIOR",
    height: "h-40",
  },
  {
    src: "https://storage.googleapis.com/a1aa/image/337a22e6-f876-420c-1525-65b187663315.jpg",
    alt: "M N MIZE INTERIOR",
    height: "h-40",
  },
  {
    src: "https://storage.googleapis.com/a1aa/image/27c3dd4b-4623-4acb-dabb-b2f127f954a6.jpg",
    alt: "Metriks Data Center",
    height: "h-40",
  },
  {
    src: "https://storage.googleapis.com/a1aa/image/ee10e997-a3ea-4f34-0275-eb0b6f4d2a1a.jpg",
    alt: "QUO LEGAL FIRM",
    height: "h-40",
  },
  {
    src: "https://storage.googleapis.com/a1aa/image/337a22e6-f876-420c-1525-65b187663315.jpg",
    alt: "M N MIZE INTERIOR",
    height: "h-40",
  },
  {
    src: "https://storage.googleapis.com/a1aa/image/843ac2d5-726f-416d-b2d4-a81715907f43.jpg",
    alt: "VS Vintage Studio",
    height: "h-40",
  },
  {
    src: "https://storage.googleapis.com/a1aa/image/337a22e6-f876-420c-1525-65b187663315.jpg",
    alt: "M N MIZE INTERIOR",
    height: "h-40",
  },
];

export default function PartnerLogoSlider() {
  return (
    <div className="w-full py-8">
      <Swiper
        slidesPerView={2}
        spaceBetween={0}
        breakpoints={{
          0: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="w-full"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className={`${logo.height} w-auto object-contain`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

// import React from 'react';
// import styled from 'styled-components';

// const PartnerLogoSlider = () => {
//   return (
//      {logos.map((logo, index) => (
//     <StyledWrapper key={index}>
//       <div className="card-3d">
//         <div />
//         <div />
//         <div />
//         <div />
//         <div />
//         <div />
//         <div />
//         <div />
//         <div />
//         <div />
//       </div>
//     </StyledWrapper>
//   ))}
//   );
// }

// const StyledWrapper = styled.div`
//   @keyframes autoRun3d {
//     from {
//       transform: perspective(800px) rotateY(-360deg);
//     }
//     to {
//       transform: perspective(800px) rotateY(0deg);
//     }
//   }

//   @keyframes animateBrightness {
//     10% {
//       filter: brightness(1);
//     }
//     50% {
//       filter: brightness(0.1);
//     }
//     90% {
//       filter: brightness(1);
//     }
//   }

//   .card-3d {
//     position: relative;
//     width: 400px;
//     height: 200px;
//     transform-style: preserve-3d;
//     transform: perspective(800px);
//     animation: autoRun3d 20s linear infinite;
//     will-change: transform;
//   }

//   .card-3d div {
//     position: absolute;
//     width: 80px;
//     height: 112px;
//     background-color: rgb(199, 199, 199);
//     border: solid 2px lightgray;
//     border-radius: 0.5rem;
//     top: 50%;
//     left: 50%;
//     transform-origin: center center;
//     animation: animateBrightness 20s linear infinite;
//     transition-duration: 200ms;
//     will-change: transform, filter;
//   }

//   .card-3d:hover {
//     animation-play-state: paused !important;
//   }

//   .card-3d:hover div {
//     animation-play-state: paused !important;
//   }

//   .card-3d div:nth-child(1) {
//     transform: translate(-50%, -50%) rotateY(0deg) translateZ(150px);
//     animation-delay: -0s;
//   }

//   .card-3d div:nth-child(2) {
//     transform: translate(-50%, -50%) rotateY(36deg) translateZ(150px);
//     animation-delay: -2s;
//   }

//   .card-3d div:nth-child(3) {
//     transform: translate(-50%, -50%) rotateY(72deg) translateZ(150px);
//     animation-delay: -4s;
//   }

//   .card-3d div:nth-child(4) {
//     transform: translate(-50%, -50%) rotateY(108deg) translateZ(150px);
//     animation-delay: -6s;
//   }

//   .card-3d div:nth-child(5) {
//     transform: translate(-50%, -50%) rotateY(144deg) translateZ(150px);
//     animation-delay: -8s;
//   }

//   .card-3d div:nth-child(6) {
//     transform: translate(-50%, -50%) rotateY(180deg) translateZ(150px);
//     animation-delay: -10s;
//   }

//   .card-3d div:nth-child(7) {
//     transform: translate(-50%, -50%) rotateY(216deg) translateZ(150px);
//     animation-delay: -12s;
//   }

//   .card-3d div:nth-child(8) {
//     transform: translate(-50%, -50%) rotateY(252deg) translateZ(150px);
//     animation-delay: -14s;
//   }

//   .card-3d div:nth-child(9) {
//     transform: translate(-50%, -50%) rotateY(288deg) translateZ(150px);
//     animation-delay: -16s;
//   }

//   .card-3d div:nth-child(10) {
//     transform: translate(-50%, -50%) rotateY(324deg) translateZ(150px);
//     animation-delay: -18s;
//   }`;

// export default PartnerLogoSlider;
