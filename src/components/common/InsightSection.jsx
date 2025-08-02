import React from "react";

const InsightSection = ({ SectionData}) => {
  return (
    <div className="zyntics-section zyntics-container-auto bg-[#333333] rounded-2xl ">
      <div className="py-8">
        <div className="max-w-7xl mx-auto rounded-xl overflow-hidden flex flex-col md:flex-row bg-[#222222] text-white">
          {/* Image Side */}
          <div className="md:w-1/2 relative">
            <img
              src={SectionData?.image}
              alt="Market research visual"
              className="w-full h-full object-cover"
              width="600"
              height="600"
            />
          </div>

          {/* Content Side */}
          <section className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h1 className="text-h3 font-semibold leading-snug mb-6 max-w-xl">
              {SectionData?.title}
            </h1>
            <p className="zyntics-p !text-white font-semibold max-w-xl mb-4 leading-relaxed">
              {SectionData?.description1}
            </p>
            <p className="zyntics-p !text-white max-w-xl mb-8 leading-relaxed">
              {SectionData?.description2}
            </p>
            <button
              type="button"
              className="inline-flex items-center gap-2 border border-[#5B7FFF] w-fit rounded-md px-4 py-2 text-xs md:text-sm text-[#5B7FFF] hover:bg-gradient-to-r from-[#18C1FC] to-[#9F7CFE] hover:text-white transition hover:cursor-pointer"
            >
              {SectionData?.buttonLabel}
              <i className="fas fa-arrow-up-right-from-square text-xs"></i>
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default InsightSection;
