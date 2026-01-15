import React, { useRef, useEffect } from "react";
import { IoCall } from "react-icons/io5"; 
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
const Form = () => {
  const phoneRef = useRef(null);

  useEffect(() => {
    const iti = intlTelInput(phoneRef.current, {
      initialCountry: "in",
      separateDialCode: true,
      utilsScript:
        "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
    });

    return () => iti.destroy();
  }, []);

  return (
    <div className="relative w-full max-w-sm">
      
      {/*  FLOATING INFO BOX */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 bg-gray-200 p-4 text-center rounded w-3/4 shadow-md z-20">
        <p className="font-semibold">Why Wait. Start Now</p>
        <p className="flex justify-center items-center gap-1 text-blue-600">
          <IoCall />
          Call 7558640644 – Harshita
        </p>
        <p className="text-sm">We're available 24/7</p>
      </div>

      {/* FORM CARD */}
      <div className="mt-16 bg-white border border-gray-300 rounded-lg p-5 space-y-5 shadow-lg">
        <h3 className="text-lg font-semibold text-center">
          Schedule a call back
        </h3>

        <input
          type="text"
          placeholder="Name *"
          className="w-full border-b focus:outline-none border-gray-300 py-2 text-sm"
        />

        <input
          ref={phoneRef}
          type="tel"
          placeholder="Phone Number *"
          className="w-full border-b focus:outline-none py-2 text-sm"
        />

        <div className="flex justify-between items-center text-xs">
          <span>Get updates on WhatsApp</span>
          <input type="checkbox" />
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Submit
        </button>
      </div>
    </div>
  );
};
export default Form
