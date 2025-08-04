import React from "react";

const testimonials = [
  {
    username: "manojchouh",
    text: "Nice theme with excellent support from the developers. All of my doubts and requests were fixed within a day.",
    stars: 5,
  },
  {
    username: "sinilian",
    text: "Wonderful and clean design will create an excellent base for starting the new agency. Especially when you don’t want to do design turnkey and are looking for something to help you make a fast",
    stars: 5,
  },
  {
    username: "manojchouh",
    text: "Nice theme with excellent support from the developers. All of my doubts and requests were fixed within a day.",
    stars: 5,
  },
  {
    username: "manojchouh",
    text: "Nice theme with excellent support from the developers. All of my doubts and requests were fixed within a day.",
    stars: 5,
  },
  {
    username: "manojchouh",
    text: "Nice theme with excellent support from the developers. All of my doubts and requests were fixed within a day.",
    stars: 5,
  },
  {
    username: "sinilian",
    text: "Wonderful and clean design will create an excellent base for starting the new agency. Especially when you don’t want to do design turnkey and are looking for something to help you make a fast",
    stars: 5,
  },
  {
    username: "sinilian",
    text: "Wonderful and clean design will create an excellent base for starting the new agency. Especially when you don’t want to do design turnkey and are looking for something to help you make a fast",
    stars: 5,
  },
  {
    username: "sinilian",
    text: "Wonderful and clean design will create an excellent base for starting the new agency. Especially when you don’t want to do design turnkey and are looking for something to help you make a fast",
    stars: 5,
  },
  {
    username: "manojchouh",
    text: "Nice theme with excellent support from the developers. All of my doubts and requests were fixed within a day.",
    stars: 5,
  },
  {
    username: "sinilian",
    text: "Wonderful and clean design will create an excellent base for starting the new agency. Especially when you don’t want to do design turnkey and are looking for something to help you make a fast",
    stars: 5,
  },
  {
    username: "sinilian",
    text: "Wonderful and clean design will create an excellent base for starting the new agency. Especially when you don’t want to do design turnkey and are looking for something to help you make a fast",
    stars: 5,
  },
  {
    username: "sinilian",
    text: "Wonderful and clean design will create an excellent base for starting the new agency. Especially when you don’t want to do design turnkey and are looking for something to help you make a fast",
    stars: 5,
  },
];

const TestimonialGrid = () => {
  return (
    <div className=" zyntics-section zyntics-container-auto relative bg-gradient-to-b from-[#e9eef3] to-[#D9D9D9] rounded-4xl py-10 md:py-30 overflow-hidden">
      {/* Fading Overlay using blur + opacity */}
      <div className="hidden md:block absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#D9D9D9]/30 to-[#D9D9D9]/100 pointer-events-none z-20"></div>
      {/* Heading */}
      <div className="text-center mb-6">
        <div className="text-yellow-400 text-xl mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <i key={i} className="fas fa-star"></i>
          ))}
        </div>
        <h2 className="text-black text-h3 font-normal leading-tight mx-auto px-4">
          User stories: hear what others love <br />
          about our <span className="bg-gradient-to-r from-[#6432F1] via-[#8b28f4] to-[#be1cf8] bg-clip-text text-transparent">WordPress themes!</span>

        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 md:px-8 text-[10px] sm:text-[11px] md:text-[12px] mt-10">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl p-7 shadow-sm border border-transparent `}
          >
            <h3 className="font-semibold text-[20px] mb-1">{t.username}</h3>
            <div className="text-yellow-300 text-xs mb-1">
              {Array.from({ length: t.stars }).map((_, i) => (
                <i key={i} className="fas fa-star"></i>
              ))}
            </div>
            <p className="leading-tight text-[14px]">{t.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialGrid;
