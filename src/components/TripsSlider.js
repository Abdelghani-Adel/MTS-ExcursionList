import React from "react";
import Slider from "react-slick/lib/slider";
import tripsList from "../data.json";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import TripCard from "./TripCard";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  auto: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const TripsSlider = () => {
  return (
    <Slider {...settings}>
      {tripsList.map((trip) => {
        return (
          <div key={trip.id}>
            <TripCard trip={trip} />
          </div>
        );
      })}
    </Slider>
  );
};

export default TripsSlider;
