import React from "react";
import { FaArrowRight } from "react-icons/fa";

const NextArrow = ({ onClick }) => (
  <div
    className={`absolute z-10 w-8 h-8 bg-blue-600 p-2 text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700`}
    style={{ right: "5px", top: "45%" }}
    onClick={onClick}
  >
    <FaArrowRight className="w-full h-full" />
  </div>
);

export default NextArrow;
