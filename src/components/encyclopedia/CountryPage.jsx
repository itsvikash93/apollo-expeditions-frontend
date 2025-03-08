import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../../utils/axios";
import { FaArrowRightLong } from "react-icons/fa6";
import Nav from "../navbar/Nav";
import Footer from "../footer/Footer";

const CountryPage = () => {
  const { countrySlug } = useParams();

  const [places, setPlaces] = useState([]);
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await axios.get(`/countries/${countrySlug}`);
        setCountry(response.data);
        setPlaces(response.data.popularPlaces);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPlaces();
  }, [countrySlug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg_Third">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg_Third">
        <div className="text-red-600 text-xl font-semibold p-6 bg-white rounded-lg shadow-md">
          <span className="mr-2">⚠️</span>Error: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg_Third flex flex-col">
      <Nav className="absolute" />
      <div className="container mx-auto px-4 pt-18 sm:pt-0 py-8 sm:px-6 sm:mt-24">
        <div className="text-center mb-5 sm:mb-8 lg:mb-10">
          <h1 className="text-4xl md:text-5xl custom-font1 tracking-wide mb-4">
            Discover {country.name}
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Explore the most popular destinations and hidden gems in{" "}
            {country.name}
            {/* //dynamiccccccccccccccc */}
          </p>
        </div>

        {places.length > 0 && (
          <div className="w-full flex flex-wrap justify-center gap-8 flex-shrink-0">
            {places.map((place) => (
              <div
                key={place._id}
                className="bg-white w-full sm:w-[48%] lg:w-[26%] rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-103"
              >
                <div className="relative h-56 w-full">
                  <img
                    src={place.imageUrl}
                    alt={place.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="py-4 px-5">
                  <h4 className="text-xl custom-font1 text-Primary">
                    {place.title}
                  </h4>
                  <h4 className="text-lg text-Primary mb-2">
                    {place.description}
                  </h4>
                  <Link
                    to={place.pdfUrl}
                    target="_blank"
                    className="mt-3 inline-block px-3 sm:px-5 py-2 bg-black Third cursor-pointer font-bold rounded-lg shadow-md"
                  >
                    <span className="text-white">More Details</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CountryPage;
