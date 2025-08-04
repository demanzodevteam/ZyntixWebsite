import React from "react";

const HowWeBuild = () => {
  const items = [
    {
      tag: "Summary",
      title: "DeepVision: Enhancing Image Recognition with Neural Networks",
      img: "https://8ded8880.delivery.rocketcdn.me/themes/aiero/wp-content/uploads/2024/12/deepvision-fi.jpg",
      rightAction: "Discover",
    },
    {
      tag: "Highlights",
      title:
        "NLPGenius: Natural Language Processing Powered by Neural Networks",
      img: "https://8ded8880.delivery.rocketcdn.me/themes/aiero/wp-content/uploads/2024/12/image-min.jpg",
      imgClasses: "opacity-80",
      rightAction: "Discover",
    },
    {
      tag: "Insights",
      title:
        "AutoDrive: Autonomous Vehicle Navigation with Advanced Neural Networks",
      img: "https://8ded8880.delivery.rocketcdn.me/themes/aiero/wp-content/uploads/2024/12/autodrive-autonomous-vehicle-navigation-fi.jpg",
      rightAction: "Discover",
    },
    {
      tag: "Deep dive",
      title:
        "CogniCraft Innovations: Shaping the Future through Cutting-Edge AI Endeavors",
      img: "https://8ded8880.delivery.rocketcdn.me/themes/aiero/wp-content/uploads/2024/12/project-single-bg-min.jpg",
      rightAction: "Discover",
    },
  ];

  return (
    <div className="zyntics-section  flex items-center justify-center p-6 text-white">
      <div className="zyntics-container-auto rounded-2xl bg-[#181818] p-8 space-y-8">
        {/* Header */}
        <div className="px-10 flex flex-col md:flex-row md:items-start md:justify-between md:space-x-6 pt-12">
          <div className="md:flex-1">
            <p className="text-small-p font-semibold uppercase tracking-widest text-[#6B6B6B]">
              [insights]
            </p>
            <h1 className="font-semibold text-h2 leading-relaxed">
              How We Build
            </h1>
          </div>
          <div className="mt-4 md:mt-10 flex items-center">
            <button className="px-4 py-2 text-[12px] font-semibold rounded-full border border-white border-opacity-40 hover:border-opacity-100 transition duration-300 flex items-center">
              View projects <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>

        {/* Grid Content */}
        <div className="px-10 grid grid-cols-1 md:grid-cols-1 gap-6 pb-12">
          {items.map((item, i) => (
            <div
              key={i}
              className={`relative rounded-xl h-40 md:h-90 bg-cover bg-center flex items-center p-4 md:p-6 text-white ${
                item.imgClasses || ""
              }`}
              style={{ backgroundImage: `url(${item.img})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/50 to-black/30 rounded-xl z-0"></div>

              {/* Content */}
              <div className="relative z-10 flex items-center justify-between w-full px-6 py-2 ">
                <div className="">
                  <a
                    href="#"
                    className="text-[12px] font-semibold uppercase tracking-widest  border border-blue-500 px-4 py-2 rounded-full hover:bg-gradient-to-r from-[#18C1FC] to-[#9F7CFE]"
                  >
                    {item.tag}
                  </a>
                  <div className="text-h5 font-normal leading-normal max-w-[60%] mt-4">
                    {item.title}
                  </div>
                </div>
                {item.rightAction && (
                  <div className="zyntics-small-p !text-white font-semibold uppercase tracking-widest flex items-center whitespace-nowrap">
                    {item.rightAction}{" "} 
                    <i className="fas fa-arrow-right ml-1 text-xs"></i>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWeBuild;
