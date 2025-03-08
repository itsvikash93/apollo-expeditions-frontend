import React from "react";
import { Link, useLocation } from "react-router-dom";
import SideNav from "./SideNav";
import SideNavMobile from "./SideNavMobile";
const EnquiryDetails = () => {
  const location = useLocation();
  const { type, ...enquiry } = location.state;

  return (
    <div className="bg-gray-100 w-full h-screen flex flex-col sm:flex-row">
      <SideNav />
      <SideNavMobile />
      <div className="container h-full sm:pt-10 w-full sm:w-[80%] mx-auto py-4 sm:py-8 px-4">
        <h1 className="text-2xl font-bold mb-6">Enquiry Details</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">
            Details of {type.charAt(0).toUpperCase() + type.slice(1)} Enquiry
          </h2>
          <p className="mb-4">
            <strong>Name: </strong>
            {enquiry.name}
          </p>
          <p className="mb-4">
            <strong>Email: </strong>
            {enquiry.email}
          </p>
          <p className="mb-4">
            <strong>Phone: </strong>
            {enquiry.phone}
          </p>
          {enquiry.message && (
            <p className="mb-4">
              <strong>Message: </strong>
              {enquiry.message}
            </p>
          )}
          {enquiry.tripTitle && (
            <p className="mb-4">
              <strong>Trip Title: </strong>
              {enquiry.tripTitle}
            </p>
          )}
          {enquiry.packageTitle && (
            <p className="mb-4">
              <strong>Package Title: </strong>
              {enquiry.packageTitle}
            </p>
          )}
          {enquiry.tripLocation && (
            <p className="mb-4">
              <strong>Trip Location: </strong>
              {enquiry.tripLocation}
            </p>
          )}
          {enquiry.tripDate && (
            <p className="mb-4">
              <strong>Trip Date: </strong>
              {enquiry.tripDate}
            </p>
          )}

          <Link
            to="/admin/enquiries"
            className="text-blue-500 hover:text-blue-700"
          >
            Back to Enquiries
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EnquiryDetails;
