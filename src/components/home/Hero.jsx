import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Hero1 from "../../assets/Hero 1.avif";
import Hero2 from "../../assets/Hero 2.avif";
import Hero3 from "../../assets/Hero 3.avif";
import Hero4 from "../../assets/Hero 4.avif";
import Hero5 from "../../assets/Hero 5.avif";
import Hero6 from "../../assets/Hero 6.avif";
import Hero7 from "../../assets/Hero 7.avif";
import Hero8 from "../../assets/Hero 8.avif";

const Hero = () => {
  const images = [
    {
      src: Hero1,
      text: "OFF ROAD ADVENTURE & TRIPS",
    },
    {
      src: Hero2,
      text: "EPIC CITY TOURS",
    },
    {
      src: Hero3,
      text: "ANCIENT INDIA EXPLORATIONS",
    },
    {
      src: Hero4,
      text: "THRILLING HORSE SAFARI",
    },
    {
      src: Hero5,
      text: "TREKKING HIKING & CAMPING IN THE HIMALAYAS",
    },
    {
      src: Hero6,
      text: "EXPLORE INDIA'S WILDLIFE",
    },
    {
      src: Hero7,
      text: "SPIRITUAL JOURNEY TO INDIA",
    },
    {
      src: Hero8,
      text: "ADVENTURE ACTIVITIES",
    },
  ];

  return (
    <>
      <div className="relative h-[50vh] sm:h-[85vh] w-full overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="w-full h-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="w-full h-full relative">
              <img
                src={image.src}
                alt={`Hero Image ${index + 1}`}
                className="w-full h-full object-cover blur-[0px]"
              />
              <div className="absolute top-1/2 left-1/2 flex justify-center items-center transform -translate-x-1/2 -translate-y-1/2 text-[#edead3] text-center">
                <h2 className="w-fit text-4xl sm:text-7xl custom-font tracking-wider text-center">
                  {image.text}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
