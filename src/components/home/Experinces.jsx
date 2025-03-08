import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";

const Experinces = ({ experiences }) => {
  const swiperRef = useRef(null);
  return (
    <section className="pt-5 bg_Third flex flex-col w-full sm:w-auto sm:items-center overflow-hidden">
      <div className="px-4 sm:py-5 lg:px-6">
        <div className="text-center mb-5 lg:mb-10">
          <h3 className="mt-2 text-4xl custom-font1 tracking-wide">
            Traveller's Experiences
          </h3>
        </div>

        <div className="w-full sm:w-[200vw] h-[30vh] sm:h-[25vh] lg:h-[50vh] flex flex-col items-center ">
          <Swiper
            key={experiences.length}
            className="mySwiper h-full w-full relative "
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            loop={true}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 250,
              modifier: 2.5,
              slideShadows: true,
              scale: 0.9,
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 5 },
            }}
            modules={[Autoplay, EffectCoverflow, Navigation]}
          >
            {experiences.map((experience, index) => (
              <SwiperSlide key={index} className="w-full sm:w-[50%] h-full">
                <img
                  src={experience.imageUrl}
                  alt={`Experience ${index + 1}`}
                  className="w-full h-full rounded-md object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="w-fit mt-3">
            <button
              className="bg-[#edead3] p-2 rounded-full mr-2"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <FaArrowLeft className="text-xl" />
            </button>
            <button
              className="bg-[#edead3] p-2 rounded-full"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <FaArrowRight className="text-xl" />
            </button>
          </div>
        </div>
      </div>
      <hr className="w-[90%] self-center mt-10 border-1 border-zinc-300" />
    </section>
  );
};

export default Experinces;
