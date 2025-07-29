const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Fast, SEO-friendly websites with clean code and high conversion intent.",
  },
  {
    number: "02",
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps built using Flutter and React Native.",
  },
  {
    number: "03",
    title: "E-commerce Development",
    description:
      "Custom storefronts, marketplaces, and headless commerce platforms.",
  },
  {
    number: "04",
    title: "Enterprise Solutions",
    description:
      "Secure portals, dashboards, APIs, and workflow tools for internal operations.",
  },
  {
    number: "05",
    title: "AI & ML Solutions",
    description:
      "Predictive analytics, automation tools, and decision-making engines.",
  },
  {
    number: "06",
    title: "Hire Developers",
    description:
      "Scale your team with remote specialists in frontend, backend, AI/ML, mobile, or full-stack.",
  },
];

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-arrow-right-icon lucide-arrow-right"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const ServicesList = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-6 px-4">
      <div className="w-full space-y-6">
        {services.map((service, index) => (
          <div key={index}>
            <div className="group grid grid-cols-1 md:grid-cols-[90px_500px_1fr_auto] gap-4 items-start py-4">
              <span className="zentics-h2 font-bold text-gray-600 group-hover:text-[#5057E6]">
                {service.number}
              </span>

              <h3 className="zentics-h3 font-bold text-gray-800 text-left md:px-10">
                {service.title}
              </h3>

              <p className="zentics-p max-w-[500px]">{service.description}</p>

              <a
                href="#"
                className="w-14 h-14 flex items-center justify-center text-gray-600 text-xl font-bold border border-gray-300 rounded-full group-hover:border-gray-800 transition-all duration-300"
              >
                <span className="block transform transition-transform duration-300 group-hover:-rotate-45">
                  <ArrowRightIcon />
                </span>
              </a>
            </div>

            <hr className="mt-4 border-gray-300" />

          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
