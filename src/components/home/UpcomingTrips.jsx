import React, { useState } from "react";
import Enquiry from "../Enquiry";

const UpcomingTrips = ({ upcomingTrips, setSelectedTrip }) => {
  return (
    <div className="w-full bg-Secondary flex flex-col">
      <div className="px-4 sm:py-5 sm:px-6 lg:px-8 w-full">
        <div className="text-center my-5 sm:mb-8 lg:mb-10">
          <h3 className="mt-2 sm:mt-0 text-4xl custom-font1 tracking-wide ">
            Upcoming Trips & Expeditions
          </h3>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center flex-shrink-0 gap-8 w-full">
          {upcomingTrips.map((trip) => (
            <Enquiry
              key={trip._id}
              elem={trip}
              onBookNow={() => setSelectedTrip(trip)}
            />
          ))}
        </div>
      </div>
      <hr className="w-[90%] self-center mt-10 border-1 border-zinc-300" />
    </div>
  );
};

export default UpcomingTrips;
