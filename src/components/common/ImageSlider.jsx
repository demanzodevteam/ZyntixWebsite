import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";


const images = [
  {
    src: "https://storage.googleapis.com/a1aa/image/2db2664d-7c84-4cb6-36b7-70689fc1a72c.jpg",
    alt: "Business Team",
  },
  {
    src: "https://storage.googleapis.com/a1aa/image/d18c08c7-97bc-4e73-f817-f1264a6f9762.jpg",
    alt: "Business Team",
  },
  {
    src: "https://storage.googleapis.com/a1aa/image/8bf6c506-5549-44fe-fe52-c7fbfd92995e.jpg",
    alt: "Startup Office",
  },
  {
    src: "https://storage.googleapis.com/a1aa/image/507441d0-91ce-485f-c2cb-6da3b988a1f5.jpg",
    alt: "Collaboration",
  },
  {
    src: "https://storage.googleapis.com/a1aa/image/9980bc77-490b-4ef4-3141-0e2480b780a8.jpg",
    alt: "Creative Team",
  },
  {
    src: "https://storage.googleapis.com/a1aa/image/16a9708a-a40b-40a7-e5fc-43b319bce939.jpg",
    alt: "Planning",
  },
  {
    src: "https://storage.googleapis.com/a1aa/image/8bf6c506-5549-44fe-fe52-c7fbfd92995e.jpg",
    alt: "Startup Office",
  },
];

export default function ImageSlider() {
  return (
    <div className="w-full  mt-20">
      <div className="max-w-[1400px] mx-auto">
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
