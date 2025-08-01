// components/ContactForm.jsx
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("Please agree to the privacy policy.");
      return;
    }
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-md w-full space-y-6">
      <div className="text-left">
        <p className="text-sm uppercase tracking-wide font-bold text-gray-500 mb-2">
          WHAT WE OFFER
        </p>
        <h2 className="text-4xl md:text-4xl font-bold leading-tight mt-4">
          Start the dialogue, <br />
          unlock possibilities
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-1/2 border-0 border-b-2 border-gray-300 focus:outline-none focus:border-gray-700 bg-transparent py-2"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-1/2 border-0 border-b-2 border-gray-300 focus:outline-none focus:border-gray-700 bg-transparent py-2"
            required
          />
        </div>

        <div className="flex gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-1/2 border-0 border-b-2 border-gray-300 focus:outline-none focus:border-gray-700 bg-transparent py-2"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-1/2 border-0 border-b-2 border-gray-300 focus:outline-none focus:border-gray-700 bg-transparent py-2"
            required
          />
        </div>

        <input
          type="text"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full border-0 border-b-2 border-gray-300 focus:outline-none focus:border-gray-700 bg-transparent py-2"
          required
        />

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="w-4 h-4 accent-black"
          />
          <label htmlFor="agree" className="text-sm text-gray-700">
            I agree to the privacy policy.
          </label>
        </div>

        <button
          type="submit"
          className="w-1/2 py-3 bg-[#313131] text-white font-semibold rounded-lg hover:bg-gray-900 transition hover:cursor-pointer"
        >
          Get In Touch
        </button>
      </form>
    </div>
  );
}
