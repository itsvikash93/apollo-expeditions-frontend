import React, { useEffect, useState } from "react";
import SideNav from "./SideNav";
import axios from "../../utils/axios";
import { useForm } from "react-hook-form";
import SideNavMobile from "./SideNavMobile";
import { useNavigate } from "react-router-dom";
const AddVlog = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleFormSubmit = (data) => {
    try {
      axios.post("/admin/vlogs", data).then((res) => {
        reset();
        navigate("/admin/vlogs");
      });
    } catch (error) {
      console.error("Error adding place:", error);
    }
  };
  return (
    <div id="main" className="bg-gray-100 w-full h-screen flex flex-col sm:flex-row">
      <SideNav />
      <SideNavMobile />
      <div className="container h-full w-full sm:w-[80%] sm:pt-10 mx-auto py-4 sm:py-8 px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
          Add New Vlog
        </h2>

        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="bg-white shadow-md rounded-lg py-4 px-3 sm:p-6"
        >
          <div className="mb-4">
            <label htmlFor="title" className="block font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              {...register("title", { required: "Title is required" })}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              rows="4"
              placeholder="Enter a brief description of the package"
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="videoUrl"
              className="block font-medium text-gray-700"
            >
              Video URL
            </label>
            <input
              type="text"
              {...register("videoUrl", { required: "Video URL is required" })}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            {errors.videoUrl && (
              <p className="text-red-500 text-sm">{errors.videoUrl.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-[#3D8D7A] cursor-pointer text-white py-2 px-4 rounded"
          >
            Add Vlog
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddVlog;
