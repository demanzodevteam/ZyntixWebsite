import React from "react";

const ListCard = ({ SectionData }) => {
  return (
    <div className="zyntics-container-auto px-6 py-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <p className="text-small-p font-normal text-black mb-1">
            [ {SectionData?.title} ]
          </p>
          <h1 className="text-h4 font-semibold leading-snug max-w-3xl">
            {SectionData?.heading}
          </h1>
        </div>
        <div className="mt-6 md:mt-28">
          <div className="p-[1px] rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 inline-block">
            <button
              aria-label="More articles"
              className="zyntics-small-p font-normal text-[#4B6CB7] bg-white rounded-2xl px-6 py-3 flex items-center gap-1 hover:bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:text-white transition hover:cursor-pointer"
            >
              {SectionData?.button}
              <i className="fas fa-arrow-right text-[10px]" />
            </button>
          </div>
        </div>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {SectionData?.item?.map((post, idx) => (
          <article
            key={idx}
            className="border border-[#E6E6E6] rounded-lg overflow-hidden group"
          >
            <div className="relative">
              <div className="group overflow-hidden">
                <img
                  src={post.img}
                  alt={post.alt}
                  className="w-full h-[140px] md:h-[200px] object-cover rounded-t-lg transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                  width={400}
                  height={220}
                />
              </div>
              <div className="absolute bottom-2 left-2 bg-white zyntics-small-p text-[#4B4B4B] rounded-full px-3 py-0.5 font-normal max-w-max">
                {post.date} / {post.author}
              </div>
            </div>
            <div className="p-4">
              <h2 className="zyntics-p !text-black font-normal leading-snug mb-2 px-2">
                {post.title}
              </h2>
              <p className="zyntics-small-p text-[#9B9B9B] font-normal px-2">
                {post.tags}
              </p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default ListCard;
