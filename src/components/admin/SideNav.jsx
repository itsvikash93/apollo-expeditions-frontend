import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SideNav = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };
  return (
    <nav className="bg-[#A3D1C6] text-[#00000] px-4 pt-10 hidden sm:block sm:w-[20%] h-full">
      <h1 className=" text-3xl font-bold">Admin Dashboard</h1>
      <div className="text-xl mt-5">
        <Link
          to="/admin/dashboard"
          className=" block my-2 px-2 py-2 rounded bg-[#6FB6A5] w-full "
        >
          Dashboard
        </Link>

        <Link
          to="/admin/enquiries"
          className=" block my-2 px-2 py-2 rounded bg-[#6FB6A5] w-full "
        >
          Manage Enquiries
        </Link>

        <Link
          to="/admin/upcoming-trips"
          className=" block my-2 px-2 py-2 rounded bg-[#6FB6A5] w-full "
        >
          Upcoming Trips
        </Link>

        <Link
          to="/admin/offers"
          className=" block my-2 px-2 py-2 rounded bg-[#6FB6A5] w-full "
        >
          Offers & Packages
        </Link>

        <Link
          to="/admin/packages"
          className=" block my-2 px-2 py-2 rounded bg-[#6FB6A5] w-full "
        >
          Packages
        </Link>

        <Link
          to="/admin/countries"
          className=" block my-2 px-2 py-2 rounded bg-[#6FB6A5] w-full "
        >
          Countries
        </Link>

        <Link
          to="/admin/popular-places"
          className=" block my-2 px-2 py-2 rounded bg-[#6FB6A5] w-full "
        >
          Popular Places
        </Link>

        <Link
          to="/admin/experiences"
          className=" block my-2 px-2 py-2 rounded bg-[#6FB6A5] w-full "
        >
          Traveller Experiences
        </Link>

        <Link
          to="/admin/partners"
          className=" block my-2 px-2 py-2 rounded bg-[#6FB6A5] w-full "
        >
          Partners
        </Link>

        <Link
          to="/admin/vlogs"
          className=" block my-2 px-2 py-2 rounded bg-[#6FB6A5] w-full "
        >
          Vlogs
        </Link>

        <Link
          to="/admin/logout"
          onClick={handleLogout}
          className=" block my-2 px-2 py-2 rounded bg-[#6FB6A5] w-full "
        >
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default SideNav;
