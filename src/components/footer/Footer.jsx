import React from "react";
import { FaEnvelope, FaInstagram, FaPhone } from "react-icons/fa6";
import { FaFacebook, FaMapMarkerAlt } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="px-5 sm:px-6 lg:px-8 text-white">
        <div className="w-full flex flex-col sm:flex-row sm:justify-center flex-wrap gap-5 sm:gap-40">
          {/* Company Info */}
          <div className=" w-fit">
            <h3 className="text-3xl mb-2 sm:mb-4 custom-font1 tracking-wider text-orange-500">
              Apollo Expeditions
            </h3>
            <p className="text-xl">An Adventure Travel Company</p>
          </div>

          {/* Contact Info */}
          <div className=" w-fit">
            <h4 className="text-xl font-semibold mb-2 sm:mb-4 text-orange-500">
              Contact Us
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt />
                Jaipur, Rajasthan (IN) | Dehradun, Uttarakhand (IN)
              </li>
              <li className="flex items-center gap-2">
                <FaPhone /> +91 99830 65030
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope />
                <Link
                  className="hover:underline"
                  to="mailto:apolloexpeditions@outlook.in"
                >
                  apolloexpeditions@outlook.in
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className=" w-fit">
            <h4 className="text-xl font-semibold mb-2 sm:mb-4 text-orange-500">
              Follow Us
            </h4>
            <div className="flex space-x-4 ">
              <Link
                to="https://m.facebook.com/profile.php?id=61565169659851"
                target="_blank"
                className="hover:text-white"
              >
                <FaFacebook className="text-[22px]" />
              </Link>
              <Link
                to="https://www.instagram.com/jeevrajsharmaofficial"
                target="_blank"
                className="hover:text-white"
              >
                <FaInstagram className="text-[23px]" />
              </Link>
              <Link
                to="https://www.youtube.com/@BluePlanetDocumentaries"
                target="_blank"
                className="hover:text-white"
              >
                <FaYoutube className="text-[24px]" />
              </Link>
              <Link
                to="https://api.whatsapp.com/send/?phone=%2B919983065030&text&type=phone_number&app_absent=0"
                target="_blank"
                className="hover:text-white"
              >
                <FaWhatsapp className="text-[24px]" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-7 text-center Third">
          <p>&copy; 2025 Apollo Expeditions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
