import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

const dropdownVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [countries, setCountries] = useState([]);
  const [offers, setOffers] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [countriesRes, offersRes] = await Promise.all([
          axios.get(`/countries`),
          axios.get(`/offers`),
        ]);
        setCountries(countriesRes.data);
        setOffers(offersRes.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setCountries([]);
        setOffers([]);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleNavigation = (path) => {
    setActiveDropdown(null);
    setTimeout(() => {
      navigate(path, { replace: true });
    }, 100);
  };

  return (
    <nav
      className={`self-center bg-[#edead3] shadow-lg ${
        isMenuOpen ? "rounded-t-lg" : "rounded-lg"
      } top-2 sm:rounded-full absolute w-[95%] z-50`}
    >
      <div className="max-w-10xl mx-auto px-0 sm:px-6">
        <div className="flex justify-between px-4 items-center h-12 relative w-full">
          <Link to="/" onClick={() => handleNavigation("/")}>
            <img
              src="/apollo-logo.jpg"
              alt="Apollo Expeditions Logo"
              className="h-8 w-auto object-contain rounded"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden rounded-md text-black"
          >
            {isMenuOpen ? (
              <MdClose className="text-2xl" />
            ) : (
              <GiHamburgerMenu className="text-xl" />
            )}
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={dropdownVariants}
                className="absolute bg-[#edead3] shadow-md rounded-b-lg top-12 w-full left-0 z-40"
              >
                <Link
                  to="/"
                  className="block px-4 py-2 "
                  onClick={() => handleNavigation("/")}
                >
                  Home
                </Link>
                <div className="relative">
                  <div
                    className="flex items-center justify-between px-4 py-2  cursor-pointer"
                    onClick={() => {
                      if (activeDropdown === "offers") {
                        setActiveDropdown(null);
                      } else {
                        setActiveDropdown("offers");
                      }
                    }}
                  >
                    <h3>Packages & Offers</h3>
                    {activeDropdown === "offers" ? (
                      <MdKeyboardArrowUp className="text-xl mt-1" />
                    ) : (
                      <MdKeyboardArrowDown className="text-xl mt-1" />
                    )}
                  </div>
                  <AnimatePresence>
                    {activeDropdown === "offers" && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                        className="bg-[#E0DDC7] rounded-md mt-1 w-full z-40"
                      >
                        {/* Assuming offers is an array of offer objects */}
                        {offers.length > 0 ? (
                          offers.map(
                            (offer) =>
                              offer.packages.length > 0 && (
                                <Link
                                  key={offer._id}
                                  to={`/offers/${offer.slug}`}
                                  className="block px-4 py-2 "
                                  onClick={() =>
                                    handleNavigation(`/offers/${offer.slug}`)
                                  }
                                >
                                  {offer.name}
                                </Link>
                              )
                          )
                        ) : (
                          <p className="px-4 py-2 ">
                            No Offers Available
                          </p>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="relative">
                  <div
                    className="flex items-center justify-between px-4 py-2  cursor-pointer"
                    onClick={() => {
                      if (activeDropdown === "countries") {
                        setActiveDropdown(null);
                      } else {
                        setActiveDropdown("countries");
                      }
                    }}
                  >
                    <h3>Travel Guide</h3>
                    {activeDropdown === "countries" ? (
                      <MdKeyboardArrowUp className="text-xl mt-1" />
                    ) : (
                      <MdKeyboardArrowDown className="text-xl mt-1" />
                    )}
                  </div>
                  <AnimatePresence>
                    {activeDropdown === "countries" && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                        className="bg-[#E0DDC7] rounded-md mt-1 w-full z-40"
                      >
                        {/* Assuming countries is an array of country objects */}
                        {countries.length > 0 ? (
                          countries.map(
                            (country) =>
                              country.popularPlaces.length > 0 && (
                                <Link
                                  key={country._id}
                                  to={`/encyclopedia/${country.slug}`}
                                  className="block px-4 py-2 "
                                  onClick={() =>
                                    handleNavigation(
                                      `/encyclopedia/${country.slug}`
                                    )
                                  }
                                >
                                  {country.name}
                                </Link>
                              )
                          )
                        ) : (
                          <p className="px-4 py-2 ">
                            No Countries
                          </p>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  to="/vlogs"
                  className="block px-4 py-2 "
                  onClick={() => handleNavigation("/vlogs")}
                >
                  Our Vlogs
                </Link>
                <Link
                  to="/contact"
                  className="block px-4 py-2 hover:text-gray-600"
                  onClick={() => handleNavigation("/contact")}
                >
                  Contact Us
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop Menu */}
          <div className="hidden lg:flex text-md font-semibold justify-between gap-8 px-6 h-full pt-3">
            <Link to="/" className="">
              Home
            </Link>

            {/* Offers Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("offers")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <span className="flex items-center cursor-pointer ">
                Packages & Offers{" "}
                <MdKeyboardArrowDown className="text-xl mt-1" />
              </span>
              <AnimatePresence>
                {activeDropdown === "offers" && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={dropdownVariants}
                    className="absolute bg_Third shadow-md mt-3 -translate-x-15 rounded-b-md left-0 w-64 overflow-hidden"
                  >
                    {offers.length > 0 ? (
                      offers.map(
                        (offer) =>
                          offer.packages.length > 0 && (
                            <Link
                              key={offer._id}
                              to={`/offers/${offer.slug}`}
                              className="block px-2 py-2 text-center "
                              onClick={() =>
                                handleNavigation(`/offers/${offer.slug}`)
                              }
                            >
                              {offer.name}
                            </Link>
                          )
                      )
                    ) : (
                      <p className="px-4 py-2 ">No Offers</p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/vlogs" className="">
              Our Vlogs
            </Link>

            {/* Travel Guide Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("countries")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <span className="flex items-center cursor-pointer ">
                Travel Guide <MdKeyboardArrowDown className="text-xl mt-1" />
              </span>
              <AnimatePresence>
                {activeDropdown === "countries" && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={dropdownVariants}
                    className="absolute bg_Third shadow-md mt-3 -translate-x-8 rounded-b-md w-44 left-0 overflow-hidden"
                  >
                    {countries.length > 0 ? (
                      countries.map(
                        (country) =>
                          country.popularPlaces.length > 0 && (
                            <Link
                              key={country.slug}
                              to={`/encyclopedia/${country.slug}`}
                              className="block px-4 py-2 text-center "
                              onClick={() =>
                                handleNavigation(
                                  `/encyclopedia/${country.slug}`
                                )
                              }
                            >
                              {country.name}
                            </Link>
                          )
                      )
                    ) : (
                      <p className="px-4 py-2 ">
                        No Countries
                      </p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/contact" className="hover:text-gray-600">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
