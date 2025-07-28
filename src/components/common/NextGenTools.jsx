export default function NextGenTools() {
  const items = [
    {
      number: "01",
      title: "Chatbot Development",
      description:
        "Build AI-powered bots for support, onboarding, and conversion.",
    },
    {
      number: "02",
      title: "Predictive Analytics",
      description:
        "Use data to forecast outcomes and make better decisions, faster.",
    },
    {
      number: "03",
      title: "Virtual Assistants",
      description: "Enable smart interactions across your app or platform.",
    },
    {
      number: "04",
      title: "AI Consulting",
      description:
        "Identify high-impact AI opportunities tailored to your use case.",
    },
    {
      number: "05",
      title: "Workflow Automation",
      description: `Automate manual tasks and optimize operations with:
        Process Mapping & Consulting
        Data Integration
        RPA (Robotic Process Automation)
        Intelligent Dashboards`,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="max-w-md">
        <h1 className="text-4xl font-bold leading-tight">
          Driving Innovation with
          <br />
          Next-Gen Tools
        </h1>
      </div>

      <div className="flex justify-end mt-6">
        <button
          aria-label="Previous"
          className="border border-purple-500 rounded-md h-10 px-3 flex items-center gap-2 justify-start text-black hover:bg-purple-50 transition"
        >
          <i className="fas fa-arrow-left"></i>
          <span>Find Out More</span>
        </button>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="text-[80px] rotate-270 font-extrabold vertical-text-outline font-sans">
              {item.number}
            </div>
            <div className="max-w-xs">
              <p className="font-bold text-lg leading-tight">{item.title}</p>
              <p className="text-sm leading-snug mt-2 whitespace-pre-line">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
