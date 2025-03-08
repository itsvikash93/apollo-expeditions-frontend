import React from "react";
import axios from "../../utils/axios";
import { useForm } from "react-hook-form";
import SideNav from "./SideNav";
import SideNavMobile from "./SideNavMobile";
import { useNavigate } from "react-router-dom";
const AddOffer = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const handleFormSubmit = (data) => {
    try {
      axios.post("/admin/offers", data).then((res) => {
        reset();
        navigate("/admin/offers");
      });
    } catch (error) {
      console.error("Error adding offer:", error);
    }
  };
  return (
    <div id="main" className="bg-gray-100 w-full h-screen flex flex-col sm:flex-row">
      <SideNav />
      <SideNavMobile />
      <div className="container h-full w-full sm:w-[80%] sm:pt-10 mx-auto py-4 sm:py-8 px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
          Add New Offer
        </h2>

        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="bg-white shadow-md rounded-lg py-4 px-3 sm:p-6"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium text-gray-700">
              Offer Name
            </label>
            <input
              type="text"
              {...register("name", { required: "Offer name is required" })}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter offer name"
              // required
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <input
            type="submit"
            value="Add Offer"
            className="bg-[#3D8D7A] cursor-pointer text-white py-2 px-4 rounded"
          />
        </form>
      </div>
    </div>
  );
};

export default AddOffer;
