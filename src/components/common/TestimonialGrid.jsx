import React from "react";

const testimonials = [
  {
    username: "suryakant arora",
    text: "​I had an incredible experience working with Crezeal Technologies. Their expertise in web development is unmatched.The team is professional, highly skilled, and always ready to go the extra mile to ensure client satisfaction.",
    stars: 5,
  },
  {
    username: "Karthik Krishnan",
    text: "After searching and dealing with different designers and developers without success, I finally found Crezeal Technologies.The web designers team at Crezeal is the best! Couldn't be more happy with the quality website they developed for me.",
    stars: 5,
  },
  {
    username: "Print Cord",
    text: "I recently had the pleasure of working with Crezeal Technologies to develop my website, PrintCord.in, and I couldn’t be happier with the results! Crezeal Technologies impressed me from the start with their professionalism, technical expertise, and dedication to bringing my vision to life.",
    stars: 5,
  },
  {
    username: "shanu J",
    text: "Crezeal is the best web designing company. I absolutely loved working with the team in creating a unique website for my Bakery. They brought so many great ideas and design with user experience points to the table and was able to construct what our vision was for our businesses into a stunning website!!I highly recommend Crezeal Technologies. If you are looking for a affordable professional service this is the best around Nagercoil!!!",
    stars: 5,
  },
  {
    username: "Ayush Kokra",
    text: "Crezeal helped me with the best customization of the website alongside with the cooperative team. The developers know what they are doing, I am very satisfied with my website as the developers are also knowledgeable about work and the field. I got no chance of complaints against them.",
    stars: 5,
  },
  {
    username: "Godson Chinnu",
    text: "Working with Crezeal has been a game-changer for our business. Our business was doing well with offline but we felt that its time to build online. We approached Crezeal Benujah guided us with the plans. They have build me a beautiful website. Their team has significantly boosted our brand visibility. The best part is that I am receiving a couple of calls every week from new customers. Thanks team.",
    stars: 5,
  },
  {
    username: "Sree ganapathy",
    text: "I recently had an amazing experience with Crezeal for website design & digital marketing. Their service truly impressed me simply because they attentively & patiently listened to our lengthy brief. And everything worked successfully and now we receive enquiries regularly. Highly recommended.",
    stars: 5,
  },
  {
    username: "Krishna Moorthy",
    text: "I recently worked with Crezeal for our website development and am very happy with the results. Special thanks to Benujah for her excellent support. I highly recommend Crezeal for website development 👌👌",
    stars: 5,
  },
  {
    username: "Rajasozhaperumal G",
    text: "So lucky to have found Benujah! She explained the services so I could understand what was possible. I am very happy with their website designs and digital marketing which are bringing great results so far! Great team to work with.",
    stars: 5,
  },
  {
    username: "hari perumal",
    text: "Working at Demanzo has been a highly rewarding experience. The company offers a collaborative and creative environment where team members are encouraged to grow, learn, and contribute meaningfully.I’ve had the opportunity to work on exciting digital projects with a talented team that values innovation and results. The leadership is supportive, communicative, and genuinely cares about employee development.",
    stars: 5,
  },
  {
    username: "Dominic Rosario",
    text: "It was a fantastic experience. Their team is highly customer-centric, ensuring that every interaction is tailored to meet your needs, also they respond quick on time and genuine commitment to providing top-notch service.",
    stars: 5,
  },
  {
    username: "Kevin Perdigues",
    text: "Very good quality-price ratio. Jude is fair and his team are magicians of the web!Great team to work with. They've worked hard to pull off a fantastic result beyond my expectations.",
    stars: 4,
  },
];

const TestimonialGrid = () => {
  return (
    <div className=" zyntics-section zyntics-container-auto relative bg-gradient-to-b from-[#e9eef3] to-[#D9D9D9] rounded-4xl py-10 md:py-30 overflow-hidden">
      {/* Fading Overlay using blur + opacity */}
      <div className="hidden md:block absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#D9D9D9]/30 to-[#D9D9D9]/100 pointer-events-none z-10"></div>
      {/* Heading */}
      <div className="text-center mb-6">
        <div className="text-yellow-400 text-xl mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <i key={i} className="fas fa-star"></i>
          ))}
        </div>
        <h2 className="text-black text-h3 font-normal leading-tight mx-auto px-4">
          User stories: hear what others love <br />
          about our{" "}
          <span className="bg-gradient-to-r from-[#6432F1] via-[#8b28f4] to-[#be1cf8] bg-clip-text text-transparent">
            WordPress themes!
          </span>
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
