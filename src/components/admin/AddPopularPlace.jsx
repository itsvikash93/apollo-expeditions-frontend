import React, { useEffect, useState } from "react";
import SideNav from "./SideNav";
import axios from "../../utils/axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import SideNavMobile from "./SideNavMobile";
const AddPopularPlace = () => {
  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
  const getCountries = () => {
    axios.get("/countries").then((res) => {
      setCountries(res.data);
    });
  };

  useEffect(() => {
    getCountries();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    try {
      const formData = {
        ...data,
        image: data.image[0].name,
        pdf: data.pdf[0].name,
      };
      axios.post("/admin/popular-places", formData).then(async (res) => {
        const response = await axios.put(res.data.imageUrl, data.image[0], {
          headers: {
            "Content-Type": "image/jpeg",
          },
        });

        const response2 = await axios.put(res.data.pdfUrl, data.pdf[0], {
          headers: {
            "Content-Type": "application/pdf",
          },
        });

        if (response.status === 200 && response2.status === 200) {
          reset();
          navigate("/admin/popular-places");
        }
      });
    } catch (error) {
      console.error("Error adding place:", error);
    }
  };
  return (
    <div className="bg-gray-100 w-full h-screen flex flex-col sm:flex-row">
      <SideNav />
      <SideNavMobile />
      <div className="container h-full w-full sm:w-[80%] sm:pt-10 mx-auto py-4 sm:py-8 px-4 overflow-y-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
          Add New Popular Place
        </h2>

        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="bg-white shadow-md rounded-lg py-4 px-3 sm:p-6"
        >
          <div className="mb-4">
            <label htmlFor="title" className="block font-medium text-gray-700">
              Place Title
            </label>
            <input
              type="text"
              {...register("title", { required: "Place title is required" })}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter place title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="country"
              className="block font-medium text-gray-700"
            >
              Country
            </label>
            <select
              {...register("country", { required: "Country is required" })}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            >
              <option value="" disabled selected>
                Select Country
              </option>
              {countries.map((country) => (
                <option value={country._id} key={country._id}>
                  {country.name}
                </option>
              ))}
            </select>
            {errors.country && (
              <p className="text-red-500 text-sm">{errors.country.message}</p>
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
              placeholder="Enter a brief description of the place"
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
              accept="image/*"
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="pdf" className="block font-medium text-gray-700">
              PDF
            </label>
            <input
              type="file"
              {...register("pdf", { required: "PDF is required" })}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              accept="application/pdf"
            />
            {errors.pdf && (
              <p className="text-red-500 text-sm">{errors.pdf.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-[#3D8D7A] cursor-pointer text-white py-2 px-4 rounded"
          >
            Add Place
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPopularPlace;
