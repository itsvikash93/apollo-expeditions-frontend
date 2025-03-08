import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import qr from "../../assets/QR.png";
import Footer from "../footer/Footer";
import Nav from "../navbar/Nav";
import { useForm } from "react-hook-form";
import axios from "../../utils/axios";
import { Link } from "react-router-dom";
const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const [success, setSuccess] = useState(false);
  const onSubmit = (data) => {
    axios.post("/enquiries/contact", data);
    reset();
    setSuccess(true);
  };
  return (
    <div className="w-full flex flex-col">
      <Nav className="absolute" />

      <div className="w-full h-full min-h-96 flex flex-col px-4 pt-18 sm:pt-0 py-8 sm:px-6 sm:mt-24 ">
        {/* Header */}
        <h1 className=" text-center text-4xl sm:text-5xl tracking-wide custom-font1">
          Contact Us
        </h1>

        {/* Main Container */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-40 my-5 mb-10 sm:mt-10 justify-center">
          {/* Left Section: Contact Details */}
          <div className="w-full lg:w-[30%] bg-[#edead3] rounded-xl text-First shadow-xl p-4 sm:p-6 lg:p-10 ">
            <h2 className="text-3xl font-semibold text-gray-500">
              Get in Touch
            </h2>

            <div className="mt-4 flex flex-col gap-4 font-semibold">
              <p className="text-2xl">Jeevraj Sharma</p>
              <p className="text-md "> Founder & Manager</p>

              <div className="flex items-center gap-2">
                <FaEnvelope />
                <Link
                  to="mailto:apolloexpeditions@outlook.in"
                  className="hover:underline First text-gray-600"
                >
                  apolloexpeditions@outlook.in
                </Link>
              </div>

              <div className="flex items-center gap-2">
                <FaPhone />
                <Link
                  to="tel:12346552"
                  className="hover:underline First text-gray-600"
                >
                  +91 99830 65030
                </Link>
              </div>

              <div className="flex items-center gap-2">
                <FaMapMarkerAlt />
                <p className="text-gray-600">
                  Jaipur, Rajasthan (IN) | Dehradun, Uttarakhand (IN)
                </p>
              </div>

              <div className="mt-4  flex items-center">
                <img
                  src={qr}
                  alt="QR Code"
                  className="w-24 h-24 rounded-md shadow-md"
                />
                <p className=" ml-2 text-sm text-gray-500">
                  Scan this QR code to Whatsapp us
                </p>
              </div>
            </div>
          </div>

          {/* Right Section: Contact Form */}
          <div className="w-full lg:w-[30%] bg-[#edead3] shadow-xl px-2 p-4 sm:p-6 lg:p-10 rounded-xl">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  className="p-2 mt-1 block w-full rounded-md border shadow-sm  sm:text-sm text-First bg-transparent"
                  placeholder="Your name"
                  {...register("name")}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium">
                  Contact Number
                </label>
                <input
                  type="text"
                  className="p-2 mt-1 block w-full rounded-md border shadow-sm  sm:text-sm text-First bg-transparent"
                  placeholder="Your contact number"
                  {...register("phone")}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  className="p-2 mt-1 block w-full rounded-md border shadow-sm  sm:text-sm text-First bg-transparent"
                  placeholder="Your email"
                  {...register("email")}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  rows={3}
                  className="p-2 mt-1 block w-full rounded-md border border-First shadow-sm focus:ring-Second focus:border-Second sm:text-sm text-First bg-transparent"
                  placeholder="Your message"
                  {...register("message")}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex justify-center rounded-md font-semibold text-white bg-black py-2 px-4 text-sm  transition"
              >
                Submit
              </button>
              {success && (
                <p className="text-green-500 text-sm">
                  Message sent successfully
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="h-80 lg:mx-20 lg:my-10 rounded-xl overflow-hidden flex justify-center relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.75443551115!2d77.93473335243701!3d30.325402625777514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1741098124598!5m2!1sen!2sin"
            className="w-full h-full"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
