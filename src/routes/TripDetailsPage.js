import React, { useEffect, useState } from "react";
import TripInfo from "../components/TripInfo";
import UserDetails from "../components/UserDetails";
import MultiStepForm from "../components/MultiStepForm";
import { useLocation } from "react-router-dom";
import PaymentDetailsForm from "../components/PaymentDetailsForm";

const TripDetailsPage = () => {
  const { search } = useLocation();
  const [step, setStep] = useState(1);
  const [paymentURL, setPaymentURL] = useState("");

  const [userDetails, setUserDetails] = useState({
    pax: 1,
    dates: "",
    name: "",
    email: "",
    phone: "",
  });

  const userDetailsChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  useEffect(() => {
    const { pax, name, email, phone } = userDetails;
    const URL = `https://mts-trips.vercel.app/trip-details/1?pax=${pax}&name=${name}&email=${email}&phone=${phone}`;
    setPaymentURL(URL);
  }, [userDetails]);

  useEffect(() => {
    const query = new URLSearchParams(search);
    const pax = query.get("pax");
    const name = query.get("name");
    const email = query.get("email");
    const phone = query.get("phone");

    if (pax) setUserDetails((prev) => ({ ...prev, pax }));
    if (name) setUserDetails((prev) => ({ ...prev, name }));
    if (email) setUserDetails((prev) => ({ ...prev, email }));
    if (phone) setUserDetails((prev) => ({ ...prev, phone }));

    if (pax | name | phone | email) setStep(3);
  }, [search]);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const renderStepContent = (step) => {
    switch (step) {
      case 1:
        return (
          <div className="w-full md:w-2/3 mx-auto p-6 bg-white rounded-lg shadow-lg">
            <TripInfo />
            <button
              className="px-4 py-2 bg-blue-500 hover:bg-blue-700 transition-all text-white rounded-md w-full"
              onClick={nextStep}
            >
              Book This Trip
            </button>
          </div>
        );
      case 2:
        return (
          <div className="w-full md:max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg space-y-3">
            <UserDetails price={500} form={userDetails} onChange={userDetailsChangeHandler} />
            <div className="flex space-x-3">
              <button
                className="px-4 py-2 bg-blue-500 hover:bg-blue-700 transition-all text-white rounded-md w-full"
                onClick={prevStep}
              >
                Trip Details
              </button>
              <button
                className="px-4 py-2 bg-blue-500 hover:bg-blue-700 transition-all text-white rounded-md w-full"
                onClick={nextStep}
              >
                Continue To Payment
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="w-full md:max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <PaymentDetailsForm URL={paymentURL} />

            <div className="flex space-x-3">
              <button
                className="px-4 py-2 bg-blue-500 hover:bg-blue-700 transition-all text-white rounded-md w-full"
                onClick={prevStep}
              >
                Your Details
              </button>
              <button
                className="px-4 py-2 bg-blue-500 hover:bg-blue-700 transition-all text-white rounded-md w-full"
                onClick={nextStep}
              >
                Submit Payment
              </button>
            </div>
          </div>
        );
      default:
        return <div>Unknown step</div>;
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Progress bar */}
      <div className="flex items-center justify-between w-full max-w-2xl mb-8">
        <div className="relative flex flex-col items-center">
          <div
            className={`w-8 h-8 rounded-full ${
              step >= 1 ? "bg-blue-500" : "bg-gray-300"
            } flex items-center justify-center text-white`}
          >
            1
          </div>
          <p className="text-sm mt-2">Trip Details</p>
        </div>
        <div className="flex-grow border-t-2 border-gray-300"></div>
        <div className="relative flex flex-col items-center">
          <div
            className={`w-8 h-8 rounded-full ${
              step >= 2 ? "bg-blue-500" : "bg-gray-300"
            } flex items-center justify-center text-white`}
          >
            2
          </div>
          <p className="text-sm mt-2">Your details</p>
        </div>
        <div className="flex-grow border-t-2 border-gray-300"></div>
        <div className="relative flex flex-col items-center">
          <div
            className={`w-8 h-8 rounded-full ${
              step >= 3 ? "bg-blue-500" : "bg-gray-300"
            } flex items-center justify-center text-white`}
          >
            3
          </div>
          <p className="text-sm mt-2">Payment details</p>
        </div>
      </div>

      {renderStepContent(step)}
    </div>
  );
};

export default TripDetailsPage;
