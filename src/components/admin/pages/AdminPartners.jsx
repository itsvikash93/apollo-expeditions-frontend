import React, { useState } from "react";
import SideNav from "../SideNav";
import { useEffect } from "react";
import axios from "../../../utils/axios";
import { Link } from "react-router-dom";
import SideNavMobile from "../SideNavMobile";
const AdminPartners = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/partners").then((res) => {
      setPartners(res.data);
      setLoading(false);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/admin/partners/${id}`).then((res) => {
      setPartners(partners.filter((partner) => partner._id !== id));
    });
  };
  
  return (
    <div id="main" className="bg-gray-100 w-full h-screen flex flex-col sm:flex-row">
      <SideNav />
      <SideNavMobile />
      <div className="container h-full w-full sm:w-[80%] mx-auto py-4 sm:py-8 px-4 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-black">
            Partners
          </h1>
          <Link
            to="/admin/partners/add"
            className="bg-[#3D8D7A] text-sm sm:text-base text-white px-4 py-2 rounded-md"
          >
            Add Partner
          </Link>
        </div>
        {partners.length === 0 ? (
          <div className="flex justify-center items-center mt-10">
            <h1 className="text-2xl font-bold">No partners found, add one</h1>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap mt-4 gap-4 w-full">
              {loading ? (
                <div className="flex justify-center items-center h-full">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
                </div>
              ) : (
                partners.map((partner) => (
                  <div
                    key={partner._id}
                    className="px-4 py-3 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-102 w-full md:w-[30%]"
                  >
                    <h2 className="text-xl sm:text-2xl font-semibold text-black hover:text-blue-600 transition-colors">
                      {partner.name}
                    </h2>
                    <p className="text-md text-black mt-2">
                      {partner.description}
                    </p>
                    <div className="flex gap-4 mt-4">
                      <button
                        onClick={() => handleDelete(partner._id)}
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

export default AdminPartners;
