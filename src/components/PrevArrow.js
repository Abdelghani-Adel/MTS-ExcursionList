import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const PrevArrow = ({ onClick }) => (
  <div
    className={`absolute z-10 w-8 h-8 bg-blue-600 p-2 text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700`}
    style={{ left: "5px", top: "45%" }}
    onClick={onClick}
  >
    <FaArrowLeft className="w-full h-full" />
  </div>
);

export default PrevArrow;
