import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    setError("");
    setSuccess("");
    e.preventDefault();
    if (
      form.name.trim() == "" ||
      form.email.trim() == "" ||
      form.message.trim() == ""
    ) {
      setError("All fields are required.");
      return;
    }

    setLoading(true);
    try {
      console.log("Form Submitted:", form);
      setForm({
        name: "",
        email: "",
        message: "",
      });
      setSuccess("Submitted Successfully!");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" zyntics-section zyntics-container-auto  bg-white rounded-lg">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h1 className="text-h3">Start With a Free Website Audit </h1>
          <h3 className="zyntics-h6  my-6">
            Not sure where your current site stands? We’ll review your site’s
            structure, speed, SEO readiness, and user flow—then provide a
            practical action plan. No cost, no commitment.{" "}
          </h3>
          <p className="zyntics-p my-6">
            📞 Schedule a Free 30-Minute Consultation{" "}
          </p>
          <p className="zyntics-p  my-6">
            📩 Or send us your brief—we respond within 24 hours.{" "}
          </p>
        </div>
        <div className="relative">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg p-12 mx-auto space-y-6 rounded-xl bg-[#f0f2f4]"
          >
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="block w-full px-4 py-3 text-gray-700 border border-[#c5c6c7] appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="name"
                className="absolute text-gray-700 duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[0] bg-[#f0f2f4] px-2 peer-focus:px-2 peer-placeholder-shown:scale-90 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 left-2"
              >
                Full Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="block w-full px-4 py-3 text-gray-700  border border-[#c5c6c7] appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="absolute text-gray-700 duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[0] bg-[#f0f2f4] px-2 peer-focus:px-2  peer-placeholder-shown:scale-90 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 left-2"
              >
                Email Address
              </label>
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                className="block w-full px-4 py-3 text-gray-700  border border-[#c5c6c7] appearance-none focus:outline-none focus:ring-0 focus:border-black peer resize-none"
                placeholder=" "
                required
              ></textarea>
              <label
                htmlFor="message"
                className="absolute text-gray-700 duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[0] bg-[#f0f2f4] px-2 peer-focus:px-2  peer-placeholder-shown:scale-90 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-5 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 left-2"
              >
                Message
              </label>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full px-4 py-2 text-white bg-[#181818] hover:bg-[#333333] focus:outline-none transition-colors duration-300 cursor-pointer ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
            {error && (
              <p className="text-sm text-center text-red-500">{error}</p>
            )}
            {success && (
              <p className="text-sm text-center text-green-500">{success}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
