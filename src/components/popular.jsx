import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const popularItems = [
  { name: "Naurah", location: "Amsterdam, Belanda", image: "/Naurah.jpg" },
  { name: "Agus", location: "Roma, Italia", image: "/Agus.jpg" },
  { name: "Nadhira", location: "Paris, Prancis", image: "/edo.jpg" },
  { name: "Nuel", location: "Paris, Prancis", image: "/nuel.jpeg" },
  { name: "Oben", location: "Manchester, Inggris", image: "/nadia.jpeg" },
  { name: "Oben", location: "Roma, Inggris", image: "/nili.jpg" },
];

const Popular = () => {
  return (
    <div className="container mx-auto px-2 py-4">
      <h2 className="text-4xl font-bold mb-4 ml-5">
        Sedang <span className="text-red-500">Populer</span>
      </h2>
      <div className="w-full">
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
          {popularItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 cursor-pointer m-5">
                <img src={item.image} alt={item.name} className="w-full h-60 object-cover" />
              </div>
              <h3 className="mx-5 text-xl font-semibold ">{item.name}</h3>
              <p className="mx-5 text-sm text-gray-600 ">{item.location}</p>
            </SwiperSlide>
          ))}
          <br />
          <br />
        </Swiper>
      </div>
    </div>
  );
};

export default Popular;
