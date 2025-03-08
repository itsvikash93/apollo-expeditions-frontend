import React from "react";

const Associations = ({ partners }) => {
  return (
    <section className="py-5 pb-10 sm:py-10 bg_Third">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-5 sm:mb-10">
          <h3 className="mt-2 text-4xl tracking-wide custom-font1 ">
            Our Associations & Partnerships
          </h3>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-5 lg:gap-12 ">
          {partners.map((partner) => (
            <div
              key={partner._id}
              className="w-full sm:w-[48%] lg:w-[26%] flex flex-col items-center bg-white rounded-lg p-5 px-8 shadow-md transition-transform duration-300 hover:scale-103"
            >
              <img
                src={partner.imageUrl}
                alt={partner.name}
                className="h-30 w-30 mb-6 object-cover rounded-full"
              />
              <h4 className="text-xl custom-font1 ">{partner.name}</h4>
              <p className="text-gray-600 text-center">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Associations;
