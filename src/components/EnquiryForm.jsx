import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import axios from "../utils/axios";
import { motion } from "framer-motion";

const EnquiryForm = ({ type, element, onClose }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();
  const formRef = useRef(null);

  const onSubmit = async (data) => {
    try {
      await axios
        .post(`/enquiries/${type}`, {
          ...data,
          title: element.title,
          location: element.location,
          date: element.date,
        })
        .then((res) => {
          if (res.status === 200) {
            onClose();
            reset();
          }
        });
    } catch (error) {
      console.error("Error submitting enquiry:", error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-white/40 backdrop-blur-sm flex justify-center items-center z-50">
      <motion.div
        ref={formRef}
        className="bg-white p-6 rounded-lg shadow-lg w-96 relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-2xl custom-font1 tracking-wider text-center font-bold mb-4 text-Primary">
          Enquiry Form
        </h2>
        {element && (
          <>
            <p className="mb-2">
              <strong>{type.charAt(0).toUpperCase() + type.slice(1)}:</strong>{" "}
              {element.title}
            </p>
            <p className="mb-2">
              <strong>Location:</strong> {element.location}
            </p>
            <p className="mb-2">
              <strong>Date:</strong> {element.date}
            </p>
          </>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Your Name"
            className="w-full p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Your Email"
            className="w-full p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <input
            type="text"
            {...register("phone", { required: true })}
            placeholder="Phone Number"
            className="w-full p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <textarea
            {...register("message")}
            placeholder="Your Message"
            className="w-full p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded mt-2 hover:bg-green-700 transition"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Enquiry"}
          </button>
        </form>

        <button
          onClick={onClose}
          className="absolute cursor-pointer top-2 right-4 text-red-600 hover:text-red-800 transition"
        >
          ✖
        </button>
      </motion.div>
    </div>
  );
};

export default EnquiryForm;
