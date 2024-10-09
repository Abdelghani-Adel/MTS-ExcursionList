import React from "react";
import TripInfo from "../components/TripInfo";
import PaymentCard from "../components/PaymentCard";

const TripDetailsPage = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row">
      <div className="md:w-3/5">
        <TripInfo />
      </div>
      <div className="md:w-2/5">
        <PaymentCard price={500} />
      </div>
    </div>
  );
};

export default TripDetailsPage;
