import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-lg" : ""}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className={`flex items-center justify-between ${isScrolled ? "bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-md rounded-full px-8 py-4" : ""} w-full`}>
          <div className="flex items-center space-x-6">
            <img
              src="../../public/logo1.png"
              alt="GetGoing Logo"
              className={`h-10 transition-transform duration-1000 ${isScrolled ? "rotate" : ""}`}
              style={{ transform: isScrolled ? "rotate(360deg)" : "rotate(0deg)" }}
            />
            <div className="relative hidden md:flex items-center flex-grow w-full">
              <input
                type="text"
                placeholder="Cari negara, kota atau guide"
                className={`pl-5 pr-16 py-2 rounded-full border ${isScrolled ? "border-gray-300" : "border-transparent bg-white bg-opacity-20"} focus:outline-none w-full shadow-red-glow`}
                style={{ width: "500px" }}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">&rarr;</span>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-red-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <nav className={`md:flex ${isOpen ? "block" : "hidden"} md:block`}>
            <ul className="flex flex-col md:flex-row md:space-x-6">
              <li>
                <a href="#" className="text-red-600 font-bold">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#" className="text-red-600">
                  Servis Kami
                </a>
              </li>
              <li>
                <a href="#" className="text-red-600">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-dark-500 font-semibold">
                  L O G I N
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg shadow-md rounded-b-lg px-4 py-4">
          <div className="flex items-center space-x-6 mb-4">
            <input
              type="text"
              placeholder="Cari negara, kota atau guide"
              className="pl-5 pr-16 py-2 rounded-full border border-gray-300 focus:outline-none w-full shadow-red-glow"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">&rarr;</span>
            </div>
          </div>
          <ul className="flex flex-col space-y-4">
            <li>
              <a href="#" className="text-red-600 font-bold">
                Beranda
              </a>
            </li>
            <li>
              <a href="#" className="text-red-600">
                Servis Kami
              </a>
            </li>
            <li>
              <a href="#" className="text-red-600">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-dark-500 font-semibold">
                L O G I N
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
