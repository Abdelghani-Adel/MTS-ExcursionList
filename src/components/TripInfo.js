import React from "react";
import {
  FaMapMarkerAlt,
  FaClock,
  FaDollarSign,
  FaStar,
  FaCalendarAlt,
  FaUserTie,
  FaCheckCircle,
} from "react-icons/fa";

// Simulate fetching the trip data based on the ID
const trip = {
  id: 4,
  image: "/img/trip.jpg",
  name: "Red Sea Diving Experience",
  location: "Sharm El-Sheikh, Egypt",
  duration: "3 days",
  price: 500,
  description: "Discover the rich underwater life of the Red Sea in a 3-day diving experience.",
  activities: ["Scuba diving", "Snorkeling", "Boat tour"],
  rating: 4.8,
  availability: ["2024-11-10", "2024-11-20", "2024-12-01"],
  guide: {
    name: "Omar El-Sayed",
    language: "English, French",
  },
};

const TripInfo = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      {/* Image */}
      <img src={trip.image} alt={trip.name} className="w-full h-72 object-cover rounded-md mb-6" />

      {/* Trip Name */}
      <h1 className="text-4xl font-bold text-blue-800 mb-4">{trip.name}</h1>

      {/* Trip Description */}
      <p className="text-lg text-gray-600 mb-6">{trip.description}</p>

      {/* Location, Duration, Price */}
      <div className="flex flex-col md:flex-row justify-between mb-5">
        {/* Location */}
        <div className="flex items-center text-lg">
          <FaMapMarkerAlt className="text-red-500 mr-2" />
          <span>{trip.location}</span>
        </div>

        {/* Duration */}
        <div className="flex items-center text-lg">
          <FaClock className="text-blue-500 mr-2" />
          <span>{trip.duration}</span>
        </div>

        {/* Price */}
        <div className="flex items-center text-lg">
          <FaDollarSign className="text-green-500 mr-2" />
          <span>${trip.price}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center text-lg mb-6">
          <FaStar className="text-yellow-500 mr-2" />
          <span>{trip.rating} / 5</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between">
        {/* Activities */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold flex items-center">
            <FaCheckCircle className="text-green-600 mr-2" />
            Activities:
          </h3>
          <ul className="list-disc pl-6 mt-2 text-gray-700">
            {trip.activities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </div>

        {/* Availability */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold flex items-center">
            <FaCalendarAlt className="text-purple-600 mr-2" />
            Available Dates:
          </h3>
          <ul className="list-disc pl-6 mt-2 text-gray-700">
            {trip.availability.map((date, index) => (
              <li key={index}>{new Date(date).toLocaleDateString()}</li>
            ))}
          </ul>
        </div>

        {/* Guide Information */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold flex items-center">
            <FaUserTie className="text-orange-600 mr-2" />
            Guide Information:
          </h3>
          <p className="mt-2 text-gray-700">
            {trip.guide.name} ({trip.guide.language})
          </p>
        </div>
      </div>
    </div>
  );
};

export default TripInfo;
