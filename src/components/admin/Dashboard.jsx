import React from "react";
import { Link } from "react-router-dom";
import SideNav from "./SideNav";
import SideNavMobile from "./SideNavMobile";
const Dashboard = () => {
  return (
    <div
      id="main"
      className="bg-[#F5F5F5] w-full h-screen flex flex-col sm:flex-row"
    >
      <SideNav />
      <SideNavMobile />

      <div className="container mx-auto sm:pt-10 px-4 py-4 w-full sm:w-[80%] h-full">
        <h2 className="text-3xl font-semibold text-center ">
          Welcome to the Admin Dashboard
        </h2>

        <div className="flex flex-wrap flex-col sm:flex-row flex-shrink-0 sm:gap-6 gap-4 py-5 justify-center items-center w-full">
          <Link
            to="/admin/enquiries"
            className="text-2xl font-semibold bg-white shadow-lg rounded-lg p-6 text-center w-full sm:w-[25%] "
          >
            Manage Enquiries
          </Link>

          <Link
            to="/admin/upcoming-trips"
            className="text-2xl font-semibold bg-white shadow-lg rounded-lg p-6 text-center w-full sm:w-[25%] "
          >
            Upcoming Trips
          </Link>

          <Link
            to="/admin/offers"
            className="text-2xl font-semibold bg-white shadow-lg rounded-lg p-6 text-center w-full sm:w-[25%] "
          >
            Offers & Packages
          </Link>

          <Link
            to="/admin/packages"
            className="text-2xl font-semibold bg-white shadow-lg rounded-lg p-6 text-center w-full sm:w-[25%] "
          >
            Packages
          </Link>
          
          <Link
            to="/admin/countries"
            className="text-2xl font-semibold bg-white shadow-lg rounded-lg p-6 text-center w-full sm:w-[25%] "
          >
            Countries
          </Link>

          <Link
            to="/admin/popular-places"
            className="text-2xl font-semibold bg-white shadow-lg rounded-lg p-6 text-center w-full sm:w-[25%] "
          >
            Popular Places
          </Link>

          <Link
            to="/admin/experiences"
            className="text-2xl font-semibold bg-white shadow-lg rounded-lg p-6 text-center w-full sm:w-[25%] "
          >
            Experiences
          </Link>

          <Link
            to="/admin/partners"
            className="text-2xl font-semibold bg-white shadow-lg rounded-lg p-6 text-center w-full sm:w-[25%] "
          >
            Partners
          </Link>

          <Link
            to="/admin/vlogs"
            className="text-2xl font-semibold bg-white shadow-lg rounded-lg p-6 text-center w-full sm:w-[25%] "
          >
            Vlogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
