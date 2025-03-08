import React, { useState } from "react";
import SideNav from "../SideNav";
import { useEffect } from "react";
import axios from "../../../utils/axios";
import { Link } from "react-router-dom";
import SideNavMobile from "../SideNavMobile";
const AdminExperiences = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/experiences").then((res) => {
      setExperiences(res.data);
      setLoading(false);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/admin/experiences/${id}`).then((res) => {
      setExperiences(experiences.filter((experience) => experience._id !== id));
    });
  };
  return (
    <div id="main" className="bg-gray-100 w-full h-screen flex flex-col sm:flex-row">
      <SideNav />
      <SideNavMobile />
      <div className="container h-full w-full sm:w-[80%] mx-auto py-4 sm:py-8 px-4 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-black">
            Traveller Experiences
          </h1>
          <Link
            to="/admin/experiences/add"
            className="bg-[#3D8D7A] text-sm sm:text-base text-white text-center px-4 py-2 rounded-md"
          >
            Add Experience
          </Link>
        </div>
        {experiences.length === 0 ? (
          <div className="flex justify-center items-center mt-10">
            <h1 className="text-2xl font-bold">
              No experiences found, add one
            </h1>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap mt-4 gap-4 w-full">
              {loading ? (
                <div className="flex justify-center items-center h-full">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
                </div>
              ) : (
                experiences.map((experience) => (
                  <div
                    key={experience._id}
                    className="px-4 py-3 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-102 w-full md:w-[30%]"
                  >
                    <img
                      src={experience.imageUrl}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="flex gap-4 mt-4">
                      <button
                        onClick={() => handleDelete(experience._id)}
                        className="bg-red-600 cursor-pointer text-white px-4 py-1 rounded-md hover:bg-red-700 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminExperiences;
