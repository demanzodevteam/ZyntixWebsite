import React from "react";

const BlogSection = () => {
  const blogData = [
    {
      title:
        "How can I get started with Artificial Intelligence for my business?",
      img: "https://storage.googleapis.com/a1aa/image/9988944a-007a-46f4-8324-b5e330de3e20.jpg",
      date: "2 Jan 2025",
      author: "andrew",
      tags: "/ AI Aiero / Technology /",
      alt: "Abstract AI art with blue and pink swirls and black dots",
    },
    {
      title:
        "AI and Robotics: Advancing Automation and Human-Robot Collaboration",
      img: "https://storage.googleapis.com/a1aa/image/fac6a693-d9cd-4a5c-56f5-604f0704402d.jpg",
      date: "25 Dec 2024",
      author: "andrew",
      tags: "/ AI / Neural Networks /",
      alt: "Robot head with blue eyes on gray background",
    },
    {
      title: "How Natural Language Processing is revolutionizing Text Analysis",
      img: "https://storage.googleapis.com/a1aa/image/d4cc67a4-b6f3-4b37-644d-5adeb49528f6.jpg",
      date: "25 Dec 2024",
      author: "andrew",
      tags: "/ AI Services / AI Solutions /",
      alt: "Woman with blonde ponytail looking at touchscreen interface",
    },
  ];

  return (
    <div className="max-w-[1300px] mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <p className="text-small-p font-normal text-black mb-1">[ blog ]</p>
          <h1 className="text-h4 font-semibold leading-snug max-w-xl">
            Exploring the world of artificial intelligence with Aiero blogging
          </h1>
        </div>
        <div className="mt-6 md:mt-28">
          <div className="p-[1px] rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 inline-block">
            <button
              aria-label="More articles"
              className="zentics-small-p font-normal text-[#4B6CB7] bg-white rounded-2xl px-6 py-3 flex items-center gap-1 hover:bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:text-white transition hover:cursor-pointer"
            >
              More articles
              <i className="fas fa-arrow-right text-[10px]" />
            </button>
          </div>
        </div>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {blogData.map((post, idx) => (
          <article
            key={idx}
            className="border border-[#E6E6E6] rounded-lg overflow-hidden"
          >
            <div className="relative">
              <img
                src={post.img}
                alt={post.alt}
                className="w-full h-[140px] md:h-[200px] object-cover rounded-t-lg"
                width={400}
                height={220}
              />
              <div className="absolute bottom-2 left-2 bg-white zentics-small-p text-[#4B4B4B] rounded-full px-3 py-0.5 font-normal max-w-max">
                {post.date} / {post.author}
              </div>
            </div>
            <div className="p-4">
              <h2 className="zentics-p !text-black font-normal leading-snug mb-2 px-2">
                {post.title}
              </h2>
              <p className="zentics-small-p text-[#9B9B9B] font-normal px-2">
                {post.tags}
              </p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default BlogSection;
