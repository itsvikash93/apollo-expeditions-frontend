import React from "react";

const AboutUs = () => {
  return (
    <section className="pt-10 bg_Third flex flex-col w-full">
      <div className=" px-4 lg:px-6 ">
        <div className="w-full text-center flex flex-col items-center justify-center">
          <h2 className="text-4xl custom-font1 tracking-wide mb-4">
            About Us
          </h2>

          <p className="text-sm text-center lg:text-xl w-full sm:w-[85%] leading-relaxed text-gray-700">
            Apollo Expeditions is an adventure travel company based in India. We
            craft unforgettable travel experiences that blend comfort with
            thrill and take you beyond the ordinary. With years of experience,
            dedicated team of adventure travel experts & local guides, we design
            unique adventure trips & expeditions that push boundaries while
            ensuring comfort & safety. From adrenaline pumping activities like
            trekking, rock climbing, river rafting, paragliding and zip lining
            to more serene experiences like hiking, wildlife safaris, cultural
            explorations, spiritual journeys and city tours we offer something
            for every kind of traveller. We prioritize responsible travel
            practices ensuring that each journey leaves a positive impact on
            both the environment and the communities we visit.
          </p>
        </div>
      </div>
      <hr className="w-[90%] self-center mt-10 border-1 border-zinc-300" />
    </section>
  );
};

export default AboutUs;
