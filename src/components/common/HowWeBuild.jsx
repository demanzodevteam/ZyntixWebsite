// import React from "react";

// const HowWeBuild = () => {
//   const items = [
//     {
//       tag: "Summary",
//       title: "DeepVision: Enhancing Image Recognition with Neural Networks",
//       img: "https://8ded8880.delivery.rocketcdn.me/themes/aiero/wp-content/uploads/2024/12/deepvision-fi.jpg",
//       rightAction: "Discover",
//     },
//     {
//       tag: "Highlights",
//       title:
//         "NLPGenius: Natural Language Processing Powered by Neural Networks",
//       img: "https://8ded8880.delivery.rocketcdn.me/themes/aiero/wp-content/uploads/2024/12/image-min.jpg",
//       imgClasses: "opacity-80",
//       rightAction: "Discover",
//     },
//     {
//       tag: "Insights",
//       title:
//         "AutoDrive: Autonomous Vehicle Navigation with Advanced Neural Networks",
//       img: "https://8ded8880.delivery.rocketcdn.me/themes/aiero/wp-content/uploads/2024/12/autodrive-autonomous-vehicle-navigation-fi.jpg",
//       rightAction: "Discover",
//     },
//     {
//       tag: "Deep dive",
//       title:
//         "CogniCraft Innovations: Shaping the Future through Cutting-Edge AI Endeavors",
//       img: "https://8ded8880.delivery.rocketcdn.me/themes/aiero/wp-content/uploads/2024/12/project-single-bg-min.jpg",
//       rightAction: "Discover",
//     },
//   ];

//   return (
//     <div className="zyntics-section flex items-center justify-center p-4 sm:p-6 text-white">
//       <div className="zyntics-container-auto rounded-2xl bg-[#181818] p-4 sm:p-8 space-y-8">
//         {/* Header */}
//         <div className="px-4 sm:px-10 flex flex-col md:flex-row md:items-start md:justify-between md:space-x-6 pt-8 sm:pt-12 space-y-4 md:space-y-0">
//           <div className="md:flex-1">
//             <p className="text-small-p font-semibold uppercase tracking-widest text-[#6B6B6B]">
//               [insights]
//             </p>
//             <h1 className="font-semibold text-h2 leading-relaxed">
//               How We Build
//             </h1>
//           </div>
//           <div className="flex justify-start md:justify-end">
//             <button className="px-4 py-2 text-[12px] font-semibold rounded-full border border-white border-opacity-40 hover:border-opacity-100 transition duration-300 flex items-center">
//               View projects <i className="fas fa-arrow-right ml-2"></i>
//             </button>
//           </div>
//         </div>

//         {/* Grid Content */}
//         <div className="px-4 sm:px-10 grid grid-cols-1 gap-6 pb-12 h-[600px] overflow-y-auto">
//           {items.map((item, i) => (
//             <div
//               key={i}
//               className={`sticky top-[140px] z-20 rounded-xl min-h-[220px] md:h-90 bg-cover bg-center flex items-center p-4 md:p-6 text-white ${
//                 item.imgClasses || ""
//               }`}
//               style={{ backgroundImage: `url(${item.img})` }}
//             >
//               {/* Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/50 to-black/30 rounded-xl z-0"></div>

//               {/* Content */}
//               <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4 sm:gap-0 px-2 sm:px-6 py-2">
//                 <div>
//                   <a
//                     href="#"
//                     className="text-[12px] font-semibold uppercase tracking-widest border border-blue-500 px-4 py-2 rounded-full hover:bg-gradient-to-r from-[#18C1FC] to-[#9F7CFE]"
//                   >
//                     {item.tag}
//                   </a>
//                   <div className="text-h5 font-normal leading-normal mt-4 sm:max-w-[60%]">
//                     {item.title}
//                   </div>
//                 </div>
//                 {item.rightAction && (
//                   <div className="zyntics-small-p !text-white font-semibold uppercase tracking-widest flex items-center whitespace-nowrap">
//                     {item.rightAction}
//                     <i className="fas fa-arrow-right ml-1 text-xs"></i>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HowWeBuild;


import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div className="zyntics-section flex items-center justify-center p-4 sm:p-6 text-white">
      <div className="zyntics-container-auto rounded-2xl bg-[#181818] p-4 sm:p-8 space-y-8">
        {/* Header */}
        <div className="px-4 sm:px-10 flex flex-col md:flex-row md:items-start md:justify-between md:space-x-6 pt-8 sm:pt-12 space-y-4 md:space-y-0">
          <div className="md:flex-1">
            <p className="text-small-p font-semibold uppercase tracking-widest text-[#6B6B6B]">
              [insights]
            </p>
            <h1 className="font-semibold text-h2 leading-relaxed">
              How We Build
            </h1>
          </div>
          <div className="flex justify-start md:justify-end">
            <button className="px-4 py-2 text-[12px] font-semibold rounded-full border border-white border-opacity-40 hover:border-opacity-100 transition duration-300 flex items-center">
              View projects <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>

        {/* Grid Content with Framer Motion */}
        <div ref={containerRef} className="relative h-[210vh] px-4 sm:px-10 grid grid-cols-1 gap-6 pb-12">
          {items.map((item, i) => {
            const targetScale = 1 - (items.length - i) * 0.05;
            const scale = useTransform(
              scrollYProgress,
              [i / items.length, 1],
              [1, targetScale]
            );

            return (
              <motion.div
                key={i}
                style={{
                  scale,
                  top: `calc(5% + ${i * 0}px)`, 
                  backgroundImage: `url(${item.img})`,
                }}
                className={`sticky z-20 rounded-xl min-h-[220px] md:h-90 bg-cover bg-center flex items-center p-4 md:p-6 text-white origin-top hover:scale-100 ${
                  item.imgClasses || ""
                }`}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/50 to-black/30 rounded-xl z-0"></div>
                {/* Content */}
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4 sm:gap-0 px-2 sm:px-6 py-2">
                  <div>
                    <a
                      href="#"
                      className="text-[12px] font-semibold uppercase tracking-widest border border-blue-500 px-4 py-2 rounded-full hover:bg-gradient-to-r from-[#18C1FC] to-[#9F7CFE]"
                    >
                      {item.tag}
                    </a>
                    <div className="text-h5 font-normal leading-normal mt-4 sm:max-w-[60%]">
                      {item.title}
                    </div>
                  </div>
                  {item.rightAction && (
                    <div className="zyntics-small-p !text-white font-semibold uppercase tracking-widest flex items-center whitespace-nowrap">
                      {item.rightAction}
                      <i className="fas fa-arrow-right ml-1 text-xs"></i>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HowWeBuild;
