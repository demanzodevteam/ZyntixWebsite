// src/components/MapEmbed.jsx
export default function MapEmbed() {
  return (
    <div className="w-full h-full">
      <iframe
        title="Google Map"
        className="w-full h-full border-0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1956217481444!2d-122.42189368468317!3d37.77492967975944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b282a2b%3A0x730c76d3c6a6d9bb!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1611781929603!5m2!1sen!2sus"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}
