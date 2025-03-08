import React from "react";
import axios from "../../utils/axios";
import { useForm } from "react-hook-form";
import SideNav from "./SideNav";
import SideNavMobile from "./SideNavMobile";
import { useNavigate } from "react-router-dom";
const AddPartner = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleFormSubmit = (data) => {
    try {
      const formData = {
        name: data.name,
        description: data.description,
        image: data.image[0].name,
      };
      axios.post("/admin/partners", formData).then((res) => {
        axios
          .put(res.data.imageUrl, data.image[0], {
            headers: {
              "Content-Type": "image/jpeg",
            },
          })
          .then((res) => {
            reset();
            navigate("/admin/partners");
          });
        reset();
      });
    } catch (error) {
      console.error("Error adding partner:", error);
    }
  };
  return (
    <div
      id="main"
      className="bg-gray-100 w-full h-screen flex flex-col sm:flex-row"
    >
      <SideNav />
      <SideNavMobile />
      <div className="container h-full w-full sm:w-[80%] sm:pt-10 mx-auto py-4 sm:py-8 px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
          Add New Partner
        </h2>

        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="bg-white shadow-md rounded-lg py-4 px-3 sm:p-6"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium text-gray-700">
              Partner Name
            </label>
            <input
              type="text"
              {...register("name", { required: "Partner name is required" })}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter partner name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block font-medium text-gray-700"
            >
              Description
            </label>
            <input
              type="text"
              {...register("description", {
                required: "Description is required",
              })}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter partner description"
            />
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block font-medium text-gray-700">
              Image
            </label>
            <input
              type="file"
              {...register("image", { required: "Image is required" })}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter partner image"
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}
          </div>

          <input
            type="submit"
            value="Add Partner"
            className="bg-[#3D8D7A] cursor-pointer text-white py-2 px-4 rounded"
          />
        </form>
      </div>
    </div>
  );
};

export default AddPartner;
