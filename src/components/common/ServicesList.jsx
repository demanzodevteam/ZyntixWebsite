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
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-circle-arrow-right"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="m12 16 4-4-4-4" />
    <path d="M8 12h8" />
  </svg>
);

const ServicesList = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-6 px-4">
      <div className="w-full space-y-6">
        {services.map((service, index) => (
          <div key={index}>
            <div className="grid grid-cols-1 md:grid-cols-[90px_500px_1fr_auto] gap-4 items-start py-4">
              <span className="zentics-h2 font-bold text-gray-600">
                {service.number}
              </span>
              <h3 className="zentics-h3 font-bold text-gray-800 text-left px-10">
                {service.title}
              </h3>
              <p className="zentics-p max-w-[500px]">{service.description}</p>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-800 text-xl font-bold"
              >
                <ArrowRightIcon />
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
