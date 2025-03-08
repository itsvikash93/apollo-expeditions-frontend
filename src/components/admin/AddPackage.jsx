import React, { useEffect, useState } from "react";
import SideNav from "./SideNav";
import axios from "../../utils/axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import SideNavMobile from "./SideNavMobile";
const AddPackage = () => {
  const navigate = useNavigate();
  const [offers, setOffers] = useState([]);
  const getOffers = () => {
    axios.get("/offers").then((res) => {
      setOffers(res.data);
    });
  };

  useEffect(() => {
    getOffers();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formatDate = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const startDay = start.getDate();
    const endDay = end.getDate();

    const startMonth = start.toLocaleString("en-US", { month: "short" });
    const endMonth = end.toLocaleString("en-US", { month: "short" });

    const startYear = start.getFullYear();
    const endYear = end.getFullYear();

    if (startYear === endYear) {
      if (startMonth === endMonth) {
        return `${startDay}-${endDay} ${startMonth} ${startYear}`;
      } else {
        return `${startDay} ${startMonth} - ${endDay} ${endMonth} ${startYear}`;
      }
    } else {
      return `${startDay} ${startMonth} ${startYear} - ${endDay} ${endMonth} ${endYear}`;
    }
  };

  const handleFormSubmit = (data) => {
    try {
      const formattedDate = formatDate(data.startDate, data.endDate); // Format date range

      const formData = {
        ...data,
        date: formattedDate,
        image: data.image[0].name,
        pdf: data.pdf[0].name,
      };
      axios.post("/admin/packages", formData).then(async (res) => {
        const res1 = await axios.put(res.data.imageUrl, data.image[0], {
          headers: {
            "Content-Type": "image/jpeg",
          },
        });

        const res2 = await axios.put(res.data.pdfUrl, data.pdf[0], {
          headers: {
            "Content-Type": "application/pdf",
          },
        });

        if (res1.status === 200 && res2.status === 200) {
          reset();
          navigate("/admin/packages");
        }
      });
    } catch (error) {
      console.error("Error adding place:", error);
    }
  };
  return (
    <div
      id="main"
      className="bg-gray-100 w-full h-screen flex flex-col sm:flex-row"
    >
      <SideNav />
      <SideNavMobile />
      <div className="container h-full w-full sm:w-[80%] sm:pt-10 mx-auto py-4 sm:py-8 px-4 overflow-y-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
          Add New Package
        </h2>

        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="bg-white shadow-md rounded-lg py-4 px-3 sm:p-6"
        >
          <div className="mb-4">
            <label htmlFor="title" className="block font-medium text-gray-700">
              Package Title
            </label>
            <input
              type="text"
              {...register("title", { required: "Package title is required" })}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter package title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="offer" className="block font-medium text-gray-700">
              Offer and Package
            </label>
            <select
              {...register("offer", { required: "Offer is required" })}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            >
              <option value="" disabled selected>
                Select Offer and Package
              </option>
              {offers.map((offer) => (
                <option value={offer._id} key={offer._id}>
                  {offer.name}
                </option>
              ))}
            </select>
            {errors.offer && (
              <p className="text-red-500 text-sm">{errors.offer.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block font-medium">Location:</label>
            <input
              type="text"
              {...register("location", { required: "Location is required" })}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter package location"
            />
            {errors.location && (
              <p className="text-red-500 text-sm">{errors.location.message}</p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mb-6">
            <div className="w-full">
              <label className="block text-gray-700 font-semibold mb-2">
                Start Date:
              </label>
              <input
                type="date"
                {...register("startDate", {
                  required: "Start Date is required",
                })}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#3D8D7A] transition duration-200"
              />
              {errors.startDate && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.startDate.message}
                </p>
              )}
            </div>

            <div className="w-full">
              <label className="block text-gray-700 font-semibold mb-2">
                End Date:
              </label>
              <input
                type="date"
                {...register("endDate", { required: "End Date is required" })}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#3D8D7A] transition duration-200"
              />
              {errors.endDate && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.endDate.message}
                </p>
              )}
            </div>
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
            <label className="block font-medium">Price:</label>
            <input
              type="text"
              {...register("price", { required: "Price is required" })}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter package price"
            />
            {errors.price && (
              <p className="text-red-500 text-sm">{errors.price.message}</p>
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
            className="bg-[#3D8D7A] cursor-pointer text-white py-2 px-4 rounded "
          >
            Add Package
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPackage;
