import React, { useState } from "react";
import Logo from "../../assets/Zyntics-logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isTabletMenuOpen, setTabletMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);



  const toggleMenu = (menuId) => {
    setActiveMenu((prev) => (prev === menuId ? null : menuId));
  };
  const openMenu = () => {
    setMobileMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = "";
  };

  const openTabletMenu = () => {
    setTabletMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeTabletMenu = () => {
    setTabletMenuOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <nav
      id="main-navbar"
      className="w-full bg-white z-50 transition-all duration-300 ease-in-out transform"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex-shrink-0 transform transition-transform duration-300 ease-in-out hover:scale-110">
            <a href="#" className="text-xl font-bold">
              <img
                src={Logo.src}
                alt="Logo"
                className="w-[170px] md:w-[190px] lg:w-[200px]"
              />
            </a>
          </div>

          {/* Center: Nav Links */}
          <div className="hidden xl:flex space-x-6">
            <a
              href="#"
              className="font-medium hover:underline hover:underline-offset-4 hover:decoration-black"
            >
              Home
            </a>
            <a
              href="#"
              className="font-medium hover:underline hover:underline-offset-4 hover:decoration-black"
            >
              Pages
            </a>
            <a
              href="#"
              className="font-medium hover:underline hover:underline-offset-4 hover:decoration-black"
            >
              Portfolio
            </a>
            <a
              href="#"
              className="font-medium hover:underline hover:underline-offset-4 hover:decoration-black"
            >
              Blog
            </a>
            <a
              href="#"
              className="font-medium hover:underline hover:underline-offset-4 hover:decoration-black"
            >
              Shop
            </a>
          </div>

          {/* Right: Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
  
            {/* Tablet Menu Toggle Button (for md only) */}
            <button
              id="tablet-menu-toggle"
              className="hidden md:flex xl:hidden text-black focus:outline-none hover:cursor-pointer"
              onClick={openTabletMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>

            <a
              href="#"
              className="bg-[#3D3D3D] text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-200"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              id="mobile-menu-toggle"
              className="md:hidden text-black focus:outline-none"
              onClick={openMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`fixed md:hidden inset-0 z-40 bg-[#232323] text-white px-6 py-8 space-y-6 transition-all duration-700 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-6"
        }`}
      >
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-4xl font-extrabold">Zyntics</h1>
          <button
            id="mobile-menu-close"
            className={`transition-transform duration-1000 `}
            onClick={closeMenu}
          >
            {/* Close icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 hover:cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <nav className="space-y-4 text-lg mt-15">
          <div className="space-y-2">
            <div
              className="flex items-center text-gray-400 hover:text-white space-x-4 cursor-pointer"
              onClick={() => toggleMenu("home")}
            >
              <span className="block text-xl font-bold">Home</span>
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
                className={`transition-transform duration-300 `}
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>

            <div
              className={`submenu overflow-hidden pl-4 space-y-2 text-gray-300 transition-all duration-1000 ease-in-out ${
                activeMenu === "home"
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <a href="#" className="block text-base hover:text-white">
                Overview
              </a>
              <a href="#" className="block text-base hover:text-white">
                Features
              </a>
              <a href="#" className="block text-base hover:text-white">
                Integrations
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <div
              className="flex items-center text-gray-400 hover:text-white space-x-4 cursor-pointer"
              onClick={() => toggleMenu("pages")}
            >
              <span className="block text-xl font-bold">Pages</span>
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
                className={`transition-transform duration-300 `}
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>

            <div
              className={`submenu overflow-hidden pl-4 space-y-2 text-gray-300 transition-all duration-1000 ease-in-out ${
                activeMenu === "pages"
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <a href="#" className="block text-base hover:text-white">
                Overview
              </a>
              <a href="#" className="block text-base hover:text-white">
                Features
              </a>
              <a href="#" className="block text-base hover:text-white">
                Integrations
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <div
              className="flex items-center text-gray-400 hover:text-white space-x-4 cursor-pointer"
              onClick={() => toggleMenu("portfolio")}
            >
              <span className="block text-xl font-bold">portfolio</span>
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
                className={`transition-transform duration-300 `}
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>

            <div
              className={`submenu overflow-hidden pl-4 space-y-2 text-gray-300 transition-all duration-1000 ease-in-out ${
                activeMenu === "portfolio"
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <a href="#" className="block text-base hover:text-white">
                Overview
              </a>
              <a href="#" className="block text-base hover:text-white">
                Features
              </a>
              <a href="#" className="block text-base hover:text-white">
                Integrations
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <div
              className="flex items-center text-gray-400 hover:text-white space-x-4 cursor-pointer"
              onClick={() => toggleMenu("blog")}
            >
              <span className="block text-xl font-bold">Blog</span>
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
                className={`transition-transform duration-300 `}
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>

            <div
              className={`submenu overflow-hidden pl-4 space-y-2 text-gray-300 transition-all duration-1000 ease-in-out ${
                activeMenu === "blog"
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <a href="#" className="block text-base hover:text-white">
                Overview
              </a>
              <a href="#" className="block text-base hover:text-white">
                Features
              </a>
              <a href="#" className="block text-base hover:text-white">
                Integrations
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <div
              className="flex items-center text-gray-400 hover:text-white space-x-4 cursor-pointer"
              onClick={() => toggleMenu("Shop")}
            >
              <span className="block text-xl font-bold">Shop</span>
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
                className={`transition-transform duration-300 `}
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>

            <div
              className={`submenu overflow-hidden pl-4 space-y-2 text-gray-300 transition-all duration-1000 ease-in-out ${
                activeMenu === "Shop"
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <a href="#" className="block text-base hover:text-white">
                Overview
              </a>
              <a href="#" className="block text-base hover:text-white">
                Features
              </a>
              <a href="#" className="block text-base hover:text-white">
                Integrations
              </a>
            </div>
          </div>
        </nav>
        <hr className="border-gray-500 my-6" />
        {/* Social Media Icons */}
        <div className="flex items-center my-6 space-x-4">
          <button>
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
              className="lucide lucide-facebook-icon lucide-facebook"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </button>
          <button>
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
              className="lucide lucide-linkedin-icon lucide-linkedin"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 50 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
            </svg>
          </button>
          <button>
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
              className="lucide lucide-instagram-icon lucide-instagram"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* Tablet Menu */}
      <div
        id="tablet-menu"
        className={`fixed inset-0 z-40 text-white transition-all duration-700 ease-in-out ${
          isTabletMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-6"
        } hidden md:block xl:hidden`}
      >
        {/* Container for 50/50 split */}
        <div className="flex h-full w-full">
          {/* Left Side */}
          <div className="w-3/4 bg-[#2b2b2b] px-10 py-10 h-screen flex flex-col justify-between text-white">
            {/* Top: Logo */}
            <div>
              <h2 className="text-4xl font-extrabold">Zyntics</h2>
            </div>

            {/* Center: Navigation Links */}
            <nav className="space-y-4 text-lg mt-15">
              <div className="space-y-2">
                <div
                  className="flex items-center text-gray-400 hover:text-white space-x-4 cursor-pointer"
                  onClick={() => toggleMenu("home")}
                >
                  <span className="block text-3xl font-bold">Home</span>
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
                    className={`transition-transform duration-300 `}
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div>

                <div
                  className={`submenu overflow-hidden pl-4 space-y-2 text-gray-300 transition-all duration-1000 ease-in-out ${
                    activeMenu === "home"
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <a href="#" className="block text-base hover:text-white">
                    Overview
                  </a>
                  <a href="#" className="block text-base hover:text-white">
                    Features
                  </a>
                  <a href="#" className="block text-base hover:text-white">
                    Integrations
                  </a>
                </div>
              </div>
              <div className="space-y-2">
                <div
                  className="flex items-center text-gray-400 hover:text-white space-x-4 cursor-pointer"
                  onClick={() => toggleMenu("pages")}
                >
                  <span className="block text-3xl font-bold">Pages</span>
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
                    className={`transition-transform duration-300 `}
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div>

                <div
                  className={`submenu overflow-hidden pl-4 space-y-2 text-gray-300 transition-all duration-1000 ease-in-out ${
                    activeMenu === "pages"
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <a href="#" className="block text-base hover:text-white">
                    Overview
                  </a>
                  <a href="#" className="block text-base hover:text-white">
                    Features
                  </a>
                  <a href="#" className="block text-base hover:text-white">
                    Integrations
                  </a>
                </div>
              </div>
              <div className="space-y-2">
                <div
                  className="flex items-center text-gray-400 hover:text-white space-x-4 cursor-pointer"
                  onClick={() => toggleMenu("portfolio")}
                >
                  <span className="block text-3xl font-bold">portfolio</span>
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
                    className={`transition-transform duration-300 `}
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div>

                <div
                  className={`submenu overflow-hidden pl-4 space-y-2 text-gray-300 transition-all duration-1000 ease-in-out ${
                    activeMenu === "portfolio"
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <a href="#" className="block text-base hover:text-white">
                    Overview
                  </a>
                  <a href="#" className="block text-base hover:text-white">
                    Features
                  </a>
                  <a href="#" className="block text-base hover:text-white">
                    Integrations
                  </a>
                </div>
              </div>
              <div className="space-y-2">
                <div
                  className="flex items-center text-gray-400 hover:text-white space-x-4 cursor-pointer"
                  onClick={() => toggleMenu("blog")}
                >
                  <span className="block text-3xl font-bold">Blog</span>
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
                    className={`transition-transform duration-300 `}
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div>

                <div
                  className={`submenu overflow-hidden pl-4 space-y-2 text-gray-300 transition-all duration-1000 ease-in-out ${
                    activeMenu === "blog"
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <a href="#" className="block text-base hover:text-white">
                    Overview
                  </a>
                  <a href="#" className="block text-base hover:text-white">
                    Features
                  </a>
                  <a href="#" className="block text-base hover:text-white">
                    Integrations
                  </a>
                </div>
              </div>
              <div className="space-y-2">
                <div
                  className="flex items-center text-gray-400 hover:text-white space-x-4 cursor-pointer"
                  onClick={() => toggleMenu("Shop")}
                >
                  <span className="block text-3xl font-bold">Shop</span>
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
                    className={`transition-transform duration-300 `}
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div>

                <div
                  className={`submenu overflow-hidden pl-4 space-y-2 text-gray-300 transition-all duration-1000 ease-in-out ${
                    activeMenu === "Shop"
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <a href="#" className="block text-base hover:text-white">
                    Overview
                  </a>
                  <a href="#" className="block text-base hover:text-white">
                    Features
                  </a>
                  <a href="#" className="block text-base hover:text-white">
                    Integrations
                  </a>
                </div>
              </div>
            </nav>

            {/* Bottom: Social Media Icons */}
            <div>
              <hr className="border-gray-500 my-4" />
              <div className="flex items-center my-6 space-x-4">
                <button>
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
                    className="lucide lucide-facebook-icon lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </button>
                <button>
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
                    className="lucide lucide-linkedin-icon lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </button>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="24"
                    height="24"
                    viewBox="0 0 50 50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
                  </svg>
                </button>
                <button>
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
                    className="lucide lucide-instagram-icon lucide-instagram"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-1/2 bg-[#1a1a1a] h-screen px-10 py-10 flex flex-col justify-between">
            {/* Top: Close Button */}
            <div className="flex justify-end items-center gap-2">
              <span className="text-gray-200 text-xl">Close</span>
              <button
                id="tablet-menu-close"
                className="text-white focus:outline-none transition-transform duration-500 ease-in-out"
                onClick={closeTabletMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 hover:cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            {/* Center: Replace with your content */}
            <div className="flex flex-col items-start justify-center text-white space-y-6 gap-2 text-2xl">
              <div>
                <h2 className="text-xl font-semibold">Have a project?</h2>
                <p className="text-white text-3xl font-extrabold mt-2 underline">
                  info@gmail.com
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Want to work with us?</h2>
                <p className="text-white text-3xl font-extrabold mt-2 underline">
                  Send Brief
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">What can we offer?</h2>
                <p className="text-white text-3xl font-extrabold mt-2 underline">
                  Our Services
                </p>
              </div>
            </div>

            {/* Bottom: Socials or other info */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm"></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
