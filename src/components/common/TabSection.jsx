import { useState } from "react";
import TabSelection from "./TabSelection";

const TabSection = () => {
  const [currentImage, setCurrentImage] = useState(
    "https://www.pixelcrayons.com/wp-content/uploads/2025/02/agencies.webp"
  );

  return (
    <section className="max-w-[1400px] mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-[#F9FCFF] rounded-lg py-6 px-5 md:px-10">
        {/* Left Column */}
        <div className="flex flex-col relative items-start">
          <img
            alt="Hummingbird"
            className="absolute top-0 left-0 rounded-full bg-[#ECECEC] w-12 h-12"
            src="https://storage.googleapis.com/a1aa/image/64b7399f-022f-452e-5288-8d625679d66e.jpg"
          />
          <h1 className="text-h2 font-extrabold text-[#130f26] leading-tight mt-12 sm:mt-14 mb-4">
            Driving Growth for
            <br className="hidden sm:inline" />
            Businesses of All-sizes
          </h1>
          <p className="text-p !text-[#4b5563] text-base font-semibold leading-relaxed max-w-[460px] mb-7">
            Led by engineers. Backed by strategy. Built for outcomes.
          </p>

          {/* Pass image setter to tab */}
          <TabSelection onImageChange={setCurrentImage} />
        </div>

        {/* Right Column - Image updates with tab */}
        <div className="flex justify-center items-center transform transition-all duration-700 ease-in-out hover:-translate-y-4">
          <img
            alt="Dynamic Tab Image"
            className="w-full max-w-md md:max-w-full h-auto "
            src={currentImage}
          />
        </div>
      </div>
    </section>
  );
};

export default TabSection;
