import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";

import Dashboard from "../components/admin/Dashboard";
import AddOffer from "../components/admin/AddOffer";
import AddPackage from "../components/admin/AddPackage";
import EnquiryDetails from "../components/admin/EnquiryDetails";

import AddCountry from "../components/admin/AddCountry";
import AddPopularPlace from "../components/admin/AddPopularPlace";
import AddVlog from "../components/admin/AddVlog";
import Vlogs from "../components/vlogs/Vlogs";
import Contact from "../components/contact/Contact";
import CountryPage from "../components/encyclopedia/CountryPage";
import Offers from "../components/offers/Offers";
import AddExperience from "../components/admin/AddExperience";
import AddPartner from "../components/admin/AddPartner";
import AdminVlogs from "../components/admin/pages/AdminVlogs";
import AdminPopularPlaces from "../components/admin/pages/AdminPopularPlaces";
import AdminCountries from "../components/admin/pages/AdminCountries";
import AdminPackages from "../components/admin/pages/AdminPackages";
import AdminPartners from "../components/admin/pages/AdminPartners";
import AdminOffers from "../components/admin/pages/AdminOffers";
import AdminExperiences from "../components/admin/pages/AdminExperiences";
import AdminUpcomingTrips from "../components/admin/pages/AdminUpcomingTrips";
import AddUpcomingTrip from "../components/admin/AddUpcomingTrip";
import AdminEnquiries from "../components/admin/pages/AdminEnquiries";
import AdminLogin from "../components/admin/AdminLogin";
import PrivateRoutes from "./PrivateRoutes";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/offers/:offerSlug" element={<Offers />} />
      <Route path="/encyclopedia/:countrySlug" element={<CountryPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/vlogs" element={<Vlogs />} />
      {/* Admin routes */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin" element={<PrivateRoutes />}>
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/offers" element={<AdminOffers />} />
        <Route path="/admin/offers/add" element={<AddOffer />} />
        <Route path="/admin/experiences" element={<AdminExperiences />} />
        <Route path="/admin/experiences/add" element={<AddExperience />} />
        <Route path="/admin/partners" element={<AdminPartners />} />
        <Route path="/admin/partners/add" element={<AddPartner />} />
        <Route path="/admin/upcoming-trips" element={<AdminUpcomingTrips />} />
        <Route path="/admin/upcoming-trips/add" element={<AddUpcomingTrip />} />
        <Route path="/admin/packages" element={<AdminPackages />} />
        <Route path="/admin/packages/add" element={<AddPackage />} />
        <Route path="/admin/countries" element={<AdminCountries />} />
        <Route path="/admin/countries/add" element={<AddCountry />} />
        <Route path="/admin/popular-places" element={<AdminPopularPlaces />} />
        <Route path="/admin/popular-places/add" element={<AddPopularPlace />} />
        <Route path="/admin/vlogs" element={<AdminVlogs />} />
        <Route path="/admin/vlogs/add" element={<AddVlog />} />
        <Route path="/admin/enquiries" element={<AdminEnquiries />} />
        <Route path="/admin/enquiries/:id" element={<EnquiryDetails />} />
      </Route>
    </Routes>
  );
};

export default Routing;
