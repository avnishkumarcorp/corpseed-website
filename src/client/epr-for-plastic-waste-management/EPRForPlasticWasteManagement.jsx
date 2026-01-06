import React, { useEffect, useRef } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import ScrollNav from "./ScrollNavView";

const EPRForPlasticWasteManagement = () => {
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
    <div className="px-4 sm:px-6 lg:px-16 py-12 bg-white">
      <div className="flex flex-col lg:flex-row gap-12 items-start">

        {/* LEFT CONTENT */}
        <div className="lg:w-2/3 space-y-6">
          <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded">
            INCLUDES FREE SUPPORT
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-blue-600">EPR For</span> Plastic Waste
            <br/>Management
          </h1>

          <p className="text-gray-600 max-w-2xl">
            EPR for Plastic Waste Management is the mandatory registration for
            PIBOs with the Central and State Pollution Control Boards as per the
            scope of their operations. This ensures fulfillment of EPR
            obligations and compliance with CPCB guidelines.
          </p>

          {/* STATS */}
          <div className="flex flex-wrap gap-10 pt-6">
            <div>
              <p className="text-blue-600 font-bold text-lg">10000+</p>
              <p className="text-gray-500 text-sm">Happy Customers</p>
            </div>

            <div>
              <p className="text-blue-600 font-bold text-lg">500+</p>
              <p className="text-gray-500 text-sm">CA, CS & Lawyers</p>
            </div>

            <div>
              <p className="text-blue-600 font-bold text-lg">7+</p>
              <p className="text-gray-500 text-sm">Offices</p>
            </div>
          </div>

          <p className="text-sm text-gray-600">
            ⭐ Rated <strong>4.9</strong> Stars by{" "}
            <strong>69,232+</strong> customers globally
          </p>
        </div>

        {/* RIGHT FORM (SMALL & RIGHT-ALIGNED) */}
        <div className="w-full lg:w-90 lg:ml-auto">
          <div className="bg-white border  border-gray-300 rounded-lg p-5 space-y-5">

            <h3 className="text-lg font-semibold text-center">
              Schedule a call back
            </h3>

            <input
              type="text"
              placeholder="Name *"
              className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-1.5 text-sm"
            />

            <input
              ref={phoneRef}
              type="tel"
              placeholder="Phone Number *"
              className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-1.5 text-sm"
            />

            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-600">Get updates on WhatsApp</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:bg-blue-600"></div>
                <span className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-4"></span>
              </label>
            </div>

            <button className="w-full bg-blue-600 text-white py-2.5 rounded-md text-sm hover:bg-blue-700 transition">
              Submit
            </button>
          </div>
        </div>

      </div>


      <ScrollNav />
    </div>
  );
};

export default EPRForPlasticWasteManagement;
