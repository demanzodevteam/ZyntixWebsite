import { useState } from "react";

const testimonials = [
  {
    name: "Jane Doe",
    position: "Product Manager",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John Smith",
    position: "CTO, TechCorp",
    comment:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)....",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Lisa Ray",
    position: "UX Designer",
    comment:
      "n slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const updateIndex = (newIndex) => {
    setIndex((newIndex + testimonials.length) % testimonials.length);
  };

  return (
    <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-20 items-start">
      {/* Left: Images horizontally + Name/Position */}
      <div className="flex flex-col items-center space-y-5">
        <div className="flex gap-5 flex-wrap justify-center">
          {testimonials.map((t, i) => (
            <img
              key={i}
              className={`w-24 h-24 rounded-full object-cover border-4 cursor-pointer transition-all duration-300 shadow-md ${
                index === i
                  ? "border-blue-600"
                  : "grayscale opacity-50 border-gray-300"
              }`}
              onClick={() => setIndex(i)}
              src={t.image}
              alt={t.name}
            />
          ))}
        </div>
        <div className="text-center mt-4">
          <h3 className="zentics-h6 font-semibold mb-1">
            {testimonials[index].name}
          </h3>
          <p className="zentics-small-p text-gray-600">
            {testimonials[index].position}
          </p>
        </div>
      </div>

      {/* Right: Comment + Arrows */}
      <div className="relative text-center md:text-left">
        <p className="zentics-p !text-gray-800 transition-all duration-300">
          “{testimonials[index].comment}”
        </p>

        <div className="flex justify-center md:justify-start gap-4 mt-6">
          <button
            onClick={() => updateIndex(index - 1)}
            className="w-14 h-10 rounded-lg bg-white border shadow hover:bg-gray-200 flex items-center justify-center hover:cursor-pointer"
          >
            <span>&larr;</span>
          </button>
          <button
            onClick={() => updateIndex(index + 1)}
            className="w-14 h-10 rounded-lg bg-white border shadow hover:bg-gray-200 flex items-center justify-center hover:cursor-pointer"
          >
            <span>&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
}
