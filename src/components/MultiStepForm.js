import { useState } from "react";
import TripInfo from "./TripInfo";
import UserDetails from "./UserDetails";
import PaymentDetailsForm from "./PaymentDetailsForm";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

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
            <UserDetails price={500} />
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
            <PaymentDetailsForm />

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

export default MultiStepForm;
