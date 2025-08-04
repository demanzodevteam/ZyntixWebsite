import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Desicarlogo from "../../assets/desicargarage-logo.webp";
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
    src: "https://desicargarage.com.au/wp-content/uploads/2024/05/Asset-1logo-copy.webp",
    alt: "Desicarlogo",
  },
  {
    src: "https://www.desino.be/wp-content/uploads/2024/01/Logo_Finaloriginal-black.png",
    alt: "Desinologo",
  },
  {
    src: "https://www.embitel.com/wp-content/themes/astra-child/images/embitel_New-logo-with-Volkswagen-white-1024x358-1.png",
    alt: "Embitellogo",
  },
  {
    src: "https://finos.tech/wp-content/uploads/2024/03/FinOSinkcmprsd.svg",
    alt: "Finoslogo",
  },
  {
    src: "https://flive.co.in/wp-content/uploads/2024/03/3d-png-1-scaled-e1711194817655.webp",
    alt: "Flivelogo",
  },
  {
    src: "https://oneclicktechnologies.us/wp-content/uploads/2024/07/ONE-CLICK-9-1536x485.png.webp",
    alt: "Onecliklogo",
  },
  {
    src: "https://primepathbusiness.com/wp-content/uploads/2024/08/Prime-path-Logo.png",
    alt: "Primepath",
  },
  {
    src: "https://rdsbusinessservices.com/wp-content/uploads/2022/04/rds-logo.png",
    alt: "Rdslogo",
  },
  {
    src: "https://visatheory.com/wp-content/uploads/2024/08/VisaTheory_Final.webp",
    alt: "Visalogo",
  },
];



export default function ImageSlider() {
  return (
    <div className="w-full">
      <div className="">
        <Swiper
          modules={[Autoplay]}
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
                    className="w-full h-full object-contain rounded-lg grayscale hover:grayscale-0 transition duration-300"
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
