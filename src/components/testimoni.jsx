import React, { useState } from "react";

const Testi = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      image: "../../public/nadia.jpeg",
      alt: "Herlika & Johan",
      title: "Keluar negeri pertama kali tanpa rasa khawatir",
      description:
        "Gerbang pikir terbuka keluar negeri tanpa rasa khawatir dan benar-benar terasa kayak duma punya kami berdua. Apapun ada aplikasinya juga yang bisa dipakai untuk mempelajari kota dengan informasinya yang cukup lengkap. Bintang 5 pokoknya",
      name: "Herlika & Johan",
      role: "ENTREPRENEUR",
    },
    {
      image: "../../public/nili.jpg",
      alt: "City view",
      title: "Pengalaman tak terlupakan di Eropa",
      description: "Perjalanan yang sangat menyenangkan dan penuh dengan pengalaman baru. Aplikasi ini sangat membantu dalam menemukan tempat-tempat menarik dan informasi yang dibutuhkan. Sangat direkomendasikan!",
      name: "Nadia",
      role: "ENTREPRENEUR",
    },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="w-full mx-auto py-16 px-4 md:px-0">
      <h2 className="text-4xl font-bold mb-2 text-center">
        Kata <span className="text-red-600">Mereka</span>
      </h2>
      <p className="text-gray-400 mb-8 text-center">
        Cerita dari mereka yang telah menjelajahi Eropa bersama kami
      </p>

      <div className="relative flex flex-col items-center md:flex-row mb-8">
        <div className="relative w-full md:w-1/2 pr-0 mb-8 md:mb-0 flex flex-col items-center md:items-start">
          <img
            src="../../public/petikdua.png"
            alt="petikdua"
            className="absolute top-0 left-0 w-16 h-16 md:w-32 md:h-32 lg:w-64 lg:h-64"
          />
          <div className="relative z-10 pl-4 md:pl-16 pt-8 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">
              {testimonials[activeIndex].title}
            </h3>
            <p className="text-gray-600 mb-4">
              {testimonials[activeIndex].description}
            </p>
            <div className="flex justify-center md:justify-start items-center">
              <button
                onClick={handlePrev}
                className="mr-2 text-gray-400 hover:text-gray-600"
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
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="text-gray-400 hover:text-gray-600"
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
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 flex justify-center items-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute transition-opacity duration-500 ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              } w-full h-auto flex justify-center`}
            >
              <div className="relative w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3 transform translate-x-0">
                <img
                  src={testimonial.image}
                  alt={testimonial.alt}
                  className="w-full h-full object-cover rounded-lg hover:shadow-lg transition-shadow duration-300"
                />
                <div className="bg-white p-4 rounded-b-lg text-center mt-2">
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div
                className={`absolute transition-opacity duration-500 ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                } w-full h-auto flex justify-center`}
              >
                <div className="relative w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3 transform translate-x-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.alt}
                    className="w-full h-full object-cover rounded-lg hover:shadow-lg transition-shadow duration-300"
                  />
                  <div className="bg-white p-4 rounded-b-lg text-center mt-2">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testi;
