import React, { useEffect, useRef } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import ErpOverview from "../epr-for-plastic-waste-management/ErpOverview"
import ScrollNav from "./ScrollNavView";

const EPRForPlasticWasteManagement = () => {
  const phoneRef = useRef(null);

  useEffect(() => {
    if (!phoneRef.current) return;

    const iti = intlTelInput(phoneRef.current, {
      initialCountry: "in",
      separateDialCode: true,
      loadUtils: () =>
        import("intl-tel-input/build/js/utils.js"),
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
            Management
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
            ⭐ Rated <strong>4.9</strong> Stars by <strong>69,232+</strong>{" "}
            customers globally
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="lg:w-1/3 w-full">
          <div className="bg-white shadow-xl border rounded-lg p-6 space-y-6">

            <h3 className="text-xl font-semibold">
              Schedule a call back
            </h3>

            <input
              type="text"
              placeholder="Name *"
              className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
            />

            <input
              ref={phoneRef}
              type="tel"
              placeholder="Phone Number *"
              className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
            />

            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Get updates on WhatsApp</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600"></div>
                <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5"></span>
              </label>
            </div>

            <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
              Submit
            </button>
          </div>
        </div>

      </div>
      <ErpOverview/>
      <ScrollNav/>
        
    </div>
  );
};

export default EPRForPlasticWasteManagement;
