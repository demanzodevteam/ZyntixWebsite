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
          640: { slidesPerView: 3 },
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
