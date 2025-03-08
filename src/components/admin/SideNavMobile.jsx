import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

import { motion, AnimatePresence } from "framer-motion";

const SideNavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#A3D1C6] text-[#000] block sm:hidden relative w-full">
      <div className="flex justify-between items-center z-[999] px-4 py-3 ">
        <h1 className="text-3xl font-bold">Admin</h1>
        <button onClick={toggleMenu} className="text-2xl">
          {isOpen ? (
            <MdClose className="text-3xl" />
          ) : (
            <GiHamburgerMenu className="text-2xl" />
          )}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3 }}
            className="text-xl px-4 py-5 absolute z-[99] left-0 w-full bg-[#A3D1C6]"
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default SideNavMobile;
