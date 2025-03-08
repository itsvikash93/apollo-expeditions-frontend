import React, { useState, useEffect } from "react";
import SideNav from "../SideNav";
import axios from "../../../utils/axios";
import { Link } from "react-router-dom";
import SideNavMobile from "../SideNavMobile";
const AdminPopularPlaces = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/popular-places").then((res) => {
      setPlaces(res.data);
      setLoading(false);
    });
  }, []);

  // Group places by country
  const groupedPlaces = places.reduce((acc, place) => {
    const countryName = place.country.name;
    if (!acc[countryName]) {
      acc[countryName] = [];
    }
    acc[countryName].push(place);
    return acc;
  }, {});

  const handleDelete = (id) => {
    axios.delete(`/admin/popular-places/${id}`).then((res) => {
      setPlaces(places.filter((place) => place._id !== id));
    });
  };

  return (
    <div id="main" className="bg-gray-100 w-full h-screen flex flex-col sm:flex-row">
      <SideNav />
      <SideNavMobile />
      <div className="container h-full w-full sm:w-[80%] mx-auto py-4 sm:py-8 px-4 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-black">
            Popular Places
          </h1>
          <Link
            to="/admin/popular-places/add"
            className="bg-[#3D8D7A] text-sm sm:text-base text-white px-4 py-2 rounded-md"
          >
            Add Popular Place
          </Link>
        </div>
        {places.length === 0 ? (
          <div className="flex justify-center items-center mt-10">
            <h1 className="text-2xl font-bold">
              No popular places found, add one
            </h1>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap mt-4 gap-6 w-full">
              {loading ? (
                <div className="flex justify-center items-center h-full">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
                </div>
              ) : (
                Object.keys(groupedPlaces).map((country) => (
                  <div key={country} className="w-full">
                    <h2 className="text-xl sm:text-2xl font-bold text-black mt-6">
                      {country}
                    </h2>
                    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {groupedPlaces[country].map((place) => (
                        <div
                          key={place._id}
                          className="px-4 py-3 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-102"
                        >
                          <h3 className="text-xl sm:text-2xl font-semibold text-black hover:text-blue-600 transition-colors">
                            {place.name}
                          </h3>
                          <p className="text-md text-black mt-2">
                            {place.description}
                          </p>
                          <div className="flex gap-4 mt-4">
                            <button
                              onClick={() => handleDelete(place._id)}
                              className="bg-red-600 cursor-pointer text-white px-4 py-1 rounded-md hover:bg-red-700 transition-colors"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      ))}
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

export default AdminPopularPlaces;
