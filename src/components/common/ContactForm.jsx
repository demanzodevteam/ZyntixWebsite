export default function ContactForm() {
  return (
    <div className="zyntics-container-auto grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-lg">
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
        <form class="w-full max-w-lg p-12 mx-auto space-y-6 rounded-xl bg-[#f0f2f4]">
          <div class="relative">
            <input
              type="text"
              id="name"
              name="name"
              class="block w-full px-4 py-3 text-gray-700  border border-[#c5c6c7] appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" "
              required
            />
            <label
              for="name"
              class="absolute text-gray-700 duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[0] bg-[#f0f2f4] px-2 peer-focus:px-2  peer-placeholder-shown:scale-90 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 left-2"
            >
              Full Name
            </label>
          </div>

          <div class="relative">
            <input
              type="email"
              id="email"
              name="email"
              class="block w-full px-4 py-3 text-gray-700  border border-[#c5c6c7] appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" "
              required
            />
            <label
              for="email"
              class="absolute text-gray-700 duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[0] bg-[#f0f2f4] px-2 peer-focus:px-2  peer-placeholder-shown:scale-90 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 left-2"
            >
              Email Address
            </label>
          </div>

          <div class="relative">
            <textarea
              id="message"
              name="message"
              rows="4"
              class="block w-full px-4 py-3 text-gray-700  border border-[#c5c6c7] appearance-none focus:outline-none focus:ring-0 focus:border-black peer resize-none"
              placeholder=" "
              required
            ></textarea>
            <label
              for="message"
              class="absolute text-gray-700 duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[0] bg-[#f0f2f4] px-2 peer-focus:px-2  peer-placeholder-shown:scale-90 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-5 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 left-2"
            >
              Message
            </label>
          </div>

          <div>
            <button
              type="submit"
              class="w-full px-4 py-2 text-white bg-[#181818] hover:bg-[#333333] focus:outline-none transition-colors duration-300 cursor-pointer"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
