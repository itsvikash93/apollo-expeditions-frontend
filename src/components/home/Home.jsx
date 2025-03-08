import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import AboutUs from "./Aboutus";
import Experinces from "./Experinces";
import Associations from "./Associations";
import Nav from "../navbar/Nav";
import Footer from "../footer/Footer";
import axios from "../../utils/axios";
import EnquiryForm from "../EnquiryForm";
import UpcomingTrips from "./UpcomingTrips";

const Home = () => {
  const [upcomingTrips, setUpcomingTrips] = useState([]);
  const [partners, setPartners] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTrip, setSelectedTrip] = useState(null);

  useEffect(() => {
    axios.get("/upcoming-trips").then((res) => {
      setUpcomingTrips(res.data);
      setLoading(false);
    });
    axios.get("/experiences").then((res) => {
      setExperiences(res.data);
    });
    axios.get("/partners").then((res) => {
      setPartners(res.data);
    });
  }, []);

  return (
    <div className="w-full flex flex-col">
      <Nav className="absolute" />
      <Hero />
      <AboutUs />
      {upcomingTrips.length > 0 && (
        <UpcomingTrips
          upcomingTrips={upcomingTrips}
          setSelectedTrip={setSelectedTrip}
        />
      )}
      {experiences.length > 0 && <Experinces experiences={experiences} />}
      {partners.length > 0 && <Associations partners={partners} />}
      <Footer />

      {selectedTrip && (
        <EnquiryForm
          type="trip"
          element={selectedTrip}
          onClose={() => setSelectedTrip(null)}
        />
      )}
    </div>
  );
};

export default Home;
