import React, { useEffect, useRef } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";

const EPROverviewForm = () => {
  const phoneRef = useRef(null);

  useEffect(() => {
    if (!phoneRef.current) return;

    const iti = intlTelInput(phoneRef.current, {
      initialCountry: "in",
      separateDialCode: true,
      utilsScript:
        "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
    });

    return () => iti.destroy();
  }, []);

  return (
    <div className="w-full border border-gray-300 rounded-lg p-6 bg-white relative">
      <h3 className="text-center font-semibold mb-2">
        Enquiry Now for
      </h3>

      <p className="text-center text-blue-600 font-medium mb-6">
        EPR For Plastic Waste Management
      </p>

      <form className="space-y-5">
        <input
          type="text"
          placeholder="Name *"
          className="w-full border-b outline-none py-2 text-sm"
          required
        />

        <input
          type="email"
          placeholder="Email *"
          className="w-full border-b outline-none py-2 text-sm"
          required
        />

        <input
          ref={phoneRef}
          type="tel"
          placeholder="Phone"
          className="w-full border-b outline-none py-2 text-sm"
        />

        <input
          type="text"
          placeholder="City *"
          className="w-full border-b outline-none py-2 text-sm"
          required
        />

        <button className="w-full bg-blue-600 text-white py-3 rounded-md text-sm font-medium">
          Get Free Consultation
        </button>
      </form>

      <p className="text-xs text-gray-500 text-center mt-4">
        By registering you agree to our{" "}
        <span className="text-blue-600 cursor-pointer">
          Terms of Use & Privacy Policy
        </span>
      </p>
    </div>
  );
};

export default EPROverviewForm;

