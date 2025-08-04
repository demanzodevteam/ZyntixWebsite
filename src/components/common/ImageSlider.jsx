import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Desinologo from "../../assets/desino-logo.png";
import Embitellogo from "../../assets/embitel.png"
import Finoslogo from "../../assets/Finos-logo.svg"
import Flivelogo from "../../assets/flive-logo.webp"
import Onecliklogo from "../../assets/one-click-logo.webp"
import Primepath from "../../assets/Prime-path-Logo.png"
import Rdslogo from "../../assets/rds-logo.png"
import Visalogo from "../../assets/VisaTheory-logo.webp"


const images = [
  {
    src: "../../assets/desicargarage-logo.webp",
    alt: "Desicarlogo",
  },
  { src: Desinologo, alt: "Desinologo" },
  { src: Embitellogo, alt: "Embitellogo" },
  { src: Finoslogo, alt: "Finoslogo" },
  { src: Flivelogo, alt: "Flivelogo" },
  { src: Onecliklogo, alt: "Onecliklogo" },
  { src: Primepath, alt: "Primepath" },
  { src: Rdslogo, alt: "Rdslogo" },
  { src: Visalogo, alt: "Visalogo" },
];


export default function ImageSlider() {
  return (
    <div className="w-full">
      <div className="">
        <Swiper
          modules={[]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 6 },
          }}
          className="w-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center">
                <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[90px]">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover rounded-lg grayscale hover:grayscale-0 transition duration-300"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
