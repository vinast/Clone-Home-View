import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transition, setTransition] = useState(true);
  const slides = [
    {
      image: "../../public/1.jpg",
      title: "EKSPOR DAN NIKMATI MUDAH LIBURAN KE LUAR NEGERI DENGAN",
      subtitle: "Aplikasi GetGoing",
      description: "DAPAT DIDOWNLOAD DI:",
      appStoreImage: "../../public/AppStore.svg",
      googlePlayImage: "../../public/GooglePlay.svg",
    },
    {
      image: "../../public/2.JPG",
      title: "APA YANG GETGOING PUNYA?",
      features: [
        {
          icon: "../../public/m.png", 
          title: "Trip Planner",
          description: "Susun Rute Perjalananmu Sendiri",
        },
        {
          icon: "../../public/u.png", 
          title: "Guide",
          description: "Tour Guide berbahasa Indonesia",
        },
        {
          icon: "../../public/p.png", 
          title: "Info",
          description: "Info penting di luar negeri",
        },
      ],
    },
  ];

  const totalSlides = slides.length;

  const nextSlide = () => {
    setTransition(true);
    setCurrentSlide((prev) => (prev + 1) % (totalSlides + 1));
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setTransition(false);
      setCurrentSlide(totalSlides);
      setTimeout(() => {
        setTransition(true);
        setCurrentSlide(totalSlides - 1);
      }, 50);
    } else {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (currentSlide === totalSlides) {
      setTimeout(() => {
        setTransition(false);
        setCurrentSlide(0);
      }, 500);
    }
  }, [currentSlide]);

  const renderSlides = () => {
    const slidesToRender = [...slides, slides[0]];
    return slidesToRender.map((slide, index) => (
      <div key={index} className="w-full flex-shrink-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[400px] bg-white overflow-hidden">
          <div className="flex items-center justify-center ml-8">
            <img src={slide.image} alt="Carousel" className="w-full h-80 object-cover rounded-lg" style={{ aspectRatio: "12 / 9" }} />
          </div>
          <div className={`flex flex-col justify-center items-${index === 0 ? "center" : "start"} p-4 md:p-8 text-center md:text-left`}>
            <h2 className="text-base font-light text-gray-600 mb-2 tracking-wide">{slide.title}</h2>
            {slide.features ? (
              <div className="space-y-6">
                {slide.features.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <img src={feature.icon} alt={feature.title} className="h-12 w-12" />
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold mb-4">{slide.subtitle}</h3>
                <p className="text-sm text-gray-600 mb-4">{slide.description}</p>
                <div className="flex justify-center space-x-4">
                  <img src={slide.appStoreImage} alt="App Store" className="h-12" />
                  <img src={slide.googlePlayImage} alt="Google Play" className="h-12" />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      <div className="h-[400px] overflow-hidden">
        <div className={`flex ${transition ? "transition-transform ease-out duration-500" : ""}`} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {renderSlides()}
        </div>
      </div>
      <button onClick={prevSlide} className="absolute top-1/2 left-4 md:left-[-30px] transform -translate-y-1/2 transition-all duration-800">
        <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-4 md:right-[-30px] transform -translate-y-1/2 transition-all duration-800">
        <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
