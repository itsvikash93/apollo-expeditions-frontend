import React from "react";
import { GrLocation } from "react-icons/gr";
import { BsCalendar2 } from "react-icons/bs";
import { Link } from "react-router-dom";

const Enquiry = ({ elem, onBookNow }) => {
  return (
    <div className="relative w-full sm:w-[48%] lg:w-[26%] bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-103">
      <div className="relative h-56 w-full">
        <img
          src={elem.imageUrl}
          alt={elem.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="py-4 px-5 w-full">
        <h4 className="text-xl custom-font1 text-Primary">{elem.title}</h4>
        <h4 className="text-lg text-Primary mb-2">{elem.description}</h4>
        <div className="flex items-center text-Fourth mb-2 gap-2">
          <GrLocation className="text-xl" />
          <h5 className="text-lg">{elem.location}</h5>
        </div>
        <div className="flex items-center text-Fourth mb-2 gap-2">
          <BsCalendar2 className="text-lg" />
          <h5 className="text-lg">{elem.date}</h5>
        </div>
        <div className="flex items-center text-Fourth mb-2 gap-2">
          <h3 className="font-semibold">INR.</h3>
          <h5 className="text-lg">{elem.price}/-</h5>
        </div>
        <div className="h-10"></div>
        <div className="flex justify-between absolute bottom-3 left-0 w-full px-4">
          <Link
            to={elem.pdfUrl}
            target="_blank"
            className="mt-3 inline-block px-3 sm:px-5 py-2 bg-black Third cursor-pointer font-bold rounded-lg shadow-md"
          >
            <span className="text-white">More Details</span>
          </Link>
          <button
            onClick={onBookNow}
            className="mt-3 px-3 sm:px-5 py-2 bg-orange-500 Third  cursor-pointer  font-bold rounded-lg shadow-md"
          >
            <span className="text-white">Book Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
