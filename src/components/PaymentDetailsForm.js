import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";

const PaymentDetailsForm = ({ URL }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment processing logic here
    console.log("Payment Details Submitted", {
      cardNumber,
      expiryDate,
      cvv,
      nameOnCard,
    });
  };

  return (
    <div className="max-w-lg mx-auto  bg-white rounded-lg s">
      <div className="relative flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold m-0 text-center">Payment Details</h2>
        <QRCodeSVG value={URL} className="w-14 h-14" />
      </div>

      <form onSubmit={handleSubmit}>
        {/* Card Number */}
        <div className="mb-4">
          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="1234 5678 9012 3456"
            maxLength={16}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Expiry Date */}
        <div className="mb-4">
          <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
            Expiry Date
          </label>
          <input
            type="text"
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
            maxLength={5}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* CVV */}
        <div className="mb-4">
          <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            placeholder="123"
            maxLength={3}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Name on Card */}
        <div className="mb-6">
          <label htmlFor="nameOnCard" className="block text-sm font-medium text-gray-700">
            Name on Card
          </label>
          <input
            type="text"
            id="nameOnCard"
            value={nameOnCard}
            onChange={(e) => setNameOnCard(e.target.value)}
            placeholder="John Doe"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Submit Button
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit Payment
          </button>
        </div> */}
      </form>
    </div>
  );
};

export default PaymentDetailsForm;
