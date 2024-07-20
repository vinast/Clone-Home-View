import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaMapMarkerAlt } from "react-icons/fa";

const cities = [
  { name: "Paris", country: "Prancis", image: "menaraef.png" },
  { name: "Bern", country: "Swiss", image: "bern.png" },
  { name: "Amsterdam", country: "Belanda", image: "amsterdam.png" },
  { name: "London", country: "Inggris", image: "eropa.png" },
  { name: "Roma", country: "Italia", image: "roma.png" },
  { name: "Tokyo", country: "Japan", image: "munchen.webp" },
  // Tambahkan kota lain jika diperlukan
];

const PopularCities = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-6 ml-5">
        Kota <span className="text-red-500">Populer</span>
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {cities.map((city, index) => (
          <SwiperSlide key={index}>
            <div className="relative rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 cursor-pointer m-5">
              <img src={city.image} alt={city.name} className="w-full h-80 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 ">
                <h3 className="text-white text-xl font-semibold">{city.name}</h3>
                <p className="text-white flex items-center">{city.country}</p>
              </div>
            </div>
            <br />
            <br />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularCities;
