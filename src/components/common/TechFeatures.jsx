import React from "react";

const TechFeatures = ({ features }) => {
  const { items, title } = features;

  return (
    <section className="relative bg-white py-16 zyntics-section overflow-hidden">
      {/* === Background Glow Effects === */}
      {/* <div className="absolute w-[80vw] max-w-[700px] h-[40vw] max-h-[300px] bg-[#D4EFF7] opacity-100 rounded-full blur-[100px] top-2/3  -translate-x-1/2 -translate-y-full z-0"></div>
      <div className="absolute w-[80vw] max-w-[700px] h-[40vw] max-h-[300px] bg-[#a1d7e7] opacity-100 rounded-full blur-[100px] top-200 -translate-x-1/2 -translate-y-full z-0"></div> */}

      <div className="absolute w-[80vw] max-w-[700px] h-[40vw] max-h-[300px] bg-[#D4EFF7] opacity-30 rounded-full blur-[100px] bottom-2/3 -translate-x-1/2 -translate-y-full left-1/2 z-0"></div>

      <div className="absolute w-[80vw] max-w-[700px] h-[30vw] max-h-[300px] bg-[#a1d7e7] opacity-30 rounded-full blur-[100px] bottom-0 left-1/2 -translate-x-1/2 z-0"></div>

      <div className="zyntics-container-auto px-4 sm:px-10 relative z-10">
        {/* Heading & Logo */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 space-y-6 md:space-y-0">
          <h1 className="text-h2 sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
            {title}
          </h1>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((feature, idx) => (
            <div
              key={idx}
              className="group"
            >
              {/* Icon */}
              <div className="mb-4">
                {feature.icon ? (
                  <div className="flex-shrink-0 mt-1 text-[#4F57E3]">
                    <i className={`${feature.icon} fa-lg`} />
                  </div>
                ) : null}
              </div>

              {/* Title */}
              <h3 className="text-[20px] font-semibold text-[#111] mb-3 leading-snug">
                {feature.title.split("\n").map((line, lineIdx) => (
                  <React.Fragment key={lineIdx}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </h3>

              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechFeatures;


// import React from "react";

// const TechFeatures = ({ features }) => {
//   const { items, title, logo } = features;

//   return (
//     <section className="relative bg-white py-16 zyntics-section overflow-hidden">
//       {/* === Background Glow Effects === */}
//       <div className="absolute w-[80vw] max-w-[700px] h-[40vw] max-h-[300px] bg-[#D4EFF7] opacity-100 rounded-full blur-[100px] top-2/3  -translate-x-1/2 -translate-y-full z-0"></div>
//       <div className="absolute w-[80vw] max-w-[700px] h-[40vw] max-h-[300px] bg-[#a1d7e7] opacity-100 rounded-full blur-[100px] top-200 -translate-x-1/2 -translate-y-full z-0"></div>

//       <div className="zyntics-container-auto px-4 sm:px-10 relative z-10">
//         {/* Heading & Logo */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 space-y-6 md:space-y-0">
//           <h1 className="text-h2 sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
//             {title}
//           </h1>
//           {logo?.src && (
//             <img
//               src={logo.src}
//               alt="Logo"
//               className="w-24 h-24 object-contain"
//             />
//           )}
//         </div>

//         {/* Feature Cards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {items.map((feature, idx) => (
//             <div
//               key={idx}
//               className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-blue-500 transition duration-300"
//             >
//               {/* Icon */}
//               <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 text-white mb-4">
//                 {feature.imageSrc ? (
//                   <img
//                     src={feature.imageSrc}
//                     alt={`${feature.title} icon`}
//                     className="w-6 h-6 object-contain"
//                   />
//                 ) : null}
//               </div>

//               {/* Title */}
//               <h3 className="text-h6 font-semibold text-gray-800 mb-3 leading-snug">
//                 {feature.title.split("\n").map((line, lineIdx) => (
//                   <React.Fragment key={lineIdx}>
//                     {line}
//                     <br />
//                   </React.Fragment>
//                 ))}
//               </h3>

//               {/* Bullet Points */}
//               <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
//                 {feature.points.map((point, pointIdx) => (
//                   <li key={pointIdx}>{point}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TechFeatures;
