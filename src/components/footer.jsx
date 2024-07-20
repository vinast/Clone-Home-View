import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-red-700 text-white">
      <div className="container mx-auto px-4 py-10 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20">
          {/* Kolom Informasi Kontak */}
          <div>
            <h3 className="font-bold text-lg mb-4">INFORMASI KONTAK</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  BSD Green Office Park I, 6th Floor, BSD City, <br /> Tangerang, Banten 15345
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                24/7 - Online
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                lets@getgoing.co.id
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                @getgoing.co.id
              </li>
            </ul>
            <div className="mt-4 flex space-x-2">
              <a href="#" className="text-white hover:text-gray-200">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-gray-200">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Kolom Download */}
          <div className="flex flex-col md:flex-row items-start">
            <a href="#" className="inline-block mb-5 md:mb-0 md:mr-5 p-5 w-full md:w-auto">
              <img
                src="../../public/MockupApp.png"
                alt="Mockup App"
                className="h-64 w-full md:w-auto object-cover"
              />
            </a>
            <div className="ml-0 md:ml-12 mt-4 md:mt-0">
              <h3 className="font-bold text-lg mb-4 whitespace-nowrap">DOWNLOAD DI</h3>
              <div className="flex flex-col">
                <a href="#" className="inline-block mb-4">
                  <img
                    src="../../public/AppStore.svg"
                    alt="Get it on AppStore"
                    className="h-12"
                  />
                </a>
                <a href="#" className="inline-block">
                  <img
                    src="../../public/GooglePlay.svg"
                    alt="Get it on Google Play"
                    className="h-12"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Kolom Lainnya */}
          <div className="ml-0 md:ml-12 pr-4 md:pr-12">
            <h3 className="font-bold text-lg mb-4">LAINNYA</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Syarat dan Ketentuan
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Dokumentasi
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Penghargaan
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Login
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  F.A.Q
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-black flex flex-col md:flex-row justify-between items-center py-5 px-10">
        <p className="text-sm text-white text-center md:text-left">
          © 2024 - PT. Gue Eksplorasi Terus. All rights reserved.
        </p>
        <div className="flex mt-4 md:mt-0">
          <a href="#" className="text-red-500 hover:text-red-300 mx-2">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-red-500 hover:text-red-300 mx-2">
            <FaFacebook size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
