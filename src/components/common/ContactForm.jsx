import { useState } from "react";
import map from "../../assets/Map.png";
import { Section } from "lucide-react";

export default function ContactForm({SectionData}) {
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
    e.preventDefault();
    setError("");
    setSuccess("");
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
      setTimeout(() => {
        console.log("Form Submitted:", form);
        setForm({ name: "", email: "", message: "" });
        setSuccess("Send Successfully!");
      }, 1500);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" zyntics-section zyntics-container-auto">
      <div
        className="bg-contain bg-center bg-no-repeat z-10 w-full h-full"
        style={{ backgroundImage: `url(${map.src})` }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h1 className="text-h3">{SectionData.title} </h1>
            <h3 className="zyntics-h6  my-6">{SectionData.description} </h3>
            <p className="zyntics-p my-6">{SectionData.para1} </p>
            <p className="zyntics-p  my-6">{SectionData.para2} </p>
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
                  className="block w-full px-4 py-3 text-gray-700 border border-[#adadad] appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute text-[#adadad] duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[0] bg-[#f0f2f4] px-2 peer-focus:px-2 peer-placeholder-shown:scale-90 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 left-1 peer-focus:text-[#333]"
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
                  className="block w-full px-4 py-3 text-gray-700  border border-[#adadad] appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute text-[#adadad] duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[0] bg-[#f0f2f4] px-2 peer-focus:px-2  peer-placeholder-shown:scale-90 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 left-1 peer-focus:text-[#333]"
                >
                  Email
                </label>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 text-gray-700  border border-[#adadad] appearance-none focus:outline-none focus:ring-0 focus:border-black peer resize-none"
                  placeholder=" "
                  required
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute text-[#adadad] duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[0] bg-[#f0f2f4] px-2 peer-focus:px-2  peer-placeholder-shown:scale-90 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-5 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 left-1 peer-focus:text-[#333]"
                >
                  Message
                </label>
              </div>

              <div className="p-[1px] rounded-lg bg-gradient-to-r from-[#11C3FF] to-[#AB76FF] inline-block">
                <button
                  type="submit"
                  disabled={loading}
                  className={`group relative flex items-center justify-center gap-2 px-5 py-3 text-[14px] font-[500] bg-[#f0f2f4] rounded-lg p-4 text-black
                  hover:bg-gradient-to-r from-[#11C3FF] to-[#AB76FF] hover:text-white focus:outline-none transition-colors duration-300 cursor-pointer overflow-hidden ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  <span>{loading ? "Sending..." : "Send Message"}</span>
                  {!loading && (
                    <span className="relative mt-1 w-5 h-5 flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right-icon lucide-arrow-right absolute left-0 right-0 flex justify-center
                                          transition-all duration-500 ease-in-out
                                          top-0
                                          group-hover:-translate-y-4 group-hover:opacity-0 -rotate-45"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right-icon lucide-arrow-right absolute left-0 right-0 flex justify-center
                                          transition-all duration-500 ease-in-out
                                          top-4 opacity-0
                        group-hover:top-0 group-hover:opacity-100 -rotate-45"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </span>
                  )}
                </button>
              </div>
              {error && (
                <div className="flex items-center gap-2 text-sm text-red-500 justify-center">
                  {error}
                </div>
              )}
              {success && (
                <div className="flex items-center gap-2 text-sm text-green-600 justify-center">
                  {success}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
