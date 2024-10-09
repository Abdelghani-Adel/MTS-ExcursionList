import React from "react";
import { QRCodeSVG } from "qrcode.react";
import { FaCalendarAlt, FaMapMarkerAlt, FaStar, FaUser } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { Link } from "react-router-dom";

const TripCard = ({ trip }) => {
  const URL = `http://mts-trips.vercel.app/trip-details/${trip.id}`;

  return (
    <div className="rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row relative">
      <QRCodeSVG value={URL} className="absolute top-4 right-4" />

      <div className="md:w-1/2 p-6">
        <img src={trip.image} alt={trip.name} className="w-full h-full rounded-lg" />
      </div>

      <div className="p-6 md:w-1/2">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{trip.name}</h2>
        <div className="flex items-center text-gray-600 mb-2">
          <FaMapMarkerAlt className="mr-2 text-red-500" />
          <span>{trip.location}</span>
        </div>

        <p className="text-gray-700 mb-4">{trip.description}</p>

        <div className="flex items-center justify-between mb-4">
          <span className="flex items-center">
            <FaStar className="text-yellow-500 mr-1" />
            <span>{trip.rating}</span>
          </span>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Activities</h3>
          <ul className="list-disc list-inside text-gray-700">
            {trip.activities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Available Dates</h3>
          <ul className="list-disc list-inside text-gray-700">
            {trip.availability.map((date, index) => (
              <li key={index}>
                <FaCalendarAlt className="inline-block mr-2 text-blue-500" />
                {date}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-4 flex items-center justify-between">
          <span className="flex items-center">
            <FaUser className="text-gray-500 mr-2" />
            <span>
              {trip.guide.name} - {trip.guide.language} Guide
            </span>
          </span>

          <span className="flex items-center text-3xl text-green-600 font-bold">
            <MdOutlineAttachMoney className="mr-1" />
            <span>{trip.price}</span>
          </span>
        </div>

        <Link
          to="/trip-details/1"
          className="block text-center  bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default TripCard;
